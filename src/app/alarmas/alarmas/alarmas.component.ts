import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.component.html',
  styleUrls: ['./alarmas.component.css']
})
export class AlarmasComponent implements OnInit {

  lista:string[]=["hola","que", "Bebe", "Pues"];

  constructor() { }

  ngOnInit() {
  }

}
