import { Component } from '@angular/core';
import { SchoolPageComponent } from '../school-page/school-page.component';
import { HEALTH_SCIENCE_PROGRAMS, HEALTH_SCIENCE_HERO, COMMON_DEAN_MESSAGE } from '../school-data';

@Component({
  selector: 'app-health-science',
  standalone: true,
  template: `
    <app-school-page
      [heroData]="heroData"
      [deanMessage]="deanMessage"
      [postGradPrograms]="postGradPrograms"
      [undergradPrograms]="undergradPrograms">
    </app-school-page>
  `,
  imports: [
    SchoolPageComponent
  ]
})
export class HealthScienceComponent {
  heroData = HEALTH_SCIENCE_HERO;
  deanMessage = COMMON_DEAN_MESSAGE;
  postGradPrograms = HEALTH_SCIENCE_PROGRAMS.postGrad;
  undergradPrograms = HEALTH_SCIENCE_PROGRAMS.undergrad;
}

