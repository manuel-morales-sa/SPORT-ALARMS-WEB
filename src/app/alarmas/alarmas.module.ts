import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmasComponent } from './alarmas/alarmas.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RecordatorioComponent } from './recordatorio/recordatorio.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { ClimaComponent } from './clima/clima.component';
import {MatRadioModule} from '@angular/material/radio';
import { MenuComponent } from '../menu/menu.component';



@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatSlideToggleModule,


  ],
  declarations: [AlarmasComponent, RecordatorioComponent, CronometroComponent, TemporizadorComponent, ClimaComponent, MenuComponent]
})
export class AlarmasModule { }
