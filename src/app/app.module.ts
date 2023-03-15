import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import {MatCardModule} from '@angular/material/card';
import { AlarmasModule } from './alarmas/alarmas.module';
import { ToastrModule } from "ngx-toastr";
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,



   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    MatCardModule,
    AlarmasModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
