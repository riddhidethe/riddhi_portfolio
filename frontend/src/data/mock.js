// Mock data for portfolio

export const personalInfo = {
  name: "Riddhi Dethe",
  email: "riddhidethe4@gmail.com",
  phone: "+91-9373247185",
  linkedin: "https://www.linkedin.com/in/riddhidethe",
  github: "https://github.com/riddhidethe",
  role: "Software Developer | Full-Stack Developer | AI/ML Engineer",
  tagline: "Building intelligent solutions with code and data",
  bio: "Hey folks! I'm Riddhi Dethe, and welcome to my corner of the internet. I'm someone who enjoys building things that work smart, not just look good. Whether it's a full-stack platform, an AI-powered tool, or a data-driven dashboard, I like diving deep into problems and engineering solutions that are both practical and impactful. My journey so far? Four amazing internships where I've worn many hats—from automating databases at Amdocs to crafting AI chatbots and building code testing platforms. Each experience has shaped me into a developer who values clean architecture, automation, and meaningful innovation. Stick around, and let me walk you through what I've been working on!",
  location: "Pune, Maharashtra, India",
  education: {
    degree: "B.Tech - Computer Engineering",
    institution: "MIT Academy of Engineering, Pune",
    duration: "2022 - 2026",
    cgpa: "9.35 / 10"
  },
  stats: {
    cgpa: 9.35,
    internships: 4,
    projects: 6,
    publications: 1
  }
};

export const skills = {
  languages: [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "SQL", level: 85 },
    { name: "Java", level: 75 },
    { name: "C++", level: 70 }
  ],
  frontend: [
    { name: "React.js", level: 88 },
    { name: "HTML5/CSS3", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Streamlit", level: 75 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "Flask", level: 80 },
    { name: "REST APIs", level: 88 }
  ],
  databases: [
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 85 },
    { name: "Oracle DB", level: 75 }
  ],
  aiml: [
    { name: "TensorFlow/Keras", level: 82 },
    { name: "PyTorch", level: 80 },
    { name: "Transformers", level: 78 },
    { name: "Machine Learning", level: 85 },
    { name: "Prompt Engineering", level: 88 },
    { name: "NLP", level: 75 }
  ],
  tools: [
    { name: "Git/GitHub", level: 90 },
    { name: "Power BI", level: 80 },
    { name: "VS Code", level: 95 },
    { name: "Google Apps Script", level: 75 },
    { name: "Unix Shell", level: 70 }
  ]
};

