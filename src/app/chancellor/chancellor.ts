import { Component } from '@angular/core';
import { TimelineNavComponent } from '../shared/timeline-nav/timeline-nav';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-chancellor',
  standalone: true,
  templateUrl: './chancellor.html',
  styleUrl: './chancellor.css',
    imports: [TimelineNavComponent, RouterLink]
})
export class ChancellorComponent {}
