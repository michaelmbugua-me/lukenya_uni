import { Component } from '@angular/core';
import { TimelineNavComponent } from '../../../shared/timeline-nav/timeline-nav';
import { HeroSectionComponent } from '../../../shared/hero-section/hero-section';
import { LeadershipMessageSectionComponent } from '../../../shared/leadership-message-section/leadership-message-section';

@Component({
  selector: 'app-chancellor',
  standalone: true,
  templateUrl: './chancellor.html',
  styleUrl: './chancellor.css',
    imports: [HeroSectionComponent, TimelineNavComponent, LeadershipMessageSectionComponent]
})
export class ChancellorComponent {}
