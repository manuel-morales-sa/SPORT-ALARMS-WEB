import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { AlarmasComponent } from './alarmas/alarmas/alarmas.component';
import { ForgotComponent } from './user/forgot/forgot.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'forgot',
    component:  ForgotComponent,
    pathMatch: 'full'
  },
  {
    path: 'alarm',
    component: AlarmasComponent,
    pathMatch: 'full'
  },
  {
    path: '', 
    component: LoginComponent
  },
  {
    path: '**', 
    component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
