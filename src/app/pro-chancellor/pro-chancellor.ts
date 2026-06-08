import { Component } from '@angular/core';
import { TimelineNavComponent } from '../shared/timeline-nav/timeline-nav';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pro-chancellor',
  standalone: true,
  templateUrl: './pro-chancellor.html',
  styleUrl: './pro-chancellor.css',
    imports: [TimelineNavComponent, RouterLink]
})
export class ProChancellorComponent {}
