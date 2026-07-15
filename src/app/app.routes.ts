import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home').then(m => m.HomeComponent) },
  { path: 'home', loadComponent: () => import('./features/home/home').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./features/about/about').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./features/contact/contact').then(m => m.ContactComponent) },
  { path: 'board-of-trustees', loadComponent: () => import('./features/board-of-trustees/board-of-trustees').then(m => m.BoardOfTrusteesComponent) },
  { path: 'academics', loadComponent: () => import('./features/academics/academics').then(m => m.AcademicsComponent) },
  { path: 'academics/schools/business-economics', loadComponent: () => import('./features/academics/schools/business-economics/business-economics').then(m => m.BusinessEconomicsComponent) },
  { path: 'academics/schools/agriculture-natural-sciences', loadComponent: () => import('./features/academics/schools/agriculture-natural-sciences/agriculture-natural-sciences').then(m => m.AgricultureNaturalSciencesComponent) },
  { path: 'academics/schools/education-social-sciences', loadComponent: () => import('./features/academics/schools/education-social-sciences/education-social-sciences').then(m => m.EducationSocialSciencesComponent) },
  { path: 'academics/schools/health-sciences', loadComponent: () => import('./features/academics/schools/health-sciences/health-sciences').then(m => m.HealthScienceComponent) },
  { path: 'campus-life-overview', loadComponent: () => import('./features/campus-life/overview/overview').then(m => m.OverviewComponent) },
  { path: 'campus-life-main', loadComponent: () => import('./features/campus-life/life/campus-life').then(m => m.CampusLifeComponent) },
  { path: 'campus-culture-week', loadComponent: () => import('./features/campus-life/culture-week/culture-week').then(m => m.CultureWeekComponent) },
  { path: 'academics/overview/health-sciences', loadComponent: () => import('./features/academics/schools/health-sciences/health-sciences').then(m => m.HealthScienceComponent) },
  { path: 'graduation', loadComponent: () => import('./features/graduation/list/graduation').then(m => m.GraduationComponent) },
  { path: 'graduation-item', loadComponent: () => import('./features/graduation/item/graduation-item').then(m => m.GraduationItemComponent) },
  { path: 'chancellor', loadComponent: () => import('./features/board-of-trustees/chancellor/chancellor').then(m => m.ChancellorComponent) },
  { path: 'pro-chancellor', loadComponent: () => import('./features/board-of-trustees/pro-chancellor/pro-chancellor').then(m => m.ProChancellorComponent) },
  { path: 'vice-chancellor', loadComponent: () => import('./features/board-of-trustees/vice-chancellor/vice-chancellor').then(m => m.ViceChancellorComponent) },
  { path: 'application-overview', loadComponent: () => import('./features/application/overview/application-overview').then(m => m.ApplicationOverviewComponent) },
  { path: 'application-form', loadComponent: () => import('./features/application/form/application-form').then(m => m.ApplicationFormComponent) },
  { path: 'virtual-tour', loadComponent: () => import('./features/campus-life/virtual-tour/virtual-tour').then(m => m.VirtualTourComponent) },
  { path: 'research', loadComponent: () => import('./features/research/research').then(m => m.ResearchComponent) }
];
