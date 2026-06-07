import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../shared/hero-section/hero-section';
import { TimelineNavComponent } from '../shared/timeline-nav/timeline-nav';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  imports: [CommonModule, HeroSectionComponent, TimelineNavComponent],
  styleUrl: './about.css'
})
export class AboutComponent {}
