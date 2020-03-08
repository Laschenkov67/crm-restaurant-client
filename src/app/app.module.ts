import { TokenInterceptor } from './interceptors/token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { SignupComponent } from './signup/signup.component';
import { OverviewComponent } from './overview/overview.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { OrdersComponent } from './orders/orders.component';
import { HistoryComponent } from './history/history.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { PositionFormComponent } from './categories/position-form/position-form.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    SignupComponent,
    OverviewComponent,
    AnalyticsComponent,
    OrdersComponent,
    HistoryComponent,
    CategoriesComponent,
    LoaderComponent,
    CategoriesFormComponent,
    PositionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
