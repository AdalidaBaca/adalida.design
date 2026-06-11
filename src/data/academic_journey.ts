export type AcademicEntryType = 'pdf' | 'portfolio' | 'external'

export type AcademicSection = 'philosophy' | 'english' | 'intersection'

export type IntersectionGroup = 'course' | 'work' | 'competition' | 'scholarship'

export interface IntersectionGroupConfig {
  id: IntersectionGroup
  title: string
  order: number
}

export const INTERSECTION_GROUPS: IntersectionGroupConfig[] = [
  { id: 'course', title: 'Academic Courses', order: 1 },
  { id: 'work', title: 'Work', order: 2 },
  { id: 'competition', title: 'Competitions', order: 3 },
  { id: 'scholarship', title: 'Scholarships', order: 4 }
]

export interface AcademicSectionConfig {
  id: AcademicSection
  title: string
  subtitle?: string
  order: number
}

export interface AcademicEntry {
  id: string
  section: AcademicSection
  featured: boolean
  year: number
  term?: string
  /** Paper title shown on the academic card */
  title: string
  /** Course subject, e.g. Mathematical Logic or Philosophy of Mind */
  classTopic: string
  /** Course code badge, e.g. Philosophy 415 or English 240 */
  courseBadge?: string
  /** Optional one-line description on academic cards */
  description?: string
  documentTitle?: string
  hook: string
  journeyLine?: string
  institution?: string
  intertwineTag?: string
  type: AcademicEntryType
  pdfPath?: string
  previewImage?: string
  /** Uniform topic badge for About preview carousel */
  previewBadge?: string
  link?: string
  /** CTA on academic cards, e.g. View slides or Watch video */
  linkLabel?: string
  order: number
  /** When false, entry is kept for About previews but hidden on /academic */
  showOnAcademicPage?: boolean
}

export const ACADEMIC_SECTIONS: AcademicSectionConfig[] = [
  {
    id: 'philosophy',
    title: 'Philosophy',
    order: 1
  },
  {
    id: 'english',
    title: 'English',
    subtitle: 'Specialization focus on Technical and Professional Communication.',
    order: 2
  },
  {
    id: 'intersection',
    title: 'Intersection',
    order: 3
  }
]

