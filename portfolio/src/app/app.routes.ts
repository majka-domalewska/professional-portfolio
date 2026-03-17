import { Routes } from '@angular/router';
import { Homepage } from './components/homepage/homepage';
import { AboutMe } from './components/about-me/about-me';
import { NotFoundPage } from './components/not-found-page/not-found-page';

export const routes: Routes = [
    { path: 'home', component: Homepage, pathMatch: 'full' },
    { path: 'aboutme', component: AboutMe },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotFoundPage },
];
