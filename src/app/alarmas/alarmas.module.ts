import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmasComponent } from './alarmas/alarmas.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { MenuComponent } from '../menu/menu.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatSlideToggleModule,
    MatRadioModule
  ],
  declarations: [AlarmasComponent, SettingsComponent, MenuComponent]
})
export class AlarmasModule { }
