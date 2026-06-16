import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-scholarship-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './scholarship-section.html',
  styleUrl: './scholarship-section.css'
})
export class ScholarshipSectionComponent {
  @Input() title = '';
  @Input() buttonText = 'Read Less';
  @Input() buttonLink = '/about';
}
