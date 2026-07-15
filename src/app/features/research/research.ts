import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section';
import { FooterComponent } from '../../shared/footer/footer';

@Component({
  selector: 'app-research',
  standalone: true,
  templateUrl: './research.html',
  imports: [
    HeroSectionComponent],
  styleUrl: './research.css'
})
export class ResearchComponent {
}
