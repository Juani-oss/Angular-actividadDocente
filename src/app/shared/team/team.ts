import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [Team],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
 @Input() titulo!:string;
  @Input() descripcion!: string;
  @Input() nombre!:string;
  @Input() nombre1!: string;
  @Input() nombre2!:string;
  @Input() nombre3!: string;
  @Input() cargo!:string;
  @Input() cargo1!: string;
  @Input() cargo2!:string;
  @Input() cargo3!: string;
  
}
