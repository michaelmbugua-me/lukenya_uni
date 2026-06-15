import { Component } from '@angular/core';
import { SchoolPageComponent } from '../school-page/school-page.component';
import { AGRICULTURE_PROGRAMS, COMMON_DEAN_MESSAGE, EDUCATION_HERO } from '../school-data';

@Component({
  selector: 'app-education-social-sciences',
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
export class EducationSocialSciencesComponent {
  heroData = EDUCATION_HERO;
  deanMessage = COMMON_DEAN_MESSAGE;
  postGradPrograms = AGRICULTURE_PROGRAMS.postGrad;
  undergradPrograms = AGRICULTURE_PROGRAMS.undergrad;
}
