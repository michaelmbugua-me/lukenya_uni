import { Component } from '@angular/core';
import { SchoolPageComponent } from '../school-page/school-page.component';
import { HEALTH_SCIENCE_PROGRAMS, HEALTH_SCIENCE_HERO, HEALTH_SCIENCE_DEAN_MESSAGE } from '../school-data';

@Component({
  selector: 'app-health-science',
  standalone: true,
  template: `
    <app-school-page
      [heroData]="heroData"
      [deanMessage]="deanMessage"
      [postGradPrograms]="postGradPrograms"
      [undergradPrograms]="undergradPrograms"
      [diplomaPrograms]="diplomaPrograms"
      [certificatePrograms]="certificatePrograms">
    </app-school-page>
  `,
  imports: [
    SchoolPageComponent
  ]
})
export class HealthScienceComponent {
  heroData = HEALTH_SCIENCE_HERO;
  deanMessage = HEALTH_SCIENCE_DEAN_MESSAGE;
  postGradPrograms = HEALTH_SCIENCE_PROGRAMS.postGrad;
  undergradPrograms = HEALTH_SCIENCE_PROGRAMS.undergrad;
  diplomaPrograms = HEALTH_SCIENCE_PROGRAMS.diploma;
  certificatePrograms = HEALTH_SCIENCE_PROGRAMS.certificate;
}

