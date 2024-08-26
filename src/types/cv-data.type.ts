export type Experience = {
  company: string;
  jobTitle: string;
  startDate: string;
  isCurrent?: boolean;
  endDate?: string;
  description: string;
};

export type Contact = {
  label?: string;
  href?: string;
  red?: string;
  type: string;
};

export type CV = {
  name: string;
  profession: string;
  resume: string;
  certifications: string[];
  experience: Experience[];
  contact: Contact[];
};
