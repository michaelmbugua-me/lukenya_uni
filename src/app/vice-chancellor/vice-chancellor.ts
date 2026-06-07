import { Component } from '@angular/core';
import { TimelineNavComponent } from '../shared/timeline-nav/timeline-nav';

@Component({
  selector: 'app-vice-chancellor',
  standalone: true,
  templateUrl: './vice-chancellor.html',
  styleUrl: './vice-chancellor.css',
  imports: [TimelineNavComponent]
})
export class ViceChancellorComponent {}
