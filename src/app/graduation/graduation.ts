import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../shared/hero-section/hero-section';
import {ScholarshipSectionComponent} from "../shared/scholarship/scholarship-section";

@Component({
  selector: 'app-graduation',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroSectionComponent, ScholarshipSectionComponent],
  templateUrl: './graduation.html',
  styleUrl: './graduation.css'
})
export class GraduationComponent {}

