export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type HeroModel = {
  headline: string;
  subline: string;
  pills: string[];
  cta: {
    email: string;
    links: { label: string; url: string }[];
  };
  note: string;
};

export type AboutModel = {
  title: string;
  paragraphs: string[];
  focusAreas: string[];
};

export type TechFace = {
  title: string;
  badge: string;
  items: string[];
};

export type TechModel = {
  title: string;
  hint: string;
  faces: TechFace[];
};

export type ExperienceItem = {
  title: string;
  when: string;
  bullets: string[];
};

export type ExperienceModel = {
  title: string;
  items: ExperienceItem[];
};

export type ProjectItem = {
  title: string;
  desc: string;
  meta: string;
  url?: string;
};

export type ProjectsModel = {
  title: string;
  intro: string;
  items: ProjectItem[];
};

export type CreatorVideo = {
  id: string;
  title: string;
  desc: string;
  url: string;
};

export type CreatorModel = {
  title: string;
  intro: string;
  hint: string;
  videos: CreatorVideo[];
};


export type ContactModel = {
  email: string;
  links: {
    label: string;
    url: string;
  }[];
};


export type TravelFlag = {
  emoji: string;
  name: string;
};

export type TravelPhoto = {
  src: string;
  title: string;
  desc: string;
};

export type TravelModel = {
  title: string;
  intro: string;
  flags: TravelFlag[];
  quote: {
    text: string;
    author: string;
  };
  photos: {
    title: string;
    intro: string;
    hint: string;
    items: TravelPhoto[];
  };
};

export type SiteModel = {
  brand: { name: string; href: string };
  nav: NavItem[];

  hero: HeroModel;
  about: AboutModel;
  tech: TechModel;
  experience: ExperienceModel;
  projects: ProjectsModel;
  creator: CreatorModel;
  travel: TravelModel;
  contact: ContactModel; 

};

