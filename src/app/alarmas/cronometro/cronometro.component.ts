import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {


  lista:string[]=["hola","que","tal","estas"];

  constructor() { }

  ngOnInit() {
  }

}
