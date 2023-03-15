import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  seasons: string[] = ['Enviar correo de informe', 'Pausa activa', 'Hacer Ejercicio'];

  constructor() { }

  ngOnInit() {
  }

}
