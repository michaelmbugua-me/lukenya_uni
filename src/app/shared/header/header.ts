import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  expandedSection: string | null = null;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.expandedSection = null;
  }

  toggleSection(section: string) {
    this.expandedSection = this.expandedSection === section ? null : section;
  }
}
