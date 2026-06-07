import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HeroSectionComponent} from "../shared/hero-section/hero-section";

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
  facilityLeftActive = false;
  facilityRightActive = false;


  onFacilityArrow(direction: 'left' | 'right'): void {
    if (direction === 'left') {
      this.facilityLeftActive = !this.facilityLeftActive;
      this.facilityRightActive = false;
    } else {
      this.facilityRightActive = !this.facilityRightActive;
      this.facilityLeftActive = false;
    }
  }
}
