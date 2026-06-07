import { Component } from '@angular/core';
import { TimelineNavComponent } from '../shared/timeline-nav/timeline-nav';

@Component({
  selector: 'app-chancellor',
  standalone: true,
  templateUrl: './chancellor.html',
  styleUrl: './chancellor.css',
  imports: [TimelineNavComponent]
})
export class ChancellorComponent {}
