import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leadership-message-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './leadership-message-section.html',
  styleUrl: './leadership-message-section.css'
})
export class LeadershipMessageSectionComponent {
  @Input() title = '';
  @Input() buttonText = 'Read Less';
  @Input() buttonLink = '/about';
}
