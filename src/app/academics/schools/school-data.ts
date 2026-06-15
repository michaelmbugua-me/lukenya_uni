import { DeanMessage, HeroData, Program } from './school.model';

export const COMMON_PROGRAM_FILTERS = ['Short Courses', 'Certificate', 'Diploma', 'Undergraduate', 'Post Graduate'];
export const COMMON_SCHOOL_FILTERS = [
  'School of Business & Economics',
  'School of Agriculture, Technical Studies & Natural Studies',
  'School of Health Science',
  'School of Education & Social Sciences',
];

export const AGRICULTURE_PROGRAMS: { postGrad: Program[], undergrad: Program[] } = {
  postGrad: [
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
  ],
  undergrad: [
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
  ]
};

export const COMMON_DEAN_MESSAGE: DeanMessage = {
  name: 'Dr. Virginia Mwanzia',
  title: 'Dean',
  subtitle: 'A Hub of Innovation and Excellence in Agriculture!',
  salutation: 'Dear Students, Faculty, Staff, and Visitors,',
  paragraphs: [
    'I am delighted to welcome you to Lukenya University, where we are dedicated to fostering excellence in agricultural education, research, and innovation. Nestled in the heart of Makueni County, our university stands as a beacon of learning and sustainable development in the region.',
    'At Lukenya University, we pride ourselves on offering a robust curriculum that equips our students with the knowledge and skills necessary to tackle the challenges of a rapidly evolving agricultural landscape. Whether you are pursuing studies in crop science, animal science, forage production, livestock management, environment and ecology, or short courses, our programs are designed to empower you with practical insights and hands-on experience.'
  ],
  image: 'https://images.pexels.com/photos/7713533/pexels-photo-7713533.jpeg?auto=compress&cs=tinysrgb&w=600',
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

export const EDUCATION_HERO: HeroData = {
  description: 'Your education takes place in a learning community with quality, full time faculty whose teaching, scholarship and service will enrich your learning environment.',
  imageAlt: 'Health sciences student outdoors',
  imageUrl: '/home/sohs.webp',
  pillText: 'School of Education & Social Sciences',
  pillIconUrl: '/home/academy-cap.svg',
  titlePrefix: 'Education & ',
  titleHighlight: 'Social Sciences',
  titleSuffix: ''
};

