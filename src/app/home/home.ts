import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  imports: [
    RouterLink
  ],
  styleUrl: './home.css'
})
export class HomeComponent {
  heroLeftActive = false;
  heroRightActive = false;
  facilityLeftActive = false;
  facilityRightActive = false;

  onHeroArrow(direction: 'left' | 'right'): void {
    if (direction === 'left') {
      this.heroLeftActive = !this.heroLeftActive;
      this.heroRightActive = false;
    } else {
      this.heroRightActive = !this.heroRightActive;
      this.heroLeftActive = false;
    }
  }

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
