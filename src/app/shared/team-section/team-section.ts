import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './team-section.html',
  styleUrl: './team-section.css'
})
export class TeamSectionComponent {}

