import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme';
import { ThreeHero } from '../../three-hero/three-hero';

@Component({
  selector: 'app-hero',
  imports: [ThreeHero],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  constructor(public theme: ThemeService) {}
}
