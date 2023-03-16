import { AlarmasComponent } from './alarmas/alarmas.component';
import { ClimaComponent } from './clima/clima.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './../components/components.module';
import { CronometroComponent } from './cronometro/cronometro.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MenuComponent } from '../menu/menu.component';
import { NgModule } from '@angular/core';
import { RecordatorioComponent } from './recordatorio/recordatorio.component';
import { TemporizadorComponent } from './temporizador/temporizador.component';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatSlideToggleModule,
    MatRadioModule,
    ComponentsModule
  ],
  declarations: [AlarmasComponent, RecordatorioComponent, CronometroComponent, TemporizadorComponent, ClimaComponent, MenuComponent]
})
export class AlarmasModule { }
