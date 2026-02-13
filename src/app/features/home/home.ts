import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Team } from '../../shared/team/team';
import { Cards } from "../../shared/cards/cards";
import { Features } from "../../shared/features/features";
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Hero, Team, Cards, Features, Features, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
