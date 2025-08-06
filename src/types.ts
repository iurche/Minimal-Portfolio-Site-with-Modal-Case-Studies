export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  client: string;
  year: string;
  role: string;
  caseStudy: {
    challenge: string;
    approach: string;
    outcome: string;
    images: string[];
  };
}