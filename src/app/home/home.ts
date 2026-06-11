import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { HeroSectionComponent } from '../shared/hero-section/hero-section';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  imports: [
    RouterLink,
    HeroSectionComponent
  ],
  styleUrl: './home.css'
})
export class HomeComponent {
  protected readonly heroStats = [
    { value: '10+', label: 'YEARS OF EXCELLENCE' },
    { value: '10+', label: 'ACADEMIC PROGRAMS' },
    { value: '1000+', label: 'ENROLLED STUDENTS' }
  ];
}
