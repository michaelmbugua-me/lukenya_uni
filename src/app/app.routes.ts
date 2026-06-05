import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact';
import { HomeComponent } from './home/home';
import { CaseStudiesComponent } from './case-studies/case-studies';
import { AboutComponent } from './about/about';
import { BoardOfTrusteesComponent } from './board-of-trustees/board-of-trustees';
import { AcademicsComponent } from './academics/academics';
import { ChancellorComponent } from './chancellor/chancellor';
import { ProChancellorComponent } from './pro-chancellor/pro-chancellor';
import { ViceChancellorComponent } from './vice-chancellor/vice-chancellor';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'board-of-trustees', component: BoardOfTrusteesComponent },
  { path: 'academics', component: AcademicsComponent },
  { path: 'chancellor', component: ChancellorComponent },
  { path: 'pro-chancellor', component: ProChancellorComponent },
  { path: 'vice-chancellor', component: ViceChancellorComponent }
];
