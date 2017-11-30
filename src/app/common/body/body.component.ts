import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrar: Boolean = true;

  frase: any = {
    mensaje: "como te extraño",
    autor: "anonimo"
  };

  personajes: string[] = ['spiderman', 'batman', 'hulk'];

  constructor() { }

  ngOnInit() {
  }

}
