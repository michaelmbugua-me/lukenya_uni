import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../shared/hero-section/hero-section';
import {ScholarshipSectionComponent} from "../shared/scholarship/scholarship-section";

@Component({
  selector: 'app-graduation-item',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, ScholarshipSectionComponent],
  templateUrl: './graduation-item.html',
  styleUrl: './graduation-item.css'
})
export class GraduationItemComponent {}

