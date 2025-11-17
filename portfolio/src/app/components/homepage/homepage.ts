import { Component } from '@angular/core';
import { Hero } from '../sections/hero-section/hero';
import { BgGradient } from '../bg-gradient/bg-gradient';
import { InfiniteScroll } from '../infinite-scroll/infinite-scroll';
import { SectionName } from '../section-name/section-name';
import { ProjectsSection } from '../sections/projects-section/projects-section';
import { SkillsSection } from '../sections/skills-section/skills-section';
import { Contact } from '../sections/contact-section/contact';

@Component({
  selector: 'app-homepage',
  imports: [Hero, BgGradient, InfiniteScroll, SectionName, ProjectsSection, SkillsSection, Contact],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
