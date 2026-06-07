import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  heroLeftActive = false;
  heroRightActive = false;

  onHeroArrow(direction: 'left' | 'right'): void {
    if (direction === 'left') {
      this.heroLeftActive = !this.heroLeftActive;
      this.heroRightActive = false;
    } else {
      this.heroRightActive = !this.heroRightActive;
      this.heroLeftActive = false;
    }
  }
}
