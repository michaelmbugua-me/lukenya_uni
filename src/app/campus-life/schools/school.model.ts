export interface Program {
  title: string;
  school: string;
  description: string;
  duration: string;
  mode: string;
  image: string;
}

export interface DeanMessage {
  name: string;
  title: string;
  subtitle: string;
  salutation: string;
  paragraphs: string[];
  image: string;
  readMoreLink?: string;
}

export interface HeroData {
  description: string;
  imageAlt: string;
  imageUrl: string;
  pillText: string;
  pillIconUrl: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
}

