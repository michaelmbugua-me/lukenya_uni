import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSectionComponent {
  @Input() imageUrl = '/hero-images/home-hero.webp';
  @Input() imageAlt = 'Hero image';
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() description = '';
  @Input() buttonText = 'Get Started';
  @Input() buttonLink = '/contact';
  @Input() isExternalLink = false;
}

