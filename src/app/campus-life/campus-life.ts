import { Component } from '@angular/core';
import {HeroSectionComponent} from "../shared/hero-section/hero-section";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-campus-life',
    standalone: true,
    templateUrl: './campus-life.html',
    imports: [
        HeroSectionComponent,
        RouterLink
    ],
    styleUrl: './campus-life.css'
})
export class CampusLifeComponent {}
