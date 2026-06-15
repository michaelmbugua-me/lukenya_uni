import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../../shared/hero-section/hero-section";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-education-social-sciences',
  standalone: true,
  templateUrl: './education-social-sciences.html',
  imports: [
    HeroSectionComponent
  ],
  styleUrl: './education-social-sciences.css'
})
export class EducationSocialSciencesComponent {}
