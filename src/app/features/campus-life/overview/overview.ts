import { Component } from '@angular/core';
import {HeroSectionComponent} from '../../../shared/hero-section/hero-section';
import {ScholarshipSectionComponent} from '../../../shared/scholarship/scholarship-section';
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-campus-life-overview',
    standalone: true,
    templateUrl: './overview.html',
    imports: [
        HeroSectionComponent,
        ScholarshipSectionComponent,
        RouterLink
    ],
    styleUrl: './overview.css'
})
export class OverviewComponent {}
