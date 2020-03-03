import { AuthService } from './../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup;
  aSub: Subscription; //Переменная для контроля утечки памяти

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    //Создаем валидацию формы
    this.formLogin = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        // Теперь вы можете зайти в систему используя свои данные
      } else if (params['accessDenied']) {
        // Для начала авторизуйтесь в системе
      }
    })
  }

  ngOnDestroy() {
    //Проверяем есть ли стрим авторизации
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  onLogin() {
    //Отключаем форму на время запроса
    this.formLogin.disable();

    this.aSub = this.auth.login(this.formLogin.value).subscribe(
      () => this.router.navigate(['/overview']),
      error => {
        console.warn(error);
        this.formLogin.enable(); //Делаем форму снова активной если произошла ошибка
      }
    );
  }
}
