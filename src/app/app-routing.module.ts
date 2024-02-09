import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { AttendaceComponent } from './attendace/attendace.component';
import { SalaryComponent } from './salary/salary.component';
import { LeavesComponent } from './leaves/leaves.component';

const routes: Routes = [

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:NavbarComponent,
    children:[
     { path:'dashboard',
      component:DashboardComponent
     },
     {
      path:'emp',
      component:EmployeeComponent
     },
     {
      path:'attd',
      component:AttendaceComponent
     },
     {
      path:'sal',
      component:SalaryComponent
     },
     {
      path:'leaves',
      component:LeavesComponent
     }


    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
