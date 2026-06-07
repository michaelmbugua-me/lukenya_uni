import { Component } from '@angular/core';
import { HeroSectionComponent } from '../shared/hero-section/hero-section';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  imports: [HeroSectionComponent],
  styleUrl: './about.css'
})
export class AboutComponent {}
