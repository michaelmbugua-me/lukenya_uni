import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../shared/header/header';
import { StatsBandComponent } from '../shared/stats-band/stats-band';
import { CtaFaqComponent } from '../shared/cta-faq/cta-faq';
import { FooterComponent } from '../shared/footer/footer';
import { HeroSectionComponent } from '../shared/hero-section/hero-section';
import { TeamSectionComponent } from '../shared/team-section/team-section';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, HeaderComponent, StatsBandComponent, CtaFaqComponent, FooterComponent, HeroSectionComponent, TeamSectionComponent],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {}
