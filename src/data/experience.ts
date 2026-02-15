export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Instructor (Python)",
    company: "Institute of Brainiacs",
    period: "Jan 2025 - Oct 2025",
    description: "Led comprehensive Python programming courses for remote students, fostering a strong foundation in algorithmic thinking and software development. Mentored students through complex coding challenges and facilitated interactive learning sessions.",
    skills: ["Python", "Teaching", "Curriculum Development", "Remote Collaboration"]
  },
  {
    id: 2,
    role: "Software Engineer (Contract)",
    company: "Viso Labs",
    period: "Apr 2025 - Jul 2025",
    description: "Spearheaded Quality Assurance for the flagship CholaSys ERP, ensuring robust performance and reliability. Designed high-fidelity UI/UX interactions for the corporate website using Figma. Prototyped full-stack features and automated critical workflows using n8n, integrating AI-driven chatbot solutions to enhance user engagement.",
    skills: ["QA Testing", "Figma", "n8n", "AI Integration", "React", "Full Stack Development"]
  }
];

export const education: EducationItem[] = [
  {
    id: 1,
    degree: "BSc (Hons) in Computer Science",
    institution: "University of Jaffna",
    period: "2022 - 2026",
    description: "Specializing in Artificial Intelligence and Data Science."
  }
];

export const certifications: CertificationItem[] = [
  { id: 1, name: "Production Machine Learning Systems", issuer: "Google Cloud Skills Boost", date: "Jan 2026", url: "#" },
  { id: 2, name: "Machine Learning Operations (MLOps) with Vertex AI: Model Evaluation", issuer: "Google Cloud Skills Boost", date: "Dec 2025", url: "#" },
  { id: 3, name: "H2O Wave Starter Course", issuer: "H2O.ai", date: "Dec 2025", url: "#" },
  { id: 4, name: "Data Science and Machine Learning Platforms", issuer: "H2O.ai", date: "Dec 2025", url: "#" },
  { id: 5, name: "H2O Cloud Al Developer Services", issuer: "H2O.ai", date: "Dec 2025", url: "#" },
  { id: 6, name: "Google Cloud Cybersecurity Certificate", issuer: "Google Cloud Skills Boost", date: "Dec 2024", url: "#" },
  { id: 7, name: "Mastering Deep Learning with Hands-on 2024", issuer: "IEEE Computer Society", date: "Aug 2024", url: "#" },
  { id: 8, name: "Google exploreCSR Symposium", issuer: "University of Jaffna", date: "Oct 2024", url: "#" },
  { id: 9, name: "UoJ Coders v3.0", issuer: "University of Jaffna", date: "Oct 2024", url: "#" },
  { id: 10, name: "Introduction to Kubernetes and Cloud Native Technologies", issuer: "LinuxFoundationX", date: "Jun 2024", url: "#" },
  { id: 11, name: "Introduction to Kubernetes", issuer: "edX", date: "Jun 2024", url: "#" },
  { id: 12, name: "Introduction to Cloud Infrastructure Technologies", issuer: "edX", date: "Jun 2024", url: "#" },
  { id: 13, name: "Introduction to Linux", issuer: "edX", date: "Jun 2024", url: "#" },
  { id: 14, name: "Intro to Machine Learning", issuer: "Kaggle", date: "Jun 2024", url: "#" },
  { id: 15, name: "Server-side Web Programming", issuer: "University of Moratuwa", date: "Jun 2024", url: "#" },
  { id: 16, name: "Agile Project Management Certifications", issuer: "University of Moratuwa", date: "Jun 2024", url: "#" },
  { id: 17, name: "Project Scope and Schedule Management", issuer: "University of Moratuwa", date: "Jun 2024", url: "#" },
  { id: 18, name: "Project Communication and Stakeholder Management", issuer: "University of Moratuwa", date: "Jun 2024", url: "#" },
  { id: 19, name: "Foundations of Project Management", issuer: "University of Moratuwa", date: "Jun 2024", url: "#" },
  { id: 20, name: "AI/ML Engineer - Stage 2", issuer: "SLIIT", date: "Jun 2024", url: "#" },
  { id: 21, name: "AI/ML Engineer - Stage 1", issuer: "SLIIT", date: "Jun 2024", url: "#" },
  { id: 22, name: "Deep Learning Fundamentals with Keras", issuer: "edX", date: "Jun 2024", url: "#" },
  { id: 23, name: "Front-End Web Development", issuer: "University of Moratuwa", date: "May 2024", url: "#" },
  { id: 24, name: "Python programming", issuer: "University of Moratuwa", date: "May 2024", url: "#" },
  { id: 25, name: "AI for Everyone: Master the Basics", issuer: "edX", date: "Mar 2024", url: "#" },
  { id: 26, name: "Blockchain: Understanding Its Uses and Implications", issuer: "edX", date: "Mar 2024", url: "#" }
];
