import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StatsBandComponent } from '../../shared/stats-band/stats-band';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section';
import { CtaFaqComponent } from '../../shared/cta-faq/cta-faq';

@Component({
  selector: 'app-application-overview',
  standalone: true,
  imports: [CommonModule, RouterLink, StatsBandComponent, HeroSectionComponent, CtaFaqComponent],
  templateUrl: './application-overview.html',
  styleUrl: './application-overview.css'
})
export class ApplicationOverviewComponent {}

