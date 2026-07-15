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
  @Input() titleId = 'hero-title';
  @Input() titlePrefix = '';
  @Input() titleHighlight = '';
  @Input() titleSuffix = '';
  @Input() titleBreakBeforeHighlight = false;
  @Input() titleBreakAfterHighlight = false;
  @Input() description = '';

  // Backward-compatible single CTA
  @Input() buttonText = '';
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
  @Input() showStats = false;
  @Input() showScrollControl = false;
  @Input() scrollButtonLabel = 'Scroll to next section';
  @Input() scrollButtonText = '↑';
  @Input() stats: Array<{ value: string; label: string }> = [];
  leftActive = false;
  rightActive = false;

  @Output() leftArrowClick = new EventEmitter<void>();
  @Output() rightArrowClick = new EventEmitter<void>();

  get displayPillText(): string {
    return this.pillText || this.eyebrow;
  }

  isExternal(link: string): boolean {
    return link.startsWith('http://') || link.startsWith('https://') || link.startsWith('mailto:') || link.startsWith('tel:');
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
