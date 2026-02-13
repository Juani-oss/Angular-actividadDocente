import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  imports: [FormsModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
 @Input() titulo!:string;
 @Input() titulo2!:string;
  @Input() descripcion!: string;
  @Input() nombre!:string;
}
