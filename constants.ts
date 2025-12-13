import { Project, SkillCategory, VolunteeringEvent } from './types';

//Project Images
const project1 ='/src/assets/projects/Sinhala_OCR.png';
const project2 ='/src/assets/projects/Sales_Management.png';
const project3 ='/src/assets/projects/Budget_Tracker.png';
const project4 ='/src/assets/projects/Vizo_Vote.png';
const project5 ='/src/assets/projects/Optize.png';
const project6 ='/src/assets/projects/Tourism.png';
const project7 ='/src/assets/projects/Student_management.png';


//Gallery Images
const iciet1 ='/assets/ICIET/ICIET.png';

const sb1 = '/src/assets/gallery/IEEE_SB/agm_1.jpg';
const sb2 = '/src/assets/gallery/IEEE_SB/agm_2.jpg';
const sb3 = '/src/assets/gallery/IEEE_SB/agm_3.jpg';
const sb4 = '/src/assets/gallery/IEEE_SB/step_to_industry_1.jpg';
const sb5 = '/src/assets/gallery/IEEE_SB/IEEE_Day_1.jpg';
const sb6 = '/src/assets/gallery/IEEE_SB/IEEE_Day_2.jpg';

const xtream = '/src/assets/gallery/Xtreme/Xtream_1.jpg';

const sl1 = '/src/assets/gallery/IEEE_SL/sl1.jpg';
const sl2 = '/src/assets/gallery/IEEE_SL/sl2.jpg';
const sl3 = '/src/assets/gallery/IEEE_SL/sl3.jpg';
const sl4 = '/src/assets/gallery/IEEE_SL/sl4.jpg';
const sl5 = '/src/assets/gallery/IEEE_SL/sl5.jpg';
const sl6 = '/src/assets/gallery/IEEE_SL/sl6.jpg';

export const RESUME_DATA = `
Name: Pasindu Nimesh Subasingha
Contact: +94 70 26 18 113 | subasinghapasindunimesh@gmail.com
Education: BSc(Hons) Software Engineering at General Sir John Kotelawala Defence University (2022-Present).
Role: Intern Software Engineer (Full-Stack & UI/UX) at Excello Developers (PVT) Ltd (June 2025 - Present).
Experience:
- Designed complete UI/UX for 'TheBae' mobile app and Internal HR Management System using Figma.
- Developed responsive front-end interfaces for mobile and web.
- Built backend features and REST APIs.
- Containerized services with Docker and managed cloud deployment.
- Agile workflows, Jira, Git.

Projects:
- Sinhala Handwritten OCR Mobile Application (Final Year Project): CNN/LSTM model, FastAPI backend, Flutter frontend.
- Sales Management System: .NET Core, React, Redux, Tailwind, SQL Server.
- Vizo Vote: Automated Election Vote Counting System.
- Student Management System.
- Budget Tracker Mobile App.
- Opteze Website Redesign (UI/UX).
- AI-Powered Calculator App.
- Sustainable Tourism Experience App.

Skills:
- Languages: Java, JavaScript, TypeScript, C#, Python, Dart, C++, SQL, HTML5, CSS3, PHP.
- Frameworks: Flutter, React.js, Redux, .NET Core, FastAPI, Bootstrap, Tailwind CSS, Laravel.
- Cloud/DevOps: GCP, Docker, Git, GitHub Actions, CI/CD.
- Databases: Firebase, MySQL, Microsoft SQL Server.
- Design: Figma, Photoshop, Illustrator, User Research, Prototyping.

Volunteering:
- IEEE Xtreme 18.0 Global Competition (Island Rank 81st).
- Public Visibility Standing Committee Head (IEEE Student Branch KDU).
- Organizing Committee Member (IEEE Computer Society).
- Design Team Member (BCS Student Chapter).
`;

