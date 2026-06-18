import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";
import { HeroSectionComponent } from '../../shared/hero-section/hero-section';
import {ScholarshipSectionComponent} from '../../shared/scholarship/scholarship-section';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
    imports: [
        RouterLink,
        HeroSectionComponent,
        ScholarshipSectionComponent
    ],
  styleUrl: './home.css'
})
export class HomeComponent {
  protected readonly heroStats = [
    { value: '10+', label: 'YEARS OF EXCELLENCE' },
    { value: '10+', label: 'ACADEMIC PROGRAMS' },
    { value: '1000+', label: 'ENROLLED STUDENTS' }
  ];

  @ViewChild('localPlayer') playerElement!: ElementRef<HTMLVideoElement>;

  playVideo() {
    this.playerElement.nativeElement.play();
  }

  pauseVideo() {
    this.playerElement.nativeElement.pause();
  }
}