export const ACADEMIC_ENTRIES: AcademicEntry[] = [
  {
    id: 'legal-processing-fluency',
    section: 'english',
    featured: true,
    year: 2018,
    term: 'Fall 2018',
    title: 'Legal Processing Fluency',
    classTopic: 'Traditional Grammar',
    courseBadge: 'English 240',
    documentTitle: 'Legal Processing Fluency',
    hook:
      'Grammar-tree analysis of legal writing in Nissan v. Nissan Computer — why complexity blocks lay readers, and how predicate logic could strip sentences to what actually matters.',
    institution: 'English 240 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/legal-processing-fluency.pdf',
    previewImage: 'legal-processing-fluency.png',
    previewBadge: 'Traditional Grammar',
    order: 1
  },
  {
    id: 'rolling-the-die',
    section: 'english',
    featured: false,
    year: 2019,
    term: 'Spring 2019',
    title: 'Rolling the Die',
    classTopic: 'Analytical Literary Analysis',
    courseBadge: 'English 250',
    documentTitle: 'Rolling the Dice',
    hook: 'Casinos as modern Aristotelian tragedy — hamartia, pathos, and purification at the dice table.',
    institution: 'English 250 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/rolling-the-die.pdf',
    order: 18
  },
  {
    id: 'binary-opposition-essay',
    section: 'english',
    featured: false,
    year: 2019,
    term: 'Spring 2019',
    title: 'Binary Opposition Essay',
    classTopic: 'Analytical Literary Analysis',
    courseBadge: 'English 250',
    documentTitle: 'Presence and Absence',
    hook: 'Binary oppositions from Saussure to Lévi-Strauss — sun and moon, light and dark, presence and absence.',
    institution: 'English 250 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/binary-opposition-essay.pdf',
    previewImage: 'binary-opposition-essay.png',
    order: 19
  },
  {
    id: 'binary-opposition-presentation',
    section: 'english',
    featured: false,
    year: 2019,
    title: 'Binary Opposition Presentation',
    classTopic: 'Analytical Literary Analysis',
    courseBadge: 'English 250',
    hook: 'Presentation on binary oppositions in literary analysis.',
    institution: 'English 250 · University of New Mexico',
    type: 'external',
    link: 'https://docs.google.com/presentation/d/1mHcitkm5K0brQp70bLP6oLURcSLW5Qh6gwYHyMF9Ux8/edit',
    linkLabel: 'View slides',
    order: 20
  },
  {
    id: 'the-yellow-wallpaper-presentation',
    section: 'english',
    featured: false,
    year: 2019,
    title: 'The Yellow Wallpaper Presentation',
    classTopic: 'Analytical Literary Analysis',
    courseBadge: 'English 250',
    hook: 'Presentation on Charlotte Perkins Gilman\'s The Yellow Wallpaper.',
    institution: 'English 250 · University of New Mexico',
    type: 'external',
    link: 'https://docs.google.com/presentation/d/11vQogzjQnCZCWv1nGxsS83uMkl5ypcRW20C7Xn7DiSc/edit',
    linkLabel: 'View slides',
    order: 21
  },
  {
    id: 'website-submission-assignments',
    section: 'english',
    featured: false,
    year: 2019,
    title: 'Website Submission of Assignments',
    classTopic: 'Advanced Expository Writing',
    courseBadge: 'English 320',
    hook: 'Online portfolio of advanced expository writing assignments.',
    institution: 'English 320 · University of New Mexico',
    type: 'external',
    link: 'https://adeey15.wixsite.com/mysite',
    linkLabel: 'View website',
    order: 30
  },
  {
    id: 'identity-access-management',
    section: 'english',
    featured: false,
    year: 2019,
    title: 'Identity Access Management Presentation',
    classTopic: 'Editing',
    courseBadge: 'English 417',
    hook: 'Presentation on identity access management for an editing course project.',
    institution: 'English 417 · University of New Mexico',
    type: 'external',
    link: 'https://docs.google.com/presentation/d/1S39swT16zpDcl1zMSqBZ4RVKB4_P55d4i-jZtcq3YsY/edit',
    linkLabel: 'View slides',
    order: 40
  },
  {
    id: 'final-memo',
    section: 'english',
    featured: false,
    year: 2020,
    term: 'Spring 2020',
    title: 'Final Memo',
    classTopic: 'Visual Rhetoric',
    courseBadge: 'English 419',
    documentTitle: 'UNM Enrollment Data — Visually Conceptualized',
    hook: 'Team memo visualizing UNM 2019 enrollment findings in Tableau across four chart types.',
    institution: 'English 419 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/final-memo.pdf',
    order: 49
  },
  {
    id: 'lobo-gardens-presentation',
    section: 'english',
    featured: false,
    year: 2019,
    title: 'Lobo Gardens — Brochure Mockup Presentation',
    classTopic: 'Visual Rhetoric',
    courseBadge: 'English 419',
    hook: 'Brochure mockup presentation for Lobo Gardens in visual rhetoric.',
    institution: 'English 419 · University of New Mexico',
    type: 'external',
    link: 'https://docs.google.com/presentation/d/1BtyMGPYCjz_yJWB-rnwHbXyqZ07xjMaNsgHHJEUhDic/edit',
    linkLabel: 'View slides',
    order: 50
  },
  {
    id: 'unm-data-visualization',
    section: 'english',
    featured: false,
    year: 2019,
    title: 'UNM Data Visualization',
    classTopic: 'Visual Rhetoric',
    courseBadge: 'English 419',
    hook: 'Visual rhetoric presentation on data visualization at UNM.',
    institution: 'English 419 · University of New Mexico',
    type: 'external',
    link: 'https://docs.google.com/presentation/d/11pCJuYLuasVtMEi7Uu08j_v4kCArg--p9-lnrYWOGSg/edit',
    linkLabel: 'View slides',
    order: 51
  },
  {
    id: 'visual-communication-various-mediums',
    section: 'english',
    featured: false,
    year: 2019,
    term: '2019–2020',
    title: 'Visual Communication in Various Mediums',
    classTopic: 'Visual Rhetoric',
    courseBadge: 'English 419',
    hook: 'Virtual scrapbook analyzing visual communication across mediums — San Francisco as the primary site.',
    institution: 'English 419 · University of New Mexico',
    type: 'external',
    link: 'https://adeey15.wixsite.com/adalidascrapbook',
    linkLabel: 'View website',
    order: 52
  },
  {
    id: 'website-resume',
    section: 'english',
    featured: false,
    year: 2019,
    title: 'Website Resume',
    classTopic: 'Visual Rhetoric',
    courseBadge: 'English 419',
    hook: 'Web resume built as a visual rhetoric project.',
    institution: 'English 419 · University of New Mexico',
    type: 'external',
    link: 'https://adalidabaca.wixsite.com/resume',
    linkLabel: 'View website',
    order: 53
  },
  {
    id: 'unm-ecoliteracy-website',
    section: 'english',
    featured: false,
    year: 2019,
    term: '2019–2020',
    title: 'ECOLiteracy at UNM',
    classTopic: 'Independent Study',
    courseBadge: 'English 498',
    hook: 'Independent study project — document design website for ecoliteracy classes, clubs, and events at UNM.',
    institution: 'English 498: Independent Study · University of New Mexico',
    type: 'external',
    link: 'https://unmecoliteracy.wixsite.com/unmecoliteracy',
    linkLabel: 'View website',
    order: 60
  },
  {
    id: 'project-echo-portfolio',
    section: 'english',
    featured: false,
    year: 2020,
    term: '2020',
    title: 'Portfolio of Technical Writing Samples',
    classTopic: 'Internship',
    courseBadge: 'English 499',
    documentTitle: 'Project ECHO Internship Portfolio',
    hook:
      'Technical writing samples from the Project ECHO internship — SOPs, user guides, and system documentation.',
    institution: 'English 499 · Project ECHO internship',
    type: 'portfolio',
    link: '/internship-portfolio',
    linkLabel: 'View portfolio',
    order: 64
  },
  {
    id: 'dees-intersectionality-solution',
    section: 'english',
    featured: false,
    year: 2020,
    term: '2020',
    title: "Dee's Intersectionality Solution",
    classTopic: 'Internship',
    courseBadge: 'English 499',
    hook: 'UpSet visualization tool for intersectional health data at Project ECHO.',
    institution: 'English 499 · Project ECHO internship',
    type: 'external',
    link: 'https://echo.unm.edu/intersectionality-visualization/index.html',
    linkLabel: 'View project',
    order: 63
  },
  {
    id: 'visualizing-intersectionality-slides',
    section: 'english',
    featured: false,
    year: 2020,
    term: '2020',
    title: 'Visualizing Intersectionality',
    classTopic: 'Internship',
    courseBadge: 'English 499',
    hook: 'Slide deck on visualizing intersectionality with UpSet graphs for Project ECHO.',
    institution: 'English 499 · Project ECHO internship',
    type: 'external',
    link: 'https://docs.google.com/presentation/d/1odImUXjXNXzVbwoJRMWu-4H1sa2Z0aWUK1BtPXQk-4s/edit',
    linkLabel: 'View slides',
    order: 62
  },
  {
    id: 'dees-intersectionality-solution-summary',
    section: 'english',
    featured: false,
    year: 2020,
    term: 'Spring 2020',
    title: "Dee's Intersectionality Solution Summary",
    classTopic: 'Internship',
    courseBadge: 'English 499',
    documentTitle: "Dee's Intersectionality — Project ECHO Best Data Practices",
    hook: 'Case summary prepared for Dee on intersectionality and best data practices at Project ECHO.',
    institution: 'English 499 · Project ECHO internship',
    type: 'pdf',
    pdfPath: 'academic/dees-intersectionality-solution-summary.pdf',
    order: 61
  },
  {
    id: 'resume-funko-pop',
    section: 'english',
    featured: false,
    year: 2018,
    title: 'Resume',
    classTopic: 'Technical Writing',
    courseBadge: 'English 219',
    hook: 'Non-traditional resume design — objective: design a resume outside the standard format.',
    institution: 'English 219 · University of New Mexico',
    type: 'external',
    link: 'https://dribbble.com/shots/19652089-Resume-Concept-FUNKO-POP',
    linkLabel: 'View project',
    order: 70
  },
  {
    id: 'mwa-2-fam',
    section: 'english',
    featured: false,
    year: 2018,
    title: 'MWA 2 FAM',
    classTopic: 'Technical Writing',
    courseBadge: 'English 219',
    hook: 'Marketing video for a nonprofit — objective: create a marketing video for a nonprofit organization.',
    institution: 'English 219 · University of New Mexico',
    type: 'external',
    link: 'https://www.youtube.com/watch?v=MqarZ7ChabE',
    linkLabel: 'Watch video',
    order: 71
  },
  {
    id: 'how-to-fix-posture',
    section: 'english',
    featured: false,
    year: 2018,
    title: 'How to Fix Posture',
    classTopic: 'Technical Writing',
    courseBadge: 'English 219',
    hook: 'Instructional video demonstrating a skill — objective: create an instructional how-to video.',
    institution: 'English 219 · University of New Mexico',
    type: 'external',
    link: 'https://www.youtube.com/watch?v=381QnST5zU4',
    linkLabel: 'Watch video',
    order: 72
  },
  {
    id: 'modern-philosophy-midterm',
    section: 'philosophy',
    featured: false,
    year: 2019,
    term: 'Spring 2019',
    title: 'An Independent Problem',
    classTopic: 'Modern Philosophy',
    courseBadge: 'Philosophy 202',
    documentTitle: 'Philosophy 202: Midterm Paper',
    hook: 'Descartes, dreaming, and why some problems sit outside any system of logic.',
    institution: 'Philosophy 202 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/modern-philosophy-midterm.pdf',
    order: 10
  },
  {
    id: 'john-stuart-mill',
    section: 'philosophy',
    featured: false,
    year: 2019,
    term: 'Spring 2019',
    title: 'John Stuart Mill',
    classTopic: 'Ethical Theory',
    courseBadge: 'Philosophy 358',
    documentTitle: 'Ethical Theory: John Stuart Mill',
    hook: 'Mill on whether we can know the nature of the two sexes under social constraint.',
    institution: 'Philosophy 358 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/john-stuart-mill.pdf',
    order: 11
  },
  {
    id: 'ethical-theory-short-assignment',
    section: 'philosophy',
    featured: false,
    year: 2019,
    term: 'Spring 2019',
    title: 'Short Assignment',
    classTopic: 'Ethical Theory',
    courseBadge: 'Philosophy 358',
    documentTitle: 'Ethical Theory: Short Assignment',
    hook: 'The Grand Inquisitor, human freedom, and a cynical read of what people can bear.',
    institution: 'Philosophy 358 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/ethical-theory-short-assignment.pdf',
    order: 12
  },
  {
    id: 'phil-415-question-set-1',
    section: 'philosophy',
    featured: true,
    year: 2019,
    term: 'Fall 2019',
    title: 'Question Set #1',
    classTopic: 'Mathematical Logic',
    courseBadge: 'Philosophy 415',
    documentTitle: 'Philosophy 415: Question Set #1',
    hook:
      "Frege's logic, concept–object structure, and why Aristotle's system cannot handle relations and quantifiers.",
    institution: 'Philosophy 415 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/phil-415-question-set-1.pdf',
    previewImage: 'phil-415-question-set-1.png',
    order: 20
  },
  {
    id: 'phil-415-question-set-2',
    section: 'philosophy',
    featured: false,
    year: 2019,
    term: 'Fall 2019',
    title: 'Question Set #2',
    classTopic: 'Mathematical Logic',
    courseBadge: 'Philosophy 415',
    documentTitle: 'Philosophy 415: Question Set #2',
    hook: 'Formal systems, notation, and building arguments that return a single truth value.',
    institution: 'Philosophy 415 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/phil-415-question-set-2.pdf',
    order: 21
  },
  {
    id: 'phil-415-question-set-3',
    section: 'philosophy',
    featured: false,
    year: 2019,
    term: 'Fall 2019',
    title: 'Question Set #3',
    classTopic: 'Mathematical Logic',
    courseBadge: 'Philosophy 415',
    documentTitle: 'Philosophy 415: Question Set #3',
    hook: 'Problem sets on the history and philosophy of mathematics.',
    institution: 'Philosophy 415 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/phil-415-question-set-3.pdf',
    order: 22
  },
  {
    id: 'phil-415-final-exam',
    section: 'philosophy',
    featured: false,
    year: 2019,
    term: 'Fall 2019',
    title: 'Final Exam',
    classTopic: 'Mathematical Logic',
    courseBadge: 'Philosophy 415',
    documentTitle: 'Philosophy 415: Final Exam',
    hook: "Russell's paradox, Gödel, and the limits of what formal systems can prove.",
    institution: 'Philosophy 415 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/phil-415-final-exam.pdf',
    previewImage: 'phil-415-final-exam.png',
    previewBadge: 'Mathematical Logic',
    order: 23
  },
  {
    id: 'metaphysics-truths-of-the-universe',
    section: 'philosophy',
    featured: false,
    year: 2020,
    term: 'Fall 2020',
    title: 'The Truths of the Universe',
    classTopic: 'Metaphysics',
    courseBadge: 'Philosophy 354',
    documentTitle: 'Metaphysics: The Truths of the Universe',
    hook: 'Metaphysical argument on what counts as truth at the scale of the universe.',
    institution: 'Philosophy 354 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/metaphysics-truths-of-the-universe.pdf',
    order: 30
  },
  {
    id: 'phil-354-final-exam',
    section: 'philosophy',
    featured: false,
    year: 2020,
    term: 'Fall 2020',
    title: 'Final Exam',
    classTopic: 'Metaphysics',
    courseBadge: 'Philosophy 354',
    documentTitle: 'Philosophy 354: Final Exam',
    hook: 'Substance, predication, and core metaphysical definitions from Aristotle forward.',
    institution: 'Philosophy 354 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/phil-354-final-exam.pdf',
    order: 31
  },
  {
    id: 'a-rabbit-hole-essay',
    section: 'philosophy',
    featured: false,
    year: 2020,
    term: 'Spring 2020',
    title: 'A Rabbit Hole',
    classTopic: 'Philosophy of Law and Morals',
    courseBadge: 'Philosophy 381',
    documentTitle: 'Philosophy of Law and Morals: A Rabbit Hole',
    hook: 'Law, morals, and the rabbit holes that open when legal reasoning meets ethical theory.',
    institution: 'Philosophy 381 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/a-rabbit-hole-essay.pdf',
    order: 40
  },
  {
    id: 'phil-381-midterm-exam',
    section: 'philosophy',
    featured: false,
    year: 2020,
    term: 'Spring 2020',
    title: 'Midterm Exam',
    classTopic: 'Philosophy of Law and Morals',
    courseBadge: 'Philosophy 381',
    documentTitle: 'Philosophy 381: Midterm Exam',
    hook: 'Midterm work in philosophy of law and morals.',
    institution: 'Philosophy 381 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/phil-381-midterm-exam.pdf',
    order: 41
  },
  {
    id: 'wittgenstein-tractatus',
    section: 'philosophy',
    featured: false,
    year: 2020,
    term: 'Fall 2020',
    title: 'Tractatus',
    classTopic: 'Wittgenstein',
    courseBadge: 'Philosophy 422',
    documentTitle: 'Philosophy 422: Tractatus',
    hook: 'Wittgenstein\'s Tractatus through Paul Livingston\'s reading.',
    institution: 'Philosophy 422 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/wittgenstein-tractatus.pdf',
    order: 50
  },
  {
    id: 'sense-and-possibility-reading-response',
    section: 'philosophy',
    featured: false,
    year: 2020,
    term: 'Spring 2020',
    title: 'Weekly Reading Response',
    classTopic: 'Sense and Possibility',
    courseBadge: 'Philosophy 454',
    documentTitle: 'Sense and Possibility: Reading Response — February 27',
    hook: 'Deleuze, denotation, and the paradox that language opens between sense and reference.',
    institution: 'Philosophy 454 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/sense-and-possibility-reading-response.pdf',
    order: 51
  },
  {
    id: 'philosophy-of-mind-building-block',
    section: 'philosophy',
    featured: false,
    year: 2020,
    term: 'Spring 2020',
    title: 'A Building Block',
    classTopic: 'Philosophy of Mind',
    courseBadge: 'Philosophy 455',
    documentTitle: 'Philosophy of Mind: A Building Block',
    hook:
      "A critique of Armstrong's type identity theory — when a model almost solves the problem, but circular reasoning around experience breaks it.",
    institution: 'Philosophy 455 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/philosophy-of-mind-building-block.pdf',
    previewImage: 'philosophy-of-mind-building-block.png',
    previewBadge: 'Philosophy of Mind',
    order: 52
  },
  {
    id: 'a-conversion-to-consciousness',
    section: 'philosophy',
    featured: false,
    year: 2020,
    term: 'Spring 2020',
    title: 'A Conversion to Consciousness',
    classTopic: 'Philosophy and Literature',
    courseBadge: 'Philosophy 480',
    documentTitle: 'Philosophy 480: A Conversion to Consciousness',
    hook: 'Philosophy and literature — consciousness, conversion, and narrative form.',
    institution: 'Philosophy 480 · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/a-conversion-to-consciousness.pdf',
    order: 53
  },
  {
    id: 'school-segregation',
    section: 'intersection',
    featured: false,
    year: 2017,
    term: 'Spring 2017',
    title: 'Midterm Essay | The Key',
    classTopic: 'Sociology',
    courseBadge: '101: Sociology',
    hook: 'How school segregation, budget cuts, and teacher turnover shape education outcomes in New Mexico.',
    institution: '101: Sociology · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/school-segregation.pdf',
    order: 51
  },
  {
    id: 'constitutional-law-final',
    section: 'intersection',
    featured: false,
    year: 2019,
    title: 'Final Exam Essay',
    classTopic: 'Constitutional Law',
    courseBadge: '316: Constitutional Law',
    hook: 'Constitutional analysis of an education-funding bill — entanglement, due process, and legislative vagueness.',
    institution: '316: Constitutional Law · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/constitutional-law-final.pdf',
    order: 50
  },
  {
    id: 'masquerade-ball-proposal',
    section: 'intersection',
    featured: false,
    year: 2019,
    term: 'Fall 2019',
    title: 'Fall Program Proposal — Masquerade Ball',
    classTopic: 'Program Coordinator · UNM Student Union Building',
    courseBadge: 'Work',
    hook: 'Event proposal for a masquerade ball in the SUB ballroom — budget, timeline, and catering.',
    institution: 'University of New Mexico Student Union Building',
    type: 'pdf',
    pdfPath: 'academic/program-proposal-masquerade-ball.pdf',
    order: 52
  },
  {
    id: 'spring-event-ideas',
    section: 'intersection',
    featured: false,
    year: 2019,
    term: 'Fall 2019',
    title: 'Spring Event Ideas',
    classTopic: 'Program Coordinator · UNM Student Union Building',
    courseBadge: 'Work',
    hook: 'Spring 2020 event proposals prepared for SUB Student Programming.',
    institution: 'University of New Mexico Student Union Building',
    type: 'pdf',
    pdfPath: 'academic/spring-event-ideas.pdf',
    order: 53
  },
  {
    id: 'nasa-hackathon-slides',
    section: 'intersection',
    featured: false,
    year: 2018,
    term: 'Fall 2018',
    title: 'Presentation',
    classTopic: '1st Place — ABQ NASA Space Apps Challenge',
    courseBadge: 'Competition',
    hook: 'Presentation from the Albuquerque local NASA Space Apps Challenge.',
    type: 'external',
    link: 'https://docs.google.com/presentation/d/1G4znJ9oEA8eAnprcVIGX4FeNw8zVAtnxMi_wkV0Odk4/edit',
    linkLabel: 'View slides',
    order: 54
  },
  {
    id: 'nasa-hackathon-video',
    section: 'intersection',
    featured: false,
    year: 2018,
    term: 'Fall 2018',
    title: 'Video Demonstration',
    classTopic: '1st Place — ABQ NASA Space Apps Challenge',
    courseBadge: 'Competition',
    hook: 'Video demonstration from the Albuquerque local NASA Space Apps Challenge.',
    type: 'external',
    link: 'https://www.youtube.com/watch?v=D0pfaZoRaaM',
    linkLabel: 'Watch video',
    order: 55
  },
  {
    id: 'melada-scholarship-letter',
    section: 'intersection',
    featured: false,
    year: 2020,
    term: 'Spring 2020',
    title: 'Adalida Baca Scholarship Submission',
    classTopic: 'Co-Recipient · Dale and Ivan Melada Endowed Scholarship',
    courseBadge: 'Scholarship',
    hook: 'Scholarship submission for the Dale and Ivan Melada Endowed Scholarship — English–Philosophy with a technical communication focus.',
    institution: 'English Department · University of New Mexico',
    type: 'pdf',
    pdfPath: 'academic/melada-scholarship-letter.pdf',
    order: 56
  }
]

