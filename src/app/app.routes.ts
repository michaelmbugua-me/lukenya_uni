import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact';
import { HomeComponent } from './home/home';
import { CaseStudiesComponent } from './case-studies/case-studies';
import { AboutComponent } from './about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'case-studies', component: CaseStudiesComponent }
];
