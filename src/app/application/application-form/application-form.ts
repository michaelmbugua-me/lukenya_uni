import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section';
import {StatsBandComponent} from "../../shared/stats-band/stats-band";
import {CtaFaqComponent} from "../../shared/cta-faq/cta-faq";

@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, StatsBandComponent, CtaFaqComponent],
  templateUrl: './application-form.html',
  styleUrl: './application-form.css'
})
export class ApplicationFormComponent {}