const isOnAcademicPage = (entry: AcademicEntry): boolean => entry.showOnAcademicPage !== false

export const ACADEMIC_PAGE_SECTIONS = ACADEMIC_SECTIONS.filter(section =>
  ACADEMIC_ENTRIES.some(entry => entry.section === section.id && isOnAcademicPage(entry))
)

export const FEATURED_ACADEMIC_ENTRIES = ACADEMIC_ENTRIES.filter(entry => entry.featured)

const academicCourseNumberFromBadge = (badge: string): number => {
  const colonMatch = badge.match(/^(\d+):/)
  if (colonMatch?.[1] !== undefined) {
    return Number(colonMatch[1])
  }
  const nums = badge.match(/\d+/g)
  return nums !== null ? Number(nums[nums.length - 1]) : 0
}

const academicCourseNumber = (entry: AcademicEntry): number =>
  entry.courseBadge !== undefined ? academicCourseNumberFromBadge(entry.courseBadge) : 0

const compareAcademicEntriesDescending = (a: AcademicEntry, b: AcademicEntry): number => {
  const courseDiff = academicCourseNumber(b) - academicCourseNumber(a)
  if (courseDiff !== 0) {
    return courseDiff
  }
  return b.order - a.order
}

export const academicEntriesBySection = (section: AcademicSection): AcademicEntry[] =>
  ACADEMIC_ENTRIES.filter(entry => entry.section === section && isOnAcademicPage(entry)).sort(
    compareAcademicEntriesDescending
  )

