import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsBandComponent } from '../shared/stats-band/stats-band';
import { HeroSectionComponent } from '../shared/hero-section/hero-section';
import { CtaFaqComponent } from '../shared/cta-faq/cta-faq';
import * as L from 'leaflet';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, StatsBandComponent, HeroSectionComponent, CtaFaqComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements AfterViewInit {
  private map: any;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ -1.265, 36.80 ],
      zoom: 28, // Corrected zoom level
      scrollWheelZoom: false // Disable scroll wheel zoom initially
    });

    // Enable scroll wheel zoom on click
    this.map.on('click', () => {
      this.map.scrollWheelZoom.enable();
    });

    // Disable scroll wheel zoom when mouse leaves the map
    this.map.on('mouseout', () => {
      this.map.scrollWheelZoom.disable();
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const marker = L.marker([-1.265, 36.80]);
    marker.setIcon(L.icon({
      iconUrl: '/contact/marker-icon.png',
      iconRetinaUrl: '/contact/marker-icon-2x.png',
      shadowUrl: '/contact/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    }));
    marker.addTo(this.map);
    marker.bindPopup("<b>Lukenya University</b><br>MJ1 Business Park, Westlands.").openPopup();
  }
}