// REPLACE THESE WITH YOUR ACTUAL IMAGES
export const PROFILE_IMAGE = "https://avatars.githubusercontent.com/u/119967869?v=4"; // Default
export const ENGINEER_IMAGE = "https://picsum.photos/id/1/800/800"; // Coding/Laptop focus
export const DESIGNER_IMAGE = "https://picsum.photos/id/3/800/800"; // Creative/Artistic focus

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Sinhala Handwritten OCR",
    description: "Final-year project converting handwritten Sinhala text into digital format using CNN & LSTM architectures with a Flutter front-end and FastAPI backend.",
    tags: ["Flutter", "FastAPI", "Python", "Deep Learning", "GCP"],
    imageUrl: project1,
    category: 'software',
    link: "https://github.com/PasinduNimeshS/Sinhala-OCR-App.git"
  },
  {
    id: 2,
    title: "Sales Management System",
    description: "Enterprise sales and inventory platform enabling management of customers, items, orders, and sales tracking with PDF invoicing.",
    tags: [".NET Core", "React", "Redux", "SQL Server", "Tailwind"],
    imageUrl: project2,
    category: 'software',
    link: "https://github.com/PasinduNimeshS/Sales_Order_System.git"
  },
  {
    id: 3,
    title: "Budget Tracker",
    description: "A budget tracking application UI/UX design focused on managing personal finances with clear insights and intuitive user flows.",
    tags: ["Figma", "UI/UX", "Mobile Design", "Finance App"],
    imageUrl: project3,
    category: 'design',
    link: "https://www.behance.net/gallery/221572489/Budget-Tracking-Application"
  },
  {
    id: 4,
    title: "Vizo Vote System",
    description: "Automated election vote counting system using real-time camera integration and ballot image recognition.",
    tags: ["Computer Vision", "Automation", "Real-time"],
    imageUrl: project4,
    category: 'software',
    link: "https://github.com/PasinduNimeshS/VizoVote.git"
  },
  {
    id: 5,
    title: "Opteze Website Redesign",
    description: "Complete UX overhaul and responsive redesign for a global apparel-tech company's corporate website.",
    tags: ["UI/UX", "Web Design", "Responsive", "Figma"],
    imageUrl: project5,
    category: 'design',
    link: "https://www.behance.net/gallery/224919649/Opteze-Web-Site-Re-Design"
  },
  {
    id: 6,
    title: "Sustainable Tourism App",
    description: "Cross-platform application promoting eco-friendly tourism in Sri Lanka with booking and educational features.",
    tags: ["Flutter", "Cross-platform", "UI Design"],
    imageUrl: project6,
    category: 'design',
    link: "https://www.behance.net/gallery/221573001/A-Sustainable-Tourism-Experience-for-Sri-Lanka"
  },
  {
    id: 7,
    title: "Student Management System UI/UX",
    description: "UI/UX design for a student management system focused on managing student records, courses, and administrative workflows with a clear and user-friendly interface.",
    tags: ["Figma", "UI/UX", "Dashboard", "Education System"],
    imageUrl: project7,
    category: 'design',
    link: "https://www.behance.net/gallery/221573533/Student-Management-System"
  }
];

// Helper to get Skill Icons URL
// Using skillicons.dev as requested
const getIcon = (slug: string) => `https://skillicons.dev/icons?i=${slug}`;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: getIcon("java") },
      { name: "JavaScript", icon: getIcon("js") },
      { name: "TypeScript", icon: getIcon("ts") },
      { name: "PHP", icon: getIcon("php") },
      { name: "C#", icon: getIcon("cs") },
      { name: "C++", icon: getIcon("cpp") },
      { name: "Python", icon: getIcon("py") },
      { name: "Dart", icon: getIcon("dart") },
      { name: "HTML5", icon: getIcon("html") },
      { name: "CSS3", icon: getIcon("css") }
    ]
  },
  {
    title: "Frameworks & Libs",
    skills: [
      { name: "Flutter", icon: getIcon("flutter") },
      { name: "React.js", icon: getIcon("react") },
      { name: "Redux", icon: getIcon("redux") },
      { name: "Laravel", icon: getIcon("laravel") },
      { name: ".NET Core", icon: getIcon("dotnet") },
      { name: "FastAPI", icon: getIcon("fastapi") },
      { name: "Tailwind CSS", icon: getIcon("tailwind") },
      { name: "Bootstrap", icon: getIcon("bootstrap") },
      { name: "Spring Boot", icon: getIcon("spring") }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Google Cloud", icon: getIcon("gcp") },
      { name: "Docker", icon: getIcon("docker") },
      { name: "Git", icon: getIcon("git") },
      { name: "GitHub Actions", icon: getIcon("githubactions") }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "Firebase", icon: getIcon("firebase") },
      { name: "MySQL", icon: getIcon("mysql") },
      { name: "MS SQL Server", icon: getIcon("azure") } // Azure used as representative for MS Stack/DB
    ]
  },
  {
    title: "UI/UX & Design",
    skills: [
      { name: "Figma", icon: getIcon("figma") },
      { name: "Photoshop", icon: getIcon("ps") },
      { name: "Illustrator", icon: getIcon("ai") }
    ]
  }
];

export const VOLUNTEERING_EVENTS: VolunteeringEvent[] = [
  {
    id: 1,
    role: "ICIET 2025",
    organization: "International Conference on Innovation and Emerging Technology, USJ",
    period: "2025",
    images: [
      iciet1
    ]
  },
  {
    id: 2,
    role: "Public Visibility Head",
    organization: "IEEE Student Branch, KDU",
    period: "2024 – 2025",
    images: [
      sb1,sb2,sb3,sb4,sb5,sb6
    ]
  },
  {
    id: 3,
    role: "Competitor (Island Rank 81st)",
    organization: "IEEE Xtreme 18.0 Global Competition",
    period: "2024",
    description: "Ranked 911th worldwide out of 19,000+ participants.",
    images: [
      xtream

    ]
  },
  {
    id: 4,
    role: "Design Team Member",
    organization: "IEEE SL Section - Challenge Sphere",
    period: "2024",
    images: [
      sl3,sl1,sl2,sl4,sl5,sl6
    ]
  },
];