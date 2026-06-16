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
import { BusinessEconomicsComponent } from './academics/schools/business-economics/business-economics';
import { AgricultureNaturalSciencesComponent } from './academics/schools/agriculture-natural-sciences/agriculture-natural-sciences';
import { EducationSocialSciencesComponent } from './academics/schools/education-social-sciences/education-social-sciences';
import { HealthScienceComponent } from './academics/schools/health-sciences/health-sciences';
import {CampusLifeComponent} from "./campus-life/campus-life";
import {GraduationComponent} from "./graduation/graduation";
import {GraduationItemComponent} from "./graduation-item/graduation-item";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'board-of-trustees', component: BoardOfTrusteesComponent },
  { path: 'academics', component: AcademicsComponent },
  { path: 'academics/schools/business-economics', component: BusinessEconomicsComponent },
  { path: 'academics/schools/agriculture-natural-sciences', component: AgricultureNaturalSciencesComponent },
  { path: 'academics/schools/education-social-sciences', component: EducationSocialSciencesComponent },
  { path: 'campus-life', component: CampusLifeComponent },
  { path: 'academics/schools/health-sciences', component: HealthScienceComponent },
  { path: 'graduation', component: GraduationComponent },
  { path: 'graduation-item', component: GraduationItemComponent },
  { path: 'chancellor', component: ChancellorComponent },
  { path: 'pro-chancellor', component: ProChancellorComponent },
  { path: 'vice-chancellor', component: ViceChancellorComponent }
];
