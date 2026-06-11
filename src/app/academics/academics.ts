import { Component } from '@angular/core';
import {HeroSectionComponent} from "../shared/hero-section/hero-section";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-academics',
    standalone: true,
    templateUrl: './academics.html',
    imports: [
        HeroSectionComponent,
        RouterLink
    ],
    styleUrl: './academics.css'
})
export class AcademicsComponent {}
