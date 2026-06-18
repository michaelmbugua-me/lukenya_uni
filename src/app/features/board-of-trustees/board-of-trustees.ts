import { Component } from '@angular/core';
import { TimelineNavComponent } from '../../shared/timeline-nav/timeline-nav';
import {HeroSectionComponent} from '../../shared/hero-section/hero-section';

@Component({
  selector: 'app-board-of-trustees-module',
  templateUrl: './board-of-trustees.html',
  styleUrls: ['./board-of-trustees.css'],
  standalone: true,
  imports: [TimelineNavComponent, HeroSectionComponent]
})
export class BoardOfTrusteesComponent {}
