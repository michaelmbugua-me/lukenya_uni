import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-timeline-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './timeline-nav.html',
  styleUrl: './timeline-nav.css'
})
export class TimelineNavComponent {}
