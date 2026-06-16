import { Component } from '@angular/core';
import {HeroSectionComponent} from "../shared/hero-section/hero-section";
import {RouterLink} from "@angular/router";
import {ScholarshipSectionComponent} from "../shared/scholarship/scholarship-section";

@Component({
    selector: 'app-campus-life',
    standalone: true,
    templateUrl: './campus-life.html',
    imports: [
        HeroSectionComponent,
        RouterLink,
        ScholarshipSectionComponent
    ],
    styleUrl: './campus-life.css'
})
export class CampusLifeComponent {}
