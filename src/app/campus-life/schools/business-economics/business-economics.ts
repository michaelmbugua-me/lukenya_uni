import { Component } from '@angular/core';
import { SchoolPageComponent } from '../school-page/school-page.component';
import { AGRICULTURE_PROGRAMS, BUSINESS_ECONOMICS_HERO, COMMON_DEAN_MESSAGE } from '../school-data';

@Component({
  selector: 'app-business-economics',
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
export class BusinessEconomicsComponent {
  heroData = BUSINESS_ECONOMICS_HERO;
  deanMessage = COMMON_DEAN_MESSAGE;
  postGradPrograms = AGRICULTURE_PROGRAMS.postGrad;
  undergradPrograms = AGRICULTURE_PROGRAMS.undergrad;
}
