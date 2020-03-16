import { OrderPositionsComponent } from "./orders/order-positions/order-positions.component";
import { OrderCategoriesComponent } from "./orders/order-categories/order-categories.component";
import { CategoriesFormComponent } from "./categories/categories-form/categories-form.component";
import { OrdersComponent } from "./orders/orders.component";
import { CategoriesComponent } from "./categories/categories.component";
import { HistoryComponent } from "./history/history.component";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { OverviewComponent } from "./overview/overview.component";
import { AuthGuard } from "./guards/auth.guard";
import { SignupComponent } from "./signup/signup.component";
import { AdminLayoutComponent } from "./shared/layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./shared/layouts/auth-layout/auth-layout.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    //Определяем лайоут авторизации
    path: "",
    component: AuthLayoutComponent,
    children: [
      { path: "", redirectTo: "/login", pathMatch: "full" },
      { path: "login", component: LoginComponent },
      { path: "signup", component: SignupComponent }
    ]
  },
  {
    //Определяем лайоут админ-панели
    path: "",
    component: AdminLayoutComponent, //canActivate: [AuthGuard],
    children: [
      { path: "overview", component: OverviewComponent },
      { path: "analytics", component: AnalyticsComponent },
      { path: "history", component: HistoryComponent },
      {
        path: "order",
        component: OrdersComponent,
        children: [
          { path: "", component: OrderCategoriesComponent },
          { path: ":id", component: OrderPositionsComponent }
        ]
      },
      { path: "categories", component: CategoriesComponent },
      { path: "categories/new", component: CategoriesFormComponent },
      { path: "categories/:id", component: CategoriesFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
