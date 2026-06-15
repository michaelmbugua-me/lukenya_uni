import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../../shared/hero-section/hero-section";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-agriculture-natural-sciences',
  standalone: true,
  templateUrl: './agriculture-natural-sciences.html',
  imports: [
    HeroSectionComponent
  ],
  styleUrl: './agriculture-natural-sciences.css'
})
export class AgricultureNaturalSciencesComponent {}
