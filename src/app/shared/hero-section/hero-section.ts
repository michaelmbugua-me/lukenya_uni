import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() imageUrl = '/home/home_hero.webp';
  @Input() imageAlt = 'Hero image';

  // Optional top pill
  @Input() eyebrow = '';
  @Input() pillText = '';
  @Input() pillIconUrl = '';
  @Input() pillIconAlt = '';

  @Input() title = '';
  @Input() description = '';

  // Backward-compatible single CTA
  @Input() buttonText = 'Get Started';
  @Input() buttonLink = '/contact';
  @Input() isExternalLink = false;

  // Optional dual bottom CTA buttons
  @Input() showBottomButtons = false;
  @Input() primaryButtonText = '';
  @Input() primaryButtonLink = '#';
  @Input() primaryButtonExternal = false;
  @Input() secondaryButtonText = '';
  @Input() secondaryButtonLink = '#';
  @Input() secondaryButtonExternal = false;

  // Optional navigation arrows
  @Input() showNavigation = false;
  leftActive = false;
  rightActive = false;

  @Output() leftArrowClick = new EventEmitter<void>();
  @Output() rightArrowClick = new EventEmitter<void>();

  get displayPillText(): string {
    return this.pillText || this.eyebrow;
  }

  onArrowClick(direction: 'left' | 'right'): void {
    if (direction === 'left') {
      this.leftActive = !this.leftActive;
      this.rightActive = false;
      this.leftArrowClick.emit();
      return;
    }

    this.rightActive = !this.rightActive;
    this.leftActive = false;
    this.rightArrowClick.emit();
  }
}

