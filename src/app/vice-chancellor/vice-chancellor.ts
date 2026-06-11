import { Component } from '@angular/core';
import { TimelineNavComponent } from '../shared/timeline-nav/timeline-nav';
import { HeroSectionComponent } from '../shared/hero-section/hero-section';
import { LeadershipMessageSectionComponent } from '../shared/leadership-message-section/leadership-message-section';

@Component({
  selector: 'app-vice-chancellor',
  standalone: true,
  templateUrl: './vice-chancellor.html',
  styleUrl: './vice-chancellor.css',
    imports: [HeroSectionComponent, TimelineNavComponent, LeadershipMessageSectionComponent]
})
export class ViceChancellorComponent {}
