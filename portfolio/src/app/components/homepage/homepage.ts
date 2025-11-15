import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { BgGradient } from '../bg-gradient/bg-gradient';

@Component({
  selector: 'app-homepage',
  imports: [Hero, BgGradient],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
