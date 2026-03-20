import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  constructor(public theme: ThemeService) {}
}
