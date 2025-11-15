import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { BgGradient } from '../bg-gradient/bg-gradient';
import { InfiniteScroll } from '../infinite-scroll/infinite-scroll';

@Component({
  selector: 'app-homepage',
  imports: [Hero, BgGradient, InfiniteScroll],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
