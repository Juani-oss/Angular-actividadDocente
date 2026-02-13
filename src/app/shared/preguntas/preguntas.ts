import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  imports: [],
  templateUrl: './preguntas.html',
  styleUrl: './preguntas.css',
})
export class Preguntas {
  @Input() titulo!:string;
  @Input() pregunta1!:string;
  @Input() pregunta2!:string;
  @Input() pregunta3!:string;
  @Input() pregunta4!:string;
  @Input() pregunta5!:string;

}
