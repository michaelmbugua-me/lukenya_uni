import { DeanMessage, HeroData, Program } from './school.model';

export const COMMON_PROGRAM_FILTERS = ['Short Courses', 'Certificate', 'Diploma', 'Undergraduate', 'Post Graduate'];
export const COMMON_SCHOOL_FILTERS = [
  'School of Business & Economics',
  'School of Agriculture, Technical Studies & Natural Studies',
  'School of Health Science',
  'School of Education & Social Sciences',
];

export type ProgramCategory = {
  postGrad: Program[];
  undergrad: Program[];
  diploma: Program[];
  certificate: Program[];
};

/* ═════════════════════════════════════════════════════
   AGRICULTURE, TECHNICAL STUDIES & NATURAL SCIENCES
   ═════════════════════════════════════════════════════ */
export const AGRICULTURE_PROGRAMS: ProgramCategory = {
  postGrad: [
    {
      title: 'PhD in Agricultural Economics',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'A Master\'s degree in Agricultural Economics or related field from a recognized institution. Candidates must demonstrate research capability.',
      duration: '3 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'PhD in Crop Science',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'A Master\'s degree in Crop Science or related field. Research thesis required in crop production, breeding, or protection.',
      duration: '3 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Master of Science in Animal Production',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'A Bachelor\'s degree in Animal Science or related field with at least Second-Class Honors (Upper Division).',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/8199563/pexels-photo-8199563.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Master of Science in Soil Science',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'A Bachelor\'s degree in Agriculture or Soil Science with at least Second-Class Honors (Upper Division).',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  undergrad: [
    {
      title: 'Bachelor of Science in Dryland Agriculture',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'KCSE Mean Grade C+ (plus) or its equivalent and at least C+ in relevant subjects OR a Diploma in Agriculture from a recognized institution.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Science in General Agriculture',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'KCSE Mean Grade C+ (plus) or its equivalent with at least C+ in Biological Sciences, Chemistry, and Mathematics.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/8199561/pexels-photo-8199561.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Science in Ecology and Environment',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'KCSE Mean Grade C+ (plus) or its equivalent with a minimum of C+ in Geography, Biology, or Chemistry.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212325/pexels-photo-5212325.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Science in Food Science and Technology',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'KCSE Mean Grade C+ (plus) with at least C+ in Chemistry, Biology, and Mathematics or Physics.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  diploma: [
    {
      title: 'Diploma in General Agriculture',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'KCSE Mean Grade C- (minus) or equivalent. A passion for agriculture and sustainable farming practices.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Diploma in Animal Health and Production',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'KCSE Mean Grade C- (minus) or equivalent with at least D+ in Biology or related sciences.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/8199563/pexels-photo-8199563.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Diploma in Food Processing Technology',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'KCSE Mean Grade C- (minus) with passes in Chemistry, Mathematics, and Biology.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  certificate: [
    {
      title: 'Certificate in General Agriculture',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'KCSE Mean Grade D+ (plus) or equivalent. Introductory program covering basic agricultural principles.',
      duration: '1 Year',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Certificate in Beekeeping',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'KCSE Mean Grade D+ (plus). Practical training in apiary management, honey harvesting, and value addition.',
      duration: '6 Months',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Certificate in Horticulture',
      school: 'School of Agriculture, Technical Studies and Natural Sciences',
      description: 'KCSE Mean Grade D+ (plus). Covers nursery management, vegetable production, and ornamental gardening.',
      duration: '1 Year',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/8199561/pexels-photo-8199561.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
};

/* ═════════════════════════════════════════════════════
   HEALTH SCIENCES
   ═════════════════════════════════════════════════════ */
export const HEALTH_SCIENCE_PROGRAMS: ProgramCategory = {
  postGrad: [
    {
      title: 'PhD in Public Health',
      school: 'School of Health Sciences',
      description: 'A Master\'s degree in Public Health or related field from a recognized institution. Applicants must demonstrate research experience.',
      duration: '3 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Master of Science in Nursing',
      school: 'School of Health Sciences',
      description: 'A Bachelor\'s degree in Nursing with at least Second-Class Honors (Upper Division) and current nursing licensure.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Master of Science in Health Systems Management',
      school: 'School of Health Sciences',
      description: 'A Bachelor\'s degree in Health Sciences, Business, or related field with at least Second-Class Honors.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/7579792/pexels-photo-7579792.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Master of Science in Epidemiology',
      school: 'School of Health Sciences',
      description: 'A Bachelor\'s degree in Medicine, Nursing, Public Health, or Biological Sciences with strong quantitative background.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/3735770/pexels-photo-3735770.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  undergrad: [
    {
      title: 'Bachelor of Science in Nursing',
      school: 'School of Health Sciences',
      description: 'KCSE Mean Grade C+ (plus) with at least C+ in English, Biology, Chemistry, and Mathematics.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Science in Public Health',
      school: 'School of Health Sciences',
      description: 'KCSE Mean Grade C+ (plus) with minimum C+ in Biological Sciences, English, and Mathematics.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Science in Medical Laboratory Sciences',
      school: 'School of Health Sciences',
      description: 'KCSE Mean Grade C+ (plus) with at least C+ in Biology, Chemistry, and Mathematics or Physics.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/3735770/pexels-photo-3735770.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Science in Health Records and Information Management',
      school: 'School of Health Sciences',
      description: 'KCSE Mean Grade C+ (plus) with passes in English, Mathematics, and a Science subject.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/7579792/pexels-photo-7579792.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  diploma: [
    {
      title: 'Diploma in Community Health',
      school: 'School of Health Sciences',
      description: 'KCSE Mean Grade C- (minus) or equivalent with passes in Biology and English.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Diploma in Nutrition and Dietetics',
      school: 'School of Health Sciences',
      description: 'KCSE Mean Grade C- (minus) with at least D+ in Biology, Chemistry, and Mathematics.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Diploma in Health Records Management',
      school: 'School of Health Sciences',
      description: 'KCSE Mean Grade C- (minus) with passes in English and Mathematics.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/7579792/pexels-photo-7579792.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  certificate: [
    {
      title: 'Certificate in Community Health',
      school: 'School of Health Sciences',
      description: 'KCSE Mean Grade D+ (plus). Entry-level training in community health promotion and disease prevention.',
      duration: '1 Year',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Certificate in HIV/AIDS Management',
      school: 'School of Health Sciences',
      description: 'KCSE Mean Grade D+ (plus). Covers HIV prevention, counseling, care, and treatment support.',
      duration: '6 Months',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Certificate in First Aid and Emergency Response',
      school: 'School of Health Sciences',
      description: 'KCSE Mean Grade D+ (plus). Practical training in emergency first aid, CPR, and disaster response.',
      duration: '6 Months',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/3735770/pexels-photo-3735770.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
};

/* ═════════════════════════════════════════════════════
   EDUCATION & SOCIAL SCIENCES
   ═════════════════════════════════════════════════════ */
export const EDUCATION_SOCIAL_SCIENCES_PROGRAMS: ProgramCategory = {
  postGrad: [
    {
      title: 'PhD in Educational Leadership',
      school: 'School of Education and Social Sciences',
      description: 'A Master\'s degree in Education or related field. Applicants must demonstrate research potential and leadership experience.',
      duration: '3 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'PhD in Psychology',
      school: 'School of Education and Social Sciences',
      description: 'A Master\'s degree in Psychology from a recognized institution. Research thesis in clinical or social psychology.',
      duration: '3 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Master of Education in Curriculum Development',
      school: 'School of Education and Social Sciences',
      description: 'A Bachelor\'s degree in Education with at least Second-Class Honors (Upper Division) from a recognized institution.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Master of Arts in Sociology',
      school: 'School of Education and Social Sciences',
      description: 'A Bachelor\'s degree in Sociology or related social science with at least Second-Class Honors.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  undergrad: [
    {
      title: 'Bachelor of Education (Arts)',
      school: 'School of Education and Social Sciences',
      description: 'KCSE Mean Grade C+ (plus) with at least C+ in two teaching subjects. Prepares students for secondary school teaching.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Education (Science)',
      school: 'School of Education and Social Sciences',
      description: 'KCSE Mean Grade C+ (plus) with at least C+ in Biology, Chemistry, Physics, or Mathematics.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Arts in Sociology',
      school: 'School of Education and Social Sciences',
      description: 'KCSE Mean Grade C+ (plus) with a minimum of C+ in English and Geography or History.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Arts in Psychology',
      school: 'School of Education and Social Sciences',
      description: 'KCSE Mean Grade C+ (plus) with passes in English and a minimum of C+ in any humanities subject.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Arts in Social Work',
      school: 'School of Education and Social Sciences',
      description: 'KCSE Mean Grade C+ (plus) with at least C+ in English and a humanities subject.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  diploma: [
    {
      title: 'Diploma in Early Childhood Education (ECDE)',
      school: 'School of Education and Social Sciences',
      description: 'KCSE Mean Grade C- (minus). Training in early childhood development, pedagogy, and child psychology.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Diploma in Social Work',
      school: 'School of Education and Social Sciences',
      description: 'KCSE Mean Grade C- (minus) with passes in English and a humanities subject.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Diploma in Counseling Psychology',
      school: 'School of Education and Social Sciences',
      description: 'KCSE Mean Grade C- (minus). Practical training in counseling theories, techniques, and ethics.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  certificate: [
    {
      title: 'Certificate in Early Childhood Education',
      school: 'School of Education and Social Sciences',
      description: 'KCSE Mean Grade D+ (plus). Foundational training in ECDE teaching methodologies and child development.',
      duration: '1 Year',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Certificate in Guidance and Counseling',
      school: 'School of Education and Social Sciences',
      description: 'KCSE Mean Grade D+ (plus). Basic counseling skills for peer counseling and community support.',
      duration: '6 Months',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Certificate in Social Work',
      school: 'School of Education and Social Sciences',
      description: 'KCSE Mean Grade D+ (plus). Entry-level community development and social welfare training.',
      duration: '1 Year',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
};

/* ═════════════════════════════════════════════════════
   BUSINESS & ECONOMICS
   ═════════════════════════════════════════════════════ */
export const BUSINESS_ECONOMICS_PROGRAMS: ProgramCategory = {
  postGrad: [
    {
      title: 'PhD in Business Administration',
      school: 'School of Business and Economics',
      description: 'A Master\'s degree in Business Administration or related field from a recognized institution. Candidates must present a research proposal.',
      duration: '3 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'PhD in Economics',
      school: 'School of Business and Economics',
      description: 'A Master\'s degree in Economics with strong quantitative background. Research thesis in economic policy or development.',
      duration: '3 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Master of Business Administration (MBA)',
      school: 'School of Business and Economics',
      description: 'A Bachelor\'s degree with at least Second-Class Honors (Upper Division) and at least two years of relevant work experience.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Master of Science in Economics',
      school: 'School of Business and Economics',
      description: 'A Bachelor\'s degree in Economics or related field with at least Second-Class Honors (Upper Division).',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  undergrad: [
    {
      title: 'Bachelor of Commerce (Accounting)',
      school: 'School of Business and Economics',
      description: 'KCSE Mean Grade C+ (plus) with at least C+ in Mathematics and English. CPA pathway integrated.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Commerce (Marketing)',
      school: 'School of Business and Economics',
      description: 'KCSE Mean Grade C+ (plus) with passes in Mathematics and English. Focus on digital and strategic marketing.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Commerce (Finance)',
      school: 'School of Business and Economics',
      description: 'KCSE Mean Grade C+ (plus) with at least C+ in Mathematics. CFA and CIMA aligned curriculum.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Economics',
      school: 'School of Business and Economics',
      description: 'KCSE Mean Grade C+ (plus) with minimum C+ in Mathematics and English. Training in micro and macroeconomic analysis.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Bachelor of Entrepreneurship',
      school: 'School of Business and Economics',
      description: 'KCSE Mean Grade C+ (plus). Practical training in business startup, innovation, and small business management.',
      duration: '4 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  diploma: [
    {
      title: 'Diploma in Business Management',
      school: 'School of Business and Economics',
      description: 'KCSE Mean Grade C- (minus). Foundational business skills in management, accounting, and entrepreneurship.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Diploma in Accounting',
      school: 'School of Business and Economics',
      description: 'KCSE Mean Grade C- (minus) with passes in Mathematics and English. CPA foundation pathway.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Diploma in Marketing',
      school: 'School of Business and Economics',
      description: 'KCSE Mean Grade C- (minus). Training in market research, advertising, brand management, and digital marketing.',
      duration: '2 Years',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  certificate: [
    {
      title: 'Certificate in Business Management',
      school: 'School of Business and Economics',
      description: 'KCSE Mean Grade D+ (plus). Introductory business concepts including accounting, marketing, and entrepreneurship.',
      duration: '1 Year',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Certificate in Accounting',
      school: 'School of Business and Economics',
      description: 'KCSE Mean Grade D+ (plus) with a pass in Mathematics. Basic bookkeeping and financial accounting skills.',
      duration: '1 Year',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Certificate in Entrepreneurship',
      school: 'School of Business and Economics',
      description: 'KCSE Mean Grade D+ (plus). Practical skills in business planning, financial literacy, and small enterprise management.',
      duration: '6 Months',
      mode: 'On Campus',
      image: 'https://images.pexels.com/photos/5692761/pexels-photo-5692761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
};

/* ═════════════════════════════════════════════════════
   DEAN MESSAGES
   ═════════════════════════════════════════════════════ */
export const AGRICULTURE_DEAN_MESSAGE: DeanMessage = {
  name: 'Dr. Virginia Mwanzia',
  title: 'Dean',
  subtitle: 'A Hub of Innovation and Excellence in Agriculture!',
  salutation: 'Dear Students, Faculty, Staff, and Visitors,',
  paragraphs: [
    'I am delighted to welcome you to the School of Agriculture, Technical Studies and Natural Sciences at Lukenya University, where we are dedicated to fostering excellence in agricultural education, research, and innovation. Nestled in the heart of Makueni County, our university stands as a beacon of learning and sustainable development in the region.',
    'At Lukenya University, we pride ourselves on offering a robust curriculum that equips our students with the knowledge and skills necessary to tackle the challenges of a rapidly evolving agricultural landscape. Whether you are pursuing studies in crop science, animal science, forage production, livestock management, environment and ecology, or short courses, our programs are designed to empower you with practical insights and hands-on experience.',
  ],
  image: '/academics-module/agric.jpg',
};

export const HEALTH_SCIENCE_DEAN_MESSAGE: DeanMessage = {
  name: 'Dr. Sarah Wanjiku',
  title: 'Dean',
  subtitle: 'Advancing Health and Well-being Through Education!',
  salutation: 'Dear Students, Colleagues, and Partners,',
  paragraphs: [
    'Welcome to the School of Health Sciences at Lukenya University. Our school is committed to producing competent, compassionate healthcare professionals who will serve their communities with distinction. We offer a comprehensive range of programs from certificate to doctoral level, all designed to meet the evolving needs of the healthcare sector.',
    'Our faculty comprises experienced practitioners and researchers who bring real-world expertise into the classroom. We emphasize hands-on clinical training, community-based learning, and interdisciplinary collaboration to ensure our graduates are well-prepared for the challenges of modern healthcare delivery.',
  ],
  image: '/academics-module/health.jpg',
};

export const EDUCATION_DEAN_MESSAGE: DeanMessage = {
  name: 'Prof. James Ochieng',
  title: 'Dean',
  subtitle: 'Shaping Minds, Transforming Communities!',
  salutation: 'Dear Students, Educators, and Stakeholders,',
  paragraphs: [
    'It is my distinct pleasure to welcome you to the School of Education and Social Sciences at Lukenya University. Our school is founded on the belief that education and social sciences are the bedrock of any progressive society. We are dedicated to training educators, counselors, social workers, and researchers who will make a meaningful impact in their communities.',
    'Our programs are designed to blend theoretical knowledge with practical application-module. Through partnerships with schools, social welfare agencies, and community organizations, our students gain valuable field experience that prepares them for successful careers. We invite you to join us in our mission to shape minds and transform communities.',
  ],
  image: '/academics-module/education.jpg',
};

export const BUSINESS_DEAN_MESSAGE: DeanMessage = {
  name: 'Dr. Grace Mutua',
  title: 'Dean',
  subtitle: 'Empowering Business Leaders for a Global Economy!',
  salutation: 'Dear Students, Industry Partners, and Visitors,',
  paragraphs: [
    'Welcome to the School of Business and Economics at Lukenya University. Our school is at the forefront of business education, preparing students for the dynamic demands of the global economy. We offer programs that combine academic rigor with practical relevance, ensuring our graduates are ready to lead and innovate.',
    'Our curriculum is continuously updated to reflect current industry trends and emerging technologies. We maintain strong linkages with the corporate sector, providing our students with internship opportunities, guest lectures, and career mentorship. We are committed to developing ethical, competent, and visionary business leaders.',
  ],
  image: '/academics-module/business.jpg',
};

/* ═════════════════════════════════════════════════════
   HERO DATA
   ═════════════════════════════════════════════════════ */
export const AGRICULTURE_HERO: HeroData = {
  description: 'The School of Agriculture and Applied Sciences provides high quality education which is based on current and relevant scientific teaching and research techniques.',
  imageAlt: 'Agriculture and technical studies learning session',
  imageUrl: '/home/soat.webp',
  pillText: 'School of Agriculture & Natural Sciences',
  pillIconUrl: '/home/academy-cap.svg',
  titlePrefix: 'Agriculture & ',
  titleHighlight: 'Natural Sciences',
  titleSuffix: ''
};

export const HEALTH_SCIENCE_HERO: HeroData = {
  description: 'The School of Health Sciences is dedicated to producing competent healthcare professionals through comprehensive training, research, and community service.',
  imageAlt: 'Health science students in training',
  imageUrl: '/home/sohs.webp',
  pillText: 'School of Health Sciences',
  pillIconUrl: '/home/academy-cap.svg',
  titlePrefix: 'Health ',
  titleHighlight: 'Sciences',
  titleSuffix: ''
};

export const EDUCATION_HERO: HeroData = {
  description: 'Your education takes place in a learning community with quality, full time faculty whose teaching, scholarship and service will enrich your learning environment.',
  imageAlt: 'Education and social sciences students',
  imageUrl: '/home/sohs.webp',
  pillText: 'School of Education & Social Sciences',
  pillIconUrl: '/home/academy-cap.svg',
  titlePrefix: 'Education & ',
  titleHighlight: 'Social Sciences',
  titleSuffix: ''
};

export const BUSINESS_ECONOMICS_HERO: HeroData = {
  description: 'The School of Business and Economics prepares students for the personnel needs of the changing business environment and for participation in the global economy.',
  imageAlt: 'Business students discussing classwork',
  imageUrl: '/home/sob.webp',
  pillText: 'School of Business & Economics',
  pillIconUrl: '/home/academy-cap.svg',
  titlePrefix: 'Business & ',
  titleHighlight: 'Economics',
  titleSuffix: ''
};
