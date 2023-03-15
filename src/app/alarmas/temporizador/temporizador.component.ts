import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css']
})
export class TemporizadorComponent implements OnInit {

  lista:string[]=["hola","que","tal","estas"];

  constructor() { }

  ngOnInit() {
  }

}
