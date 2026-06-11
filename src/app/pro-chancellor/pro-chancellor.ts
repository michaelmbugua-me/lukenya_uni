import { Component } from '@angular/core';
import { TimelineNavComponent } from '../shared/timeline-nav/timeline-nav';
import {RouterLink} from "@angular/router";
import { HeroSectionComponent } from '../shared/hero-section/hero-section';

@Component({
  selector: 'app-pro-chancellor',
  standalone: true,
  templateUrl: './pro-chancellor.html',
  styleUrl: './pro-chancellor.css',
    imports: [HeroSectionComponent, TimelineNavComponent, RouterLink]
})
export class ProChancellorComponent {}
