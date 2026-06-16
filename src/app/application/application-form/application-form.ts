import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section';

@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent],
  templateUrl: './application-form.html',
  styleUrl: './application-form.css'
})
export class ApplicationFormComponent {}

