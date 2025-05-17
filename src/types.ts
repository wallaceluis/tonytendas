export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
}