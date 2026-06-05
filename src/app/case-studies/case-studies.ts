import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../shared/header/header';
import { FooterComponent } from '../shared/footer/footer';
import { StatsBandComponent } from '../shared/stats-band/stats-band';
import { HeroSectionComponent } from '../shared/hero-section/hero-section';
import { CtaFaqComponent } from '../shared/cta-faq/cta-faq';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent, StatsBandComponent, HeroSectionComponent, CtaFaqComponent],
  templateUrl: './case-studies.html',
  styleUrl: './case-studies.css'
})
export class CaseStudiesComponent {}

