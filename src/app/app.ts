import { Component, signal } from '@angular/core';
import { NavBar } from "./shared/nav-bar/nav-bar";
import { Home } from "./features/home/home";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Home, NavBar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('juegos');
}
