import { Component } from '@angular/core';
import { TimelineNavComponent } from '../shared/timeline-nav/timeline-nav';

@Component({
  selector: 'app-board-of-trustees',
  templateUrl: './board-of-trustees.html',
  styleUrls: ['./board-of-trustees.css'],
  standalone: true,
  imports: [TimelineNavComponent]
})
export class BoardOfTrusteesComponent {}
