import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  @Input() showSocialLinks = true;
  @Input() showLegalColumn = true;

  currentYear = new Date().getFullYear();
}
