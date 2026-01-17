export interface Hackathon {
  name: string
  location: string
  year: string
  sponsor: string
  description: string
  link: string
}

const Hackathons: Hackathon[] = [
  {
    name: 'Waugh',
    location: 'SF, CA',
    year: '2025',
    sponsor: 'Weights & Biases',
    description:
      'Real-time fact-checking tool that analyzes debate responses for clarity, exaggeration, and historical accuracy.',
    link: 'https://www.figma.com/deck/VkrMf6Xigfy1sdMCJmcWOR/WAUGH-PRESENTATION---PORTFOLIO'
  },
  {
    name: 'TL;DR',
    location: 'SF, CA',
    year: '2023',
    sponsor: 'Digital Garage',
    description:
      'An AI-powered tool that translates dense legal terms and agreements into clear, concise summaries, helping users quickly understand their rights and obligations.',
    link: 'https://docs.google.com/presentation/d/1qXeKJTsfPWMx_gYd4cbBtRxIbwm7jJqWRpy747TrlWM'
  },
  {
    name: 'Green Action',
    location: 'SF, CA',
    year: '2019',
    sponsor: 'Docusign',
    description:
      'A mobile app that helps users discover and create conservation petitions based on their location, streamlining advocacy efforts with integrated e-signatures.',
    link: 'https://docs.google.com/presentation/d/13ZXuHPRwbLdtYRgQjegQEoZxVz2YYASPrVZCrwM29x4'
  },
  {
    name: 'Cheevo',
    location: 'SF, CA',
    year: '2018',
    sponsor: 'VMWare',
    description:
      'A blockchain-powered system for verifying task completion in enterprise workflows, ensuring transparency, accountability, and tamper-proof audit trails.',
    link: 'https://docs.google.com/presentation/d/1hrNCgi0HB03YyJZnud2S_8XVQeN1PizSrVZ5yPawcY0'
  },
  {
    name: 'Golden Record Remix',
    location: 'ABQ, NM',
    year: '2018',
    sponsor: 'NASA Space Apps Local',
    description:
      'Won first place in a Golden Record redesign using Rule 110 Cellular Automata to teach extraterrestrials computation, logic, and human behavior.',
    link: 'https://docs.google.com/presentation/d/1G4znJ9oEA8eAnprcVIGX4FeNw8zVAtnxMi_wkV0Odk4'
  }
]

export default Hackathons
