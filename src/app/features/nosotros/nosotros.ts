import { Component } from '@angular/core';
import { Team } from "../../shared/team/team";
import { Hero } from "../../shared/hero/hero";
import { Footer } from '../../shared/footer/footer';
import { Features } from '../../shared/features/features';
import { Cards } from "../../shared/cards/cards";

@Component({
  selector: 'app-nosotros',
  imports: [Team, Hero, Footer, Features, Cards],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {

}
