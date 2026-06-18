import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section';
import { CtaFaqComponent } from '../../shared/cta-faq/cta-faq';
import { ScholarshipSectionComponent } from '../../shared/scholarship/scholarship-section';

@Component({
  selector: 'app-application-overview',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroSectionComponent, ScholarshipSectionComponent],
  templateUrl: './application-overview.html',
  styleUrl: './application-overview.css'
})
export class ApplicationOverviewComponent {}

