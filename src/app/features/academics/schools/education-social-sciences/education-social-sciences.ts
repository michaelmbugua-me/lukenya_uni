import { Component } from '@angular/core';
import { SchoolPageComponent } from '../school-page/school-page.component';
import { EDUCATION_SOCIAL_SCIENCES_PROGRAMS, EDUCATION_DEAN_MESSAGE, EDUCATION_HERO } from '../school-data';

@Component({
  selector: 'app-education-social-sciences',
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
export class EducationSocialSciencesComponent {
  heroData = EDUCATION_HERO;
  deanMessage = EDUCATION_DEAN_MESSAGE;
  postGradPrograms = EDUCATION_SOCIAL_SCIENCES_PROGRAMS.postGrad;
  undergradPrograms = EDUCATION_SOCIAL_SCIENCES_PROGRAMS.undergrad;
  diplomaPrograms = EDUCATION_SOCIAL_SCIENCES_PROGRAMS.diploma;
  certificatePrograms = EDUCATION_SOCIAL_SCIENCES_PROGRAMS.certificate;
}
