import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-business-economics',
  standalone: true,
  templateUrl: './business-economics.html',
  imports: [
    CommonModule,
    FormsModule,
    ],
  styleUrl: './business-economics.css'
})
export class BusinessEconomicsComponent {
  programFilters = ['Short Courses', 'Certificate', 'Diploma', 'Undergraduate', 'Post Graduate'];
  schoolFilters = [
    'School of Business & Economics',
    'School of Agriculture, Technical Studies & Natural Studies',
    'School of Health Science',
    'School of Education & Social Sciences',
  ];
  postGradPrograms = [
    {
      title: 'PhD General Agriculture',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: "A Master's degree in Agriculture or related field from a recognized institution.",
      duration: '3 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Master of Science in Agriculture Specializations in Crop Production',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: "A Bachelor's degree in Agriculture or related field with at least Second-Class Honors (Upper Division) from...",
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Master of Science in Agriculture Specializations in Animal Production',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: "A Bachelor's degree in Agriculture or related field with at least Second-Class Honors (Upper Division) from...",
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/8199563/pexels-photo-8199563.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];
  undergradPrograms = [
    {
      title: 'Bachelor of Science in Dryland Agriculture',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'KCSE Mean Grade C+ (plus) or its equivalent and at least C+ in relevant subjects OR a Diploma in Agriculture...',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Science General Agriculture',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'KCSE Mean Grade C+ (plus) or its equivalent and at least C+ in relevant subjects OR a Diploma in Agriculture...',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/8199561/pexels-photo-8199561.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Science in Ecology and Environment',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'KCSE Mean Grade C+ (plus) or its equivalent and at least C+ in relevant subjects.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212325/pexels-photo-5212325.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];
  programChecked: Record<string, boolean> = {};
  schoolChecked: Record<string, boolean> = {};
  search = '';
  toggleProgram(filter: string) {
    this.programChecked[filter] = !this.programChecked[filter];
  }
  toggleSchool(filter: string) {
    this.schoolChecked[filter] = !this.schoolChecked[filter];
  }
}
