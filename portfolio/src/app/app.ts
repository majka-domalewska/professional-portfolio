import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreeHero } from './components/three-hero/three-hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThreeHero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
