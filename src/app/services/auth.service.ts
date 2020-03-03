import { User } from './../interfaces/auth/user.interface';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class AuthService {

  private token = null;

  constructor(
    private http: HttpClient) {
  }

  register() {}

  login(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>('/api/auth/login', user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth-token', token)
            this.setToken(token)
          }
        )
      )
  }

  //Установить значение токена
  setToken(token: string) {
    this.token = token; 
  }

  //Получить токен
  getToken(): string {
    return this.token;
  }

  //Метод определяет находится ли пользователь в сессии
  isAuthenticated(): boolean {
    return !!this.token
  }

  //Выход из системы
  logout() {
    this.setToken(null);  //Удаляем токен
    localStorage.clear(); // Очищаем localStorage
  }
}