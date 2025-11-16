import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { BgGradient } from '../bg-gradient/bg-gradient';
import { InfiniteScroll } from '../infinite-scroll/infinite-scroll';
import { SectionName } from '../section-name/section-name';

@Component({
  selector: 'app-homepage',
  imports: [Hero, BgGradient, InfiniteScroll, SectionName],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
