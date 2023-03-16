import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.component.html',
  styleUrls: ['./alarmas.component.css']
})
export class AlarmasComponent implements OnInit {

  lista:string[]=["hola","que", "Bebe", "Pues"];
  listaRutinas: any[] = [
    {
      hora: '5:30 AM',
      icono: 'Sport1.png'
    },
    {
      hora: '7:30 PM',
      icono: 'Sport2.png'
    },
    {
      hora: '11:30 PM',
      icono: 'Sport7.png'
    },
    {
      hora: '7:30 PM',
      icono: 'Sport8.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
