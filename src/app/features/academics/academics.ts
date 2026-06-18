import { Component } from '@angular/core';
import {HeroSectionComponent} from '../../shared/hero-section/hero-section';
import {RouterLink} from "@angular/router";
import {ScholarshipSectionComponent} from '../../shared/scholarship/scholarship-section';

@Component({
    selector: 'app-academics-module',
    standalone: true,
    templateUrl: './academics.html',
    imports: [
        HeroSectionComponent,
        RouterLink,
        ScholarshipSectionComponent
    ],
    styleUrl: './academics.css'
})
export class AcademicsComponent {}
