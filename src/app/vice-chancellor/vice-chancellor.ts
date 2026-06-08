import { Component } from '@angular/core';
import { TimelineNavComponent } from '../shared/timeline-nav/timeline-nav';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-vice-chancellor',
  standalone: true,
  templateUrl: './vice-chancellor.html',
  styleUrl: './vice-chancellor.css',
    imports: [TimelineNavComponent, RouterLink]
})
export class ViceChancellorComponent {}
