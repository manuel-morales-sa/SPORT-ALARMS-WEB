import { CommonModule } from '@angular/common';
import { AlarmasComponent } from './alarmas/alarmas.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { ComponentsModule } from "../components/components.module";

@NgModule({
    declarations: [AlarmasComponent],
    imports: [
      CommonModule,
        MatDividerModule,
        MatCardModule,
        MatSlideToggleModule,
        MatRadioModule,
        ComponentsModule
    ]
})
export class AlarmasModule { }
