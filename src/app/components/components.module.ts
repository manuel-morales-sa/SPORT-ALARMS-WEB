import { CommonModule } from '@angular/common';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMenuComponent,
    CrearEventoComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule 
  ],
  exports: [
    HeaderComponent,
    HeaderMenuComponent,
    CrearEventoComponent
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class ComponentsModule { }
