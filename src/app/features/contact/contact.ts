import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section';
import * as L from 'leaflet';


interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements AfterViewInit {
  private map: any;

  faqCategories: FaqCategory[] = [
    {
      title: 'Admission and Enrollment',
      items: [
        {
          question: 'How do I apply for admission to the ODEL program?',
          answer: `Visit the Lukenya University website and navigate to the ODEL section.
Review the available programs under the School of Education and Social Sciences, School of Agriculture, Technical Studies and Natural Sciences, School of Business and Economics, or short professional courses.
Click on the program you're interested in to view detailed information about admission requirements, duration, and curriculum.
Complete the online application form by providing accurate personal and academic information.
Upload any required supporting documents, such as academic transcripts, identification documents, and certificates.
Submit your application and keep track of your application status through the admissions office.
Once your application is processed, you will receive further communication regarding any additional steps required, such as interviews or entrance examinations.
Upon successful admission, proceed with the enrollment process as guided by the university's admission office.`,
          open: false
        },
        {
          question: 'What are the eligibility criteria for enrollment?',
          answer: `The eligibility criteria for enrollment in the Lukenya University ODEL program vary depending on the specific program or course you are interested in. However, some common eligibility requirements may include:

Academic Qualifications: Applicants are typically required to have completed a certain level of education, such as a high school diploma, GED, or equivalent qualification. Specific programs may have additional academic prerequisites, such as certain subjects or minimum grades.

Work Experience: Some programs may require applicants to have relevant work experience in the field of study. This requirement is particularly common for professional courses and postgraduate programs.

Language Proficiency: Proficiency in the language of instruction (usually English) may be required, especially for international students. Applicants may need to provide proof of English language proficiency through standardized tests such as TOEFL or IELTS.

Technical Requirements: Since the ODEL program involves online learning, applicants may need to have access to a computer with internet connectivity and possess basic computer literacy skills.

Additional Requirements: Certain programs or courses may have specific eligibility criteria, such as prerequisite courses, portfolios, or interviews. These requirements will be outlined in the program's admission information.`,
          open: false
        }
      ]
    },
    {
      title: 'Courses and Programs',
      items: [
        {
          question: 'How do I access course materials online?',
          answer: `To access course materials online for your Lukenya University ODEL program, you will utilize our user-friendly eLearning platform. Follow these steps to access your course materials:

Login to the Lukenya University eLearning platform using your provided username and password. If you are a new user, you may need to register first.
Once logged in, navigate to the 'Courses' or 'My Courses' section of the platform. Here, you will find a list of all the courses you are enrolled in.
Click on the course title to enter the course page. You will see various sections, including 'Course Materials,' 'Assignments,' 'Discussions,' etc.
To access course materials, click on the 'Course Materials' or similar section. Depending on the course structure, you may find lecture notes, slides, readings, videos, and other resources organized by modules or topics.
Browse through the available materials and click on the respective links to view or download them to your device.
Some courses may also have interactive elements such as quizzes, simulations, or discussion forums. Engage with these activities as directed by your course instructor.
If you encounter any technical difficulties or have questions about accessing specific materials, reach out to the technical support team or your course instructor for assistance.
Remember to regularly check the eLearning platform for updates, announcements, and additional resources related to your courses.`,
          open: false
        },
        {
          question: 'Are there any face-to-face sessions required?',
          answer: `Fully Online Programs: Many of our ODEL programs are entirely online, meaning that all learning activities, including lectures, discussions, assignments, and assessments, are conducted through our eLearning platform. These programs do not have any mandatory face-to-face sessions, allowing students to study from anywhere with internet access.

Blended Learning Programs: Some programs may follow a blended learning approach, combining online learning with occasional face-to-face sessions or practical workshops. These sessions are typically scheduled at specific intervals or for certain components of the curriculum that require hands-on training or interaction. The frequency and duration of face-to-face sessions will vary depending on the program requirements.

Course-specific Requirements: Certain courses within our ODEL programs may have unique requirements that necessitate face-to-face sessions, such as fieldwork, laboratory experiments, or clinical placements. In such cases, these sessions will be clearly communicated to students at the beginning of the course, and arrangements will be made to accommodate students' needs and schedules.

Communication and Support: Regardless of whether face-to-face sessions are required, students will have access to various communication channels and support services to interact with instructors, tutors, and fellow classmates. Our aim is to provide a supportive learning environment that meets the needs of all students, whether they prefer online or face-to-face interactions.`,
          open: false
        }
      ]
    },
    {
      title: 'Tuition Fees and Payment',
      items: [
        {
          question: 'What are the modes of payment for tuition fees?',
          answer: `Bank Transfer: You can transfer the tuition fees directly from your bank account to the university's designated bank account. Details of the university's bank account, including account number and routing information, will be provided on the invoice or payment instructions. Please ensure to include your student ID or other identifying information in the transaction reference to facilitate timely processing.

Mobile Money: If you prefer mobile payment options, you may be able to pay tuition fees using mobile money platforms such as M-Pesa, Airtel Money, or similar services. Simply initiate the payment transaction through your mobile wallet, following the prompts to enter the university's payment details or paybill number provided by the institution. Remember to retain the transaction confirmation for reference purposes.

Installment Plans: For students facing financial constraints, Lukenya University may offer installment payment plans to spread out the tuition fees over multiple payments. Contact the university's finance office or student support services to inquire about available installment options and eligibility criteria.`,
          open: false
        }
      ]
    },
    {
      title: 'Technical Support',
      items: [
        {
          question: 'How do I contact technical support if I encounter issues with the online platform?',
          answer: `Email: You can also reach out to our technical support team directly via email. Look for the contact information provided on the university website, including the email address for technical support or IT helpdesk. Send an email detailing your issue, and be sure to include relevant information such as your name, student ID, and a description of the problem. Our support staff will investigate the issue and provide guidance or troubleshooting steps to help resolve it.

Phone Support: If you require immediate assistance or prefer speaking with a support representative directly, you can contact our technical support hotline. The phone number for technical support will be listed on the university website or in your student handbook. When calling, be prepared to provide your student ID and a brief overview of the issue you're facing. Our support team will assist you over the phone and may escalate the issue for further investigation if necessary.

In-Person Support: If you're located near one of our campus locations, you may also have the option to seek in-person technical support. Visit the IT helpdesk or support center on campus during operating hours, where knowledgeable staff can assist you with troubleshooting, software installations, or other technical inquiries.`,
          open: false
        }
      ]
    }
  ];

  toggleFaq(item: FaqItem): void {
    item.open = !item.open;
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ -2.5591955, 38.3224267 ],
      zoom: 12, // Corrected zoom level
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

    const marker = L.marker([-2.5591955, 38.3224267]);
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
    marker.bindPopup("<b>Lukenya University</b><br>Mtito Andei, Makueni County").openPopup();
  }
}