export const academicCourseBadgesInSection = (section: AcademicSection): string[] => {
  const badges = new Set<string>()
  for (const entry of academicEntriesBySection(section)) {
    if (entry.courseBadge !== undefined) {
      badges.add(entry.courseBadge)
    }
  }
  return [...badges].sort(
    (a, b) => academicCourseNumberFromBadge(b) - academicCourseNumberFromBadge(a)
  )
}

export const intersectionGroupForEntry = (entry: AcademicEntry): IntersectionGroup => {
  switch (entry.courseBadge) {
    case 'Work':
      return 'work'
    case 'Competition':
      return 'competition'
    case 'Scholarship':
      return 'scholarship'
    default:
      return 'course'
  }
}

const sortIntersectionGroupEntries = (
  groupId: IntersectionGroup,
  entries: AcademicEntry[]
): AcademicEntry[] => {
  if (groupId === 'course') {
    return [...entries].sort(compareAcademicEntriesDescending)
  }
  return [...entries].sort((a, b) => b.order - a.order)
}

export const intersectionGroupsWithEntries = (
  entries: AcademicEntry[]
): Array<IntersectionGroupConfig & { entries: AcademicEntry[] }> =>
  INTERSECTION_GROUPS.map(group => ({
    ...group,
    entries: sortIntersectionGroupEntries(
      group.id,
      entries.filter(entry => intersectionGroupForEntry(entry) === group.id)
    )
  })).filter(group => group.entries.length > 0)