export const siteModel: SiteModel = {
  brand: { name: "Sarker Sunzid Mahmud", href: "#top" },

  nav: [
    { id: "about", label: "About", href: "#about" },
    { id: "stack", label: "Tech", href: "#stack" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "creator", label: "Content", href: "#creator" },
    { id: "travel", label: "Travelling", href: "#travel" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],

  hero: {
    headline:
      "Full-Stack Developer building reliable products with performance and clean architecture.",
    subline:
      "Based in Dortmund, Germany. I am a Full-Stack Developer with 5+ years of experience delivering web applications across Europe and Asia. I enjoy API design, performance optimization, and building systems that teams can maintain long term.",
    pills: [
      "5+ years professional experience",
      "Laravel • React • Angular • Node.js",
      "Performance • Clean Architecture • GDPR",
      "AI • RAG • LangChain • Vector DB",
      "M.Sc. Data Science (TU Dortmund)",
      "English C1 • German A2 (improving)",
    ],
    cta: {
      email: "sunzid02@gmail.com",
      links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/sarker-sunzid-mahmud" },
        { label: "GitHub", url: "https://github.com/sunzid02" },
      ],
    },
    note: "Previously: Atflow GmbH (Sep 2025 to Dec 2025). Currently open to new opportunities.",
  },

  about: {
    title: "About",
    paragraphs: [
      "I am a Full-Stack Developer with 5+ years of experience delivering web applications across Europe and Asia. I enjoy API design, performance optimization, and building systems that teams can maintain long term.",
      "Beyond technical skills, I am someone who values clarity, ownership, and long term thinking. I like understanding the why behind a problem, simplifying complexity, and leaving systems better than I found them. Teams usually describe me as calm, reliable, and easy to collaborate with.",
    ],
    focusAreas: [
      "Backend APIs and clean architecture",
      "Frontend web apps (React and Angular)",
      "Performance, reliability, and security basics",
      "DevOps fundamentals (Docker, Kubernetes, CI/CD)",
    ],
  },

  tech: {
    title: "Tech Stack",
    hint: "Explore my stack as a 3D cube. Drag to rotate, or use the buttons to jump to a side.",
    faces: [
      {
        title: "Backend",
        badge: "APIs • Data • Architecture",
        items: [
          "PHP (Laravel, Symfony)",
          "Node.js (Express)",
          "REST APIs",
          "GraphQL",
          "MySQL",
          "MongoDB",
          "Kafka",
        ],
      },
      {
        title: "Frontend",
        badge: "UI • Web Apps • Experiments",
        items: [
          "HTML",
          "CSS",
          "Tailwind CSS",
          "JavaScript",
          "React",
          "Angular",
          "TypeScript",
          "VWO (A/B Testing)",
          "Optimizely",
          "Google Optimize",
        ],
      },
      {
        title: "AI",
        badge: "RAG • LLM • Automation",
        items: [
          "Python",
          "LLM Applications",
          "RAG Pipelines",
          "LangChain",
          "Vector Databases",
          "Generative AI",
        ],
      },
      {
        title: "DevOps",
        badge: "Deploy • Scale • Ship",
        items: ["Docker", "Kubernetes", "GitHub Actions", "PHPUnit • Jest"],
      },
      {
        title: "Prompting Tools",
        badge: "Research • Ideation • Prompting",
        items: ["ChatGPT", "Gemini", "Grok", "Canva", "Perplexity", "NotebookLM"],
      },
      {
        title: "Content Creation",
        badge: "Video • Audio",
        items: ["CapCut", "ElevenLabs (Audio)"],
      },
    ],
  },

  experience: {
    title: "Experience",
    items: [
      {
        title: "Full Stack Developer (Part-time) | Atflow GmbH, Hamburg, Germany",
        when: "Sep 2025 to Dec 2025",
        bullets: [
          "Developed task and time tracking features with Laravel and Reac...ling calendar-based hour allocation and accurate client billing.",
          "Optimized DATEV-based billing workflows using task-time analytics and code reviews, reducing errors by around 20%.",
        ],
      },
      {
        title:
          "Full Stack Developer (Part-time) | Konnektivität & Kommunikation GmbH, Hamm, Germany",
        when: "Aug 2021 to May 2025",
        bullets: [
          "Reduced REST API response times by 30% through caching and endpoint optimization using PHP Slim.",
          "Improved reporting performance by 25% via MySQL schema and index optimization.",
          "Built and maintained Angular-based internal web apps, reducing manual reporting effort by 40% for teams.",
        ],
      },
      {
        title:
          "Internship | Deutsche Gesetzliche Unfallversicherung e.V. (DGUV), Bochum, Germany",
        when: "May 2024 to Aug 2024",
        bullets: [
          "Built and cleaned large-scale sensor datasets using Python (Pandas, NumPy) for occupational health research.",
          "Applied logistic regression and ROC analysis to determine an optimal daylight exposure threshold (600 lux).",
          "Created clear visualizations to communicate findings to researchers and non-technical stakeholders.",
        ],
      },
      {
        title: "Software Engineer | Echologyx, Dhaka, Bangladesh",
        when: "Oct 2020 to May 2021",
        bullets: [
          "Reduced page load times by 15% by optimizing JavaScript and CSS delivery and removing render-blocking resources.",
          "Increased conversion rates by up to 25% through A/B and multivariate testing using Optimizely, VWO, and Google Optimize.",
        ],
      },
      {
        title: "Software Engineer | REPTO Education Center, Dhaka, Bangladesh",
        when: "May 2019 to May 2020",
        bullets: [
          "Designed and scaled backend systems using Laravel, MySQL, and REST APIs for an e-learning platform with 50,000+ users.",
          "Integrated job boards, exam systems, and premium memberships with SSLCommerz payments, increasing engagement by 35%.",
        ],
      },
      {
        title: "Web Developer | Cloudwell Limited (PayWell), Dhaka, Bangladesh",
        when: "Oct 2017 to Mar 2019",
        bullets: [
          "Built secure, high-volume payment processing services in PHP handling thousands of daily transactions.",
          "Automated sales reporting and dashboard generation using cron-based Excel integrations, reducing manual effort by 50%.",
        ],
      },
    ],
  },

  projects: {
    title: "Projects",
    intro: "Selected projects that reflect my day to day stack and the kind of problems I enjoy solving.",
    items: [
      {
        title: "News Aggregator",
        desc: "Laravel 12 + React platform aggregating multi-source news via scheduled ingestion and RESTful APIs.",
        meta: "Laravel • React • DTO architecture • Search and filters",
        url: "https://github.com/sunzid02/news-aggregator",
      },
      {
        title: "Dev Connector",
        desc: "Developer social network built with React, Node.js, and MongoDB with JWT authentication.",
        meta: "React • Node.js • MongoDB • JWT",
        url: "https://github.com/sunzid02/SocialSite",
      },
      {
        title: "Daylight Exposure Analysis",
        desc: "Logistic regression and ROC analysis on sensor data to identify optimal daylight thresholds.",
        meta: "Python • scikit-learn • Data analysis",
      },
    ],
  },

  creator: {
    title: "Content Creator",
    intro:
      "I also create developer focused content like short tutorials, interview prep, and practical engineering notes. When I am not explaining serious tech things, I enjoy making funny and creative memes to show my imagination, keep learning fun, and remind everyone that engineers are allowed to laugh too.",
    hint: "Use the arrows to browse. Press play to load the video.",
    videos: [
      {
        id: "xNwMbXn1rpE",
        title: "This is who I am",
        desc: "If you are a developer, engineer, or someone who loves problem solving, this video is for you.",
        url: "https://youtu.be/xNwMbXn1rpE",
      },
      {
        id: "d2BziZU60us",
        title: "How I Met My Wife",
        desc: "This Christmas, I wanted to give my wife s...his is my first animated video and I dedicate it to my wife ❤️",
        url: "https://www.youtube.com/watch?v=d2BziZU60us",
      },
      {
        id: "PHp-iQHsOHQ",
        title: "Why do we really need calculus in real life? ",
        desc: "In this video, I explain calculus through ...y and fun, with no formulas, no fear, just real understanding.",
        url: "https://www.youtube.com/watch?v=PHp-iQHsOHQ",
      },
      {
        id: "NdIGFgBrxfM",
        title: "Async JavaScript Explained: Promises vs Observables vs RxJS (Simple Guide)",
        desc: "In this video, I explain Promises, Observa...ecially for developers who struggle with RxJS like I once did.",
        url: "https://www.youtube.com/watch?v=NdIGFgBrxfM",
      },
      {
        id: "-Yxgw5RiCvY",
        title: "Rise of Hadi",
        desc: "No more silence.",
        url: "https://youtu.be/-Yxgw5RiCvY",
      },
      {
        id: "7slH9G95u8U",
        title: "How I started my Career",
        desc: "From nothing to Germany.",
        url: "https://www.youtube.com/watch?v=7slH9G95u8U",
      },
    ],
  },

  travel: {
    title: "Travel & Mindset",
    intro:
      "Traveling has shaped how I think and work. Experiencing different cultures across Europe helped me adapt quickly, communicate clearly, and stay calm while solving complex problems in unfamiliar environments.",
    flags: [
      { emoji: "🇧🇩", name: "Bangladesh" },
      { emoji: "🇩🇪", name: "Germany" },
      { emoji: "🇦🇹", name: "Austria" },
      { emoji: "🇨🇭", name: "Switzerland" },
      { emoji: "🇭🇷", name: "Croatia" },
      { emoji: "🇪🇸", name: "Spain" },
      { emoji: "🇹🇷", name: "Turkey" },
      { emoji: "🇫🇷", name: "France" },
    ],
    quote: {
      text: "A person who never made a mistake never tried anything new.",
      author: "Albert Einstein",
    },
    photos: {
      title: "Travel Photos",
      intro: "A few moments from my travels. Use the arrows to browse.",
      hint: "Use the arrows to browse photos.",
      items: [
        {
          src: "src/assets/travel/germany.jpg",
          title: "Germany",
          desc: "Match day energy with a giant flag and even bigger ex...on, like software, scales very fast in the right environment.",
        },
        {
          src: "src/assets/travel/austria.jpg",
          title: "Austria",
          desc: "Cold air, calm views, and that feeling of...ture. Great reminder that pace matters, not just speed.",
        },
        {
          src: "src/assets/travel/switzerland.jpg",
          title: "Switzerland",
          desc: "Sharp mountains, clean air, and quiet det...e. I learned how much clarity comes from simplicity.",
        },
        {
          src: "src/assets/travel/croatia.jpg",
          title: "Croatia",
          desc: "Sun, sea, and a peaceful reset. Travel he...sharper focus and a lighter mindset for work.",
        },
        {
          src: "src/assets/travel/spain.jpg",
          title: "Spain",
          desc: "Warm streets, new language, new rhythm. R...t growth often comes from discomfort and curiosity.",
        },
        {
          src: "src/assets/travel/turkey.jpg",
          title: "Turkey",
          desc: "History everywhere and incredible people....ve that context matters when understanding any system.",
        },
        {
          src: "src/assets/travel/france.jpg",
          title: "France",
          desc: "A quick stop, a big memory. Sometimes the... moments become the most meaningful ones.",
        },
        {
          src: "assets/travel/bangladesh.jpg",
          title: "Bangladesh",
          desc: "Where it all started. Roots, hustle, famil...h built the mindset I carry into every project.",
        },
      ],
    },


    
  },

  contact: {
    email: "sunzid02@gmail.com",
    links: [
      { label: "GitHub", url: "https://github.com/sunzid02" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/sarker-sunzid-mahmud",
      },
    ],
  },


};
