import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
@Input() titulo!:string;
  @Input() titulo2!: string;
  @Input() descripcion!: string;
  @Input() mision!: string;
  @Input() descripcion1!: string;
  @Input() vision!: string;
  @Input() descripcion2!: string;
  @Input() valores!: string;
  @Input() descripcion3!: string;

}
