import { Component } from '@angular/core';
import {HeroSectionComponent} from '../../../shared/hero-section/hero-section';
import {ScholarshipSectionComponent} from '../../../shared/scholarship/scholarship-section';

@Component({
    selector: 'app-culture-week',
    standalone: true,
    templateUrl: './culture-week.html',
    imports: [
        HeroSectionComponent,
        ScholarshipSectionComponent
    ],
    styleUrl: './culture-week.css'
})
export class CultureWeekComponent {}
