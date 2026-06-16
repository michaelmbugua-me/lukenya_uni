import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroSectionComponent } from "../../../shared/hero-section/hero-section";
import { SideDrawerComponent } from '../../../shared/side-drawer/side-drawer';
import { DeanMessage, HeroData, Program } from '../school.model';

@Component({
  selector: 'app-school-page',
  standalone: true,
  templateUrl: './school-page.component.html',
  styleUrl: './school-page.component.css',
  imports: [CommonModule, FormsModule, HeroSectionComponent, SideDrawerComponent]
})
export class SchoolPageComponent {
  @Input() heroData!: HeroData;
  @Input() deanMessage!: DeanMessage;
  @Input() postGradPrograms: Program[] = [];
  @Input() undergradPrograms: Program[] = [];
  @Input() diplomaPrograms: Program[] = [];
  @Input() certificatePrograms: Program[] = [];

  programFilters = ['Short Courses', 'Certificate', 'Diploma', 'Undergraduate', 'Post Graduate'];
  schoolFilters = [
    'School of Business & Economics',
    'School of Agriculture, Technical Studies & Natural Studies',
    'School of Health Science',
    'School of Education & Social Sciences',
  ];

  programChecked: Record<string, boolean> = {};
  schoolChecked: Record<string, boolean> = {};
  search = '';

  isDrawerOpen = false;
  selectedMenu: string | null = null;

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    if (!this.isDrawerOpen) {
      this.selectedMenu = null;
    }
  }

  setSelectedMenu(menu: string | null) {
    this.selectedMenu = menu;
  }

  private activeOrNone(key: string) {
    return Object.values(this.programChecked).every(v => !v) || this.programChecked[key];
  }

  get filteredPostGrad() {
    return this.postGradPrograms.filter(p =>
      (this.search === '' || p.title.toLowerCase().includes(this.search.toLowerCase())) &&
      this.activeOrNone('Post Graduate')
    );
  }

  get filteredUndergrad() {
    return this.undergradPrograms.filter(p =>
      (this.search === '' || p.title.toLowerCase().includes(this.search.toLowerCase())) &&
      this.activeOrNone('Undergraduate')
    );
  }

  get filteredDiploma() {
    return this.diplomaPrograms.filter(p =>
      (this.search === '' || p.title.toLowerCase().includes(this.search.toLowerCase())) &&
      this.activeOrNone('Diploma')
    );
  }

  get filteredCertificate() {
    return this.certificatePrograms.filter(p =>
      (this.search === '' || p.title.toLowerCase().includes(this.search.toLowerCase())) &&
      this.activeOrNone('Certificate')
    );
  }

  toggleProgram(filter: string) {
    this.programChecked[filter] = !this.programChecked[filter];
  }

  toggleSchool(filter: string) {
    this.schoolChecked[filter] = !this.schoolChecked[filter];
  }
}