export const experiences = [
  {
    id: 1,
    company: "Amdocs",
    role: "Software Engineer Intern",
    duration: "Jan 2026 - Present",
    location: "Remote",
    description: "Working on database automation and AI-powered data retrieval solutions.",
    achievements: [
      "Developed automated database cleanup solution reducing deletion time from hours to minutes",
      "Implemented RAG-based MCP integration for enhanced data retrieval",
      "Built SQL Data Model MCP module for efficient data management"
    ],
    skills: ["SQL", "Oracle DB", "AI", "Unix Shell", "Automation"]
  },
  {
    id: 2,
    company: "Aquarius Engineers Private Limited",
    role: "AI Intern",
    duration: "Aug 2025 - Dec 2025",
    location: "Hybrid",
    description: "Focused on data analytics, automation, and AI chatbot development.",
    achievements: [
      "Designed interactive Power BI dashboards for data-driven insights",
      "Automated internal workflows using Google Apps Script",
      "Developed AI-powered chatbot using Google Gemini API and Streamlit"
    ],
    skills: ["Power BI", "Python", "Gemini API", "Streamlit", "Automation"]
  },
  {
    id: 3,
    company: "WorqHat",
    role: "Full Stack Developer",
    duration: "Jun 2025 - Jul 2025",
    location: "Remote",
    description: "Built a full-stack code testing platform with AI integration.",
    achievements: [
      "Developed real-time code execution and test case evaluation platform",
      "Integrated Worqhat AI APIs for automated code reviews",
      "Designed responsive UI using TypeScript, TailwindCSS, and shadcn",
      "Managed user roles and data using custom database"
    ],
    skills: ["TypeScript", "React", "Tailwind", "Node.js", "AI APIs"]
  },
  {
    id: 4,
    company: "Super30 Batch",
    role: "Full Stack Web Developer",
    duration: "Jun 2024 - Aug 2024",
    location: "On-site",
    description: "Developed a comprehensive job portal for connecting job seekers with recruiters.",
    achievements: [
      "Built complete MERN stack job portal with applicant and recruiter dashboards",
      "Implemented job search, application tracking, and CV management",
      "Created interactive dashboard with hiring metrics visualization",
      "Integrated automated interview scheduling with email notifications"
    ],
    skills: ["React", "Node.js", "Express", "MySQL", "Nodemailer"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Skin Cancer Detection & Staging",
    category: "AI/ML",
    description: "Stacking-based deep ensemble system for automated skin cancer detection and staging using CNNs and Random Forest meta-learner.",
    longDescription: "Developed an AI-powered diagnostic system utilizing ResNet50, DenseNet121, and EfficientNetB0 for feature extraction, combined with a Random Forest meta-learner for classification. The system detects 7 types of skin lesions and stages cancer from Stage 0 to Stage IV.",
    tech: ["Python", "TensorFlow", "Keras", "Flask", "OpenCV", "scikit-learn"],
    features: [
      "91.2% classification accuracy on HAM10000 dataset",
      "Multi-stage cancer detection (Stage 0-IV)",
      "Ensemble learning with 3 pre-trained CNNs",
      "Web-based interface for image upload and prediction"
    ],
    github: null,
    demo: null,
    image: null,
    featured: true
  },
  {
    id: 2,
    title: "AI Doc-Enhancer",
    category: "Full-Stack",
    description: "VS Code extension that enhances product documentation using AI-powered features for technical writing.",
    longDescription: "Built a VS Code extension leveraging WorqHat APIs to enhance technical documentation. Features include content enhancement, simplification, summarization, translation, and flowchart generation with real-time preview and PDF export.",
    tech: ["React", "Node.js", "Express", "VS Code API", "REST APIs"],
    features: [
      "Technical content enhancement and simplification",
      "Multi-language translation support",
      "Automatic flowchart generation from documentation",
      "Real-time preview with PDF export",
      "Custom keyboard shortcuts for productivity"
    ],
    github: "https://github.com/riddhidethe/Doc_Enhancer",
    demo: null,
    image: null,
    featured: true
  },
  {
    id: 3,
    title: "Sequelizer Generator",
    category: "Full-Stack",
    description: "Automation tool for generating Sequelize ORM models and database relationship code.",
    longDescription: "Developed an automated code generation tool that streamlines the process of creating Sequelize models and defining database relationships. Saves development time and ensures consistent, well-structured code.",
    tech: ["JavaScript", "Node.js", "Sequelize ORM"],
    features: [
      "Automated model creation from schema definitions",
      "Automatic relationship mapping between models",
      "Time-saving code generation",
      "Precise and accurate output",
      "Well-structured and manageable codebase"
    ],
    github: null,
    demo: null,
    image: null,
    featured: false
  },
  {
    id: 4,
    title: "GPT-2 Folk Tale Generator",
    category: "AI/ML",
    description: "Fine-tuned GPT-2 model for generating creative Indian folk tales with coherent narratives.",
    longDescription: "Developed and fine-tuned a GPT-2 language model on a curated dataset of Indian folk tales. Created an automated NLP pipeline for data preprocessing and implemented prompt-based story generation with diverse, coherent outputs.",
    tech: ["Python", "PyTorch", "Transformers", "NLTK", "Hugging Face"],
    features: [
      "Fine-tuned GPT-2 on Indian folk tale corpus",
      "Automated NLP preprocessing pipeline",
      "Prompt-based creative story generation",
      "Data visualization of training metrics"
    ],
    github: "https://github.com/riddhidethe/IndianFolkTalesGenerator",
    demo: null,
    image: null,
    featured: true
  },
  {
    id: 5,
    title: "Women's Wellness Coach",
    category: "AI/ML",
    description: "ML-powered healthcare platform providing personalized health recommendations for women.",
    longDescription: "Built a Python and Streamlit-based healthcare platform using machine learning algorithms (hierarchical clustering, GMM) to segment users and provide personalized health recommendations with interactive data visualizations.",
    tech: ["Python", "Streamlit", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    features: [
      "User segmentation using hierarchical clustering and GMM",
      "Personalized health recommendations",
      "Interactive data visualizations",
      "Health tracking and monitoring"
    ],
    github: "https://github.com/riddhidethe/Woman-s-Wellness-Coach",
    demo: null,
    image: null,
    featured: false
  },
  {
    id: 6,
    title: "Job Portal Platform",
    category: "Full-Stack",
    description: "Comprehensive MERN stack job portal connecting job seekers with recruiters.",
    longDescription: "Developed a full-featured job portal with separate interfaces for job seekers and recruiters. Includes job search, application tracking, CV management, automated interview scheduling, and email notifications.",
    tech: ["React", "Node.js", "Express", "MySQL", "Nodemailer", "Multer"],
    features: [
      "Dual dashboards for applicants and recruiters",
      "Advanced job search and filtering",
      "Application tracking system",
      "CV upload and management",
      "Automated interview scheduling with email notifications",
      "Hiring metrics visualization"
    ],
    github: null,
    demo: null,
    image: null,
    featured: true
  }
];

export const publications = [
  {
    id: 1,
    title: "Transformer-Based Framework for Interpretable and Scalable Genomic Sequence Alignment",
    authors: "Riddhi Dilip Dethe et al.",
    venue: "IEEE Conference",
    year: "2025",
    doi: "https://ieeexplore.ieee.org/document/11187519",
    abstract: "This paper presents a novel transformer-based framework for genomic sequence alignment that provides interpretable and scalable solutions for computational biology applications.",
    category: "AI/ML, Bioinformatics"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Datathon'25 Winner",
    description: "Winner of Datathon 2025",
    year: "2025",
    icon: "trophy"
  },
  {
    id: 2,
    title: "Postman Student Expert",
    description: "Earned certification by completing 20+ API tests with 95% accuracy",
    year: "2024",
    icon: "award"
  },
  {
    id: 3,
    title: "Multiple Hackathons",
    description: "Participated in various hackathons and coding competitions",
    year: "2023-2025",
    icon: "code"
  },
  {
    id: 4,
    title: "Published Researcher",
    description: "Published research paper in IEEE conference proceedings in 2025",
    year: "2025",
    icon: "book-open"
  }
];
