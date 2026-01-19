const AirbrushImage = 'images/works/airbrush.webp'
const GaintainImage = 'images/gaintain/Hero Photos/about.png'
const JSharpImage = 'images/works/jsharp.webp'
const LoboGardensImage = 'images/works/lobogardens.webp'
const PhronesisPhoto = 'images/works/phronesis.webp'
const ProjectEchoImage = 'images/works/project_echo.webp'
const QuerqueImage = 'images/works/querque.webp'
const SunbeltImage = 'images/works/sunbelt.webp'
const UniNightsImage = 'images/works/uni_nights.webp'

export interface Project {
  name: string
  category: string
  description: string
  heroImage: string
  badges: string[]
  link?: {
    text: 'Read Case Study' | 'View Presentation' | 'Visit Website' | 'View Figma' | 'View Designs' | 'Request Access'
    url: string
  }
  colors: {
    cover: string
    primary: string
  }
}

export const Projects: Record<string, Project> = {
  Gaintain: {
    name: 'GainTain',
    category: 'Fitness Accountability App',
    description:
      'A fitness app designed for a comprehensive workout log to meticulously track exercises, sets, reps, and progress.',
    heroImage: GaintainImage,
    badges: ['Founder', 'Product', 'Iteration'],
    link: {
      text: 'Read Case Study',
      url: '/case_studies/gaintain'
    },
    colors: {
      cover: '#E65C00',
      primary: 'linear-gradient(45deg, #E65C00, #F9D423)'
    }
  },
  Phronesis: {
    name: 'Phronesis',
    category: 'Desktop Dashboard',
    description:
      'A student-focused landing page designed to streamline access to key academic resources, enhance communication, and improve the student experience.',
    heroImage: PhronesisPhoto,
    badges: ['UI Design', 'Brand Design', 'Design System'],
    link: {
      text: 'Read Case Study',
      url: 'https://www.figma.com/community/file/1275945844735159445/phronesis'
    },
    colors: {
      cover: '#146272',
      primary: '#146272'
    }
  },
  QuerqueCandles: {
    name: 'Querque Candles',
    category: 'Brand Design',
    badges: ['Consultancy', 'Graphic Design', 'Figma'],
    description:
      'Developed a cohesive brand identity for Querque Candles, including logo design and visual elements, to strengthen market presence.',
    heroImage: QuerqueImage,
    link: {
      text: 'Read Case Study',
      url: '/case_studies/querque_candles'
    },
    colors: {
      cover: '#C9450D',
      primary: 'linear-gradient(#C9450D, #C9450D)'
    }
  },
  AirbrushArtStudio: {
    name: 'Airbrush Art Studio',
    category: 'Website Development',
    badges: ['Consultancy', 'UX / UI Design', 'Responsive'],
    description:
      'Designed an engaging website for Airbrush Art Studio, optimizing information architecture, SEO, and copywriting to showcase their portfolio and attract clients.',
    heroImage: AirbrushImage,
    link: {
      text: 'Visit Website',
      url: 'https://www.airbrushart.studio'
    },
    colors: {
      cover: '#6B46C1',
      primary: '#6B46C1'
    }
  },
  JSharpMusic: {
    name: 'J Sharp Music',
    category: 'Website Development',
    badges: ['Consultancy', 'UX / UI Design', 'Responsive'],
    description:
      'Redesigned and migrated a music store’s website, improving navigation and ensuring easy updates with a streamlined, user-friendly design.',
    heroImage: JSharpImage,
    link: {
      text: 'Visit Website',
      url: 'https://www.jsharpmusic.com'
    },
    colors: {
      cover: '#2F3EA1',
      primary: '#2F3EA1'
    }
  },
  SunbeltProperties: {
    name: 'Sunbelt Properties',
    category: 'Website Development',
    badges: ['Consultancy', 'UX / UI Design', 'Responsive'],
    description:
      'Designed an intuitive website for Sunbelt Properties, optimizing navigation, SEO, and copywriting to enhance property visibility and user engagement.',
    heroImage: SunbeltImage,
    link: {
      text: 'Visit Website',
      url: 'https://www.sunbeltpropertiesnm.com/'
    },
    colors: {
      cover: '#0EA5E9',
      primary: '#0EA5E9'
    }
  },
  InvibeEsthetics: {
    name: 'Invibe Esthetics',
    category: 'Booking and Scheduling',
    badges: ['Consultancy', 'UX / UI Design', 'Responsive'],
    description:
      'Designed an intuitive website for Invibe Esthetics, optimizing navigation, SEO, and copywriting to enhance service visibility and user engagement.',
    heroImage: SunbeltImage,
    link: {
      text: 'Visit Website',
      url: 'https://www.invibeesthetics.com'
    },
    colors: {
      cover: '#965738',
      primary: '#965738'
    }
  },
  SmartVentureMedia: {
    name: 'Smart Venture Media',
    category: 'CMS Workflow Automation',
    badges: ['Consultancy', 'UX / UI Design', 'Responsive'],
    description:
      'Designed an intuitive website for Smart Venture Media, optimizing navigation, SEO, and copywriting to enhance service visibility and user engagement.',
    heroImage: SunbeltImage,
    link: {
      text: 'Visit Website',
      url: 'https://www.smartventuremedia.com'
    },
    colors: {
      cover: '#FF69B4',
      primary: 'linear-gradient(135deg, #FF69B4 0%, #F5F5DC 100%)'
    }
  },
  ProjectEcho: {
    name: 'Project ECHO',
    category: 'Data Visualization Tool',
    badges: ['Data ', 'Patterns', 'Interpretation''],
    description:
      'Optimized data processes and documentation by automating dashboards, streamlining onboarding, and improving technical guides to enhance team efficiency.',
    heroImage: ProjectEchoImage,
    link: {
      text: 'Read Case Study',
      url: '/case_studies/project_echo'
    },
    colors: {
      cover: '#0891B2',
      primary: 'linear-gradient(45deg, #0891B2, #06B6D4)'
    }
  },
  LoboGardens: {
    name: 'Lobo Gardens',
    category: 'Marketing Materials',
    badges: ['Graphic Design', 'InDesign', 'Photoshop'],
    description:
      'Developed branding and educational materials for Lobo Gardens, including a logo and promotional design to support community engagement.',
    heroImage: LoboGardensImage,
    link: {
      text: 'View Designs',
      url: 'https://dribbble.com/shots/16868644-Flyer-Designs-Business-Card-and-Brochure-Lobo-Gardens'
    },
    colors: {
      cover: '#8C6849',
      primary: '#8C6849'
    }
  },
  UniNights: {
    name: 'UNI Nights',
    category: 'Marketing Flyers',
    badges: ['Graphic Design', 'Photoshop', 'Illustrator'],
    description:
      'Planned and managed campus events at UNM, creating promotional materials that boosted visibility and attendance.',
    heroImage: UniNightsImage,
    link: {
      text: 'View Designs',
      url: 'https://dribbble.com/shots/16869293-Flyer-Design-Series-UNI-Nights'
    },
    colors: {
      cover: '#963981',
      primary: '#963981'
    }
  },
  Waugh: {
    name: 'Waugh',
    category: 'Hackathon',
    badges: ['Hackathon', 'Product Design', 'AI'],
    description:
      'Real-time fact-checking tool that analyzes debate responses for clarity, exaggeration, and historical accuracy.',
    heroImage: SunbeltImage, // Placeholder - can be replaced with actual image later
    link: {
      text: 'View Presentation',
      url: 'https://www.figma.com/deck/VkrMf6Xigfy1sdMCJmcWOR/WAUGH-PRESENTATION---PORTFOLIO'
    },
    colors: {
      cover: '#6366F1',
      primary: '#6366F1'
    }
  },
  TLDR: {
    name: 'TL;DR',
    category: 'Hackathon',
    badges: ['Hackathon', 'AI', 'Legal Tech'],
    description:
      'An AI-powered tool that translates dense legal terms and agreements into clear, concise summaries, helping users quickly understand their rights and obligations.',
    heroImage: SunbeltImage, // Placeholder - can be replaced with actual image later
    link: {
      text: 'View Presentation',
      url: 'https://docs.google.com/presentation/d/1qXeKJTsfPWMx_gYd4cbBtRxIbwm7jJqWRpy747TrlWM'
    },
    colors: {
      cover: '#8B5CF6',
      primary: '#8B5CF6'
    }
  },
  GreenAction: {
    name: 'Green Action',
    category: 'Hackathon',
    badges: ['Hackathon', 'Mobile App', 'Civic Tech'],
    description:
      'A mobile app that helps users discover and create conservation petitions based on their location, streamlining advocacy efforts with integrated e-signatures.',
    heroImage: SunbeltImage, // Placeholder - can be replaced with actual image later
    link: {
      text: 'View Presentation',
      url: 'https://docs.google.com/presentation/d/13ZXuHPRwbLdtYRgQjegQEoZxVz2YYASPrVZCrwM29x4'
    },
    colors: {
      cover: '#10B981',
      primary: '#10B981'
    }
  },
  Cheevo: {
    name: 'Cheevo',
    category: 'Hackathon',
    badges: ['Hackathon', 'Blockchain', 'Enterprise'],
    description:
      'A blockchain-powered system for verifying task completion in enterprise workflows, ensuring transparency, accountability, and tamper-proof audit trails.',
    heroImage: SunbeltImage, // Placeholder - can be replaced with actual image later
    link: {
      text: 'View Presentation',
      url: 'https://docs.google.com/presentation/d/1hrNCgi0HB03YyJZnud2S_8XVQeN1PizSrVZ5yPawcY0'
    },
    colors: {
      cover: '#F59E0B',
      primary: '#F59E0B'
    }
  },
  GoldenRecordRemix: {
    name: 'Golden Record Remix',
    category: 'Hackathon',
    badges: ['Hackathon', 'NASA', 'First Place'],
    description:
      'Won first place in a Golden Record redesign using Rule 110 Cellular Automata to teach extraterrestrials computation, logic, and human behavior.',
    heroImage: SunbeltImage, // Placeholder - can be replaced with actual image later
    link: {
      text: 'View Presentation',
      url: 'https://docs.google.com/presentation/d/1G4znJ9oEA8eAnprcVIGX4FeNw8zVAtnxMi_wkV0Odk4'
    },
    colors: {
      cover: '#EC4899',
      primary: '#EC4899'
    }
  }
}