/** About-page preview carousel: Phil 415 final, theory of mind, binary opposition essay (English). */
export const ABOUT_ACADEMIC_PREVIEW_IDS = [
  'phil-415-final-exam',
  'philosophy-of-mind-building-block',
  'binary-opposition-essay'
] as const

export const ABOUT_ACADEMIC_PREVIEW_ENTRIES = ABOUT_ACADEMIC_PREVIEW_IDS.map(id => {
  const entry = ACADEMIC_ENTRIES.find(e => e.id === id)
  if (entry === undefined) {
    throw new Error(`Missing academic entry for preview: ${id}`)
  }
  return entry
})

export const academicEntryUrl = (
  entry: AcademicEntry,
  resolvePdf?: (pdfPath: string) => string | undefined
): string | undefined => {
  if (entry.type === 'pdf' && entry.pdfPath !== undefined) {
    return resolvePdf?.(entry.pdfPath)
  }
  return entry.link
}

export const academicPreviewBadge = (entry: AcademicEntry): string =>
  entry.previewBadge ?? entry.classTopic

export const academicPreviewImage = (entry: AcademicEntry): string | undefined => {
  if (entry.previewImage !== undefined) {
    return `/images/academic/${entry.previewImage}`
  }
  if (entry.pdfPath !== undefined) {
    const slug = entry.pdfPath.replace(/^academic\//, '').replace(/\.pdf$/, '')
    return `/images/academic/${slug}.png`
  }
  return undefined
}

export const academicPageAnchor = (id: string): string => `/academic#${id}`
