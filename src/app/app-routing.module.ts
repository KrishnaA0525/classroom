import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurd } from './services/gaurds/auth-gaurd.guard';
import { CreateUpdateUserComponent } from './user/create-update-user/create-update-user.component';
import { UserComponent } from './user/user.component';
import { UsersOverviewComponent } from './user/users-overview/users-overview.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
      path: "dashboard",
      component: DashboardComponent,
      canActivate: [AuthGaurd],
      children: [
        {
          path: "home",
          component: HomeComponent
        },
        {
          path: "users",
          component: UserComponent,
          children: [
            {
              path: "overview",
              component: UsersOverviewComponent
            },{
              path: "create",
              component: CreateUpdateUserComponent
            },
            {
              path: "edit/:id",
              component: CreateUpdateUserComponent
            },
            {
                path: "",
                redirectTo: "overview",
                pathMatch: "full"
            }
          ]
        },
        {
            path: "",
            redirectTo: "home",
            pathMatch: "full"
        }
      ]
  },
  {
      path: "",
      redirectTo: "/login",
      pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
