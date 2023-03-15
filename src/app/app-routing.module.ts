import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { AlarmasComponent } from './alarmas/alarmas/alarmas.component';
import { RecordatorioComponent } from './alarmas/recordatorio/recordatorio.component';
import { CronometroComponent } from './alarmas/cronometro/cronometro.component';
import { TemporizadorComponent } from './alarmas/temporizador/temporizador.component';
import { ClimaComponent } from './alarmas/clima/clima.component';

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
    path: 'alarm',
    component: AlarmasComponent,
    pathMatch: 'full'
  },

  {
    path: 'reminder',
    component:  RecordatorioComponent,
    pathMatch: 'full'
  },

  {
    path: 'chronometer',
    component:  CronometroComponent,
    pathMatch: 'full'
  },
  {
    path: 'timer',
    component:  TemporizadorComponent,
    pathMatch: 'full'
  },


  {
    path: 'weather',
    component:  ClimaComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
