import { Component } from '@angular/core';
import {HeroSectionComponent} from "../shared/hero-section/hero-section";

@Component({
    selector: 'app-academics',
    standalone: true,
    templateUrl: './academics.html',
    imports: [
        HeroSectionComponent
    ],
    styleUrl: './academics.css'
})
export class AcademicsComponent {}
