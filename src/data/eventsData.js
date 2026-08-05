/**
 * EVENTS DATA TEMPLATE & CONFIGURATION
 * 
 * To add a new event:
 * 1. Add a new object to the `events` array below.
 * 2. Set the properties as follows:
 *    - id: A unique number
 *    - title: The name of the event
 *    - date: Date string in 'YYYY-MM-DD' format
 *    - category: Either 'upcoming' or 'past'
 *    - description: A short description/summary of the event
 *    - registerLink: Link to register form (only for upcoming, set to null/empty string if none)
 *    - slidesLink: Link to presentation/slides (usually for past, set to null if none)
 *    - problemStatementsLink: Link to contests/GitHub/problem statements (set to null if none)
 * 
 * Example template:
 * {
 *   id: 9,
 *   title: 'New Event Name',
 *   date: '2026-10-01',
 *   category: 'upcoming', // Change to 'past' when event is over
 *   description: 'A brief description of what the event is about.',
 *   registerLink: 'https://forms.gle/...',
 *   slidesLink: null,
 *   problemStatementsLink: null,
 * }
 */

export const events = [
  // --- UPCOMING EVENTS PLACEHOLDER ---
  // To show an upcoming event, uncomment the item below or add a new one with category: 'upcoming'
  /*
  {
    id: 100,
    title: 'Upcoming Session Name',
    date: '2026-09-01',
    category: 'upcoming',
    description: 'Detailed description of the upcoming session.',
    registerLink: 'https://forms.gle/placeholder',
    slidesLink: null,
    problemStatementsLink: null,
  },
  */

  // --- PAST EVENTS ---
  {
    id: 1,
    title: 'Deadlock',
    date: '2026-02-15',
    category: 'past',
    description: 'An intense algorithmic coding contest featuring mind-bending optimization problems and custom-crafted puzzles.',
    registerLink: null,
    slidesLink: '#',
    problemStatementsLink: '#',
  },
  {
    id: 2,
    title: 'BitShift 2026',
    date: '2026-01-20',
    category: 'past',
    description: 'The flagship hackathon of Programming Club IITM. Teams worked for 48 hours to build creative web, mobile, and system-level applications.',
    registerLink: null,
    slidesLink: null,
    problemStatementsLink: '#',
  },
  {
    id: 3,
    title: 'Codearena',
    date: '2025-11-10',
    category: 'past',
    description: 'A fast-paced coding arena challenge testing algorithmic speed, correctness, and debugging capabilities under a strict time limit.',
    registerLink: null,
    slidesLink: '#',
    problemStatementsLink: '#',
  },
  {
    id: 4,
    title: 'Open Source Session (OSS 1)',
    date: '2025-10-05',
    category: 'past',
    description: 'Introductory hands-on workshop guiding students on git commands, GitHub workflows, pull requests, and making contributions to open-source software.',
    registerLink: null,
    slidesLink: '#',
    problemStatementsLink: null,
  },
  {
    id: 5,
    title: 'Software Development Session 2 (SDS 2)',
    date: '2025-08-28',
    category: 'past',
    description: 'Intermediate session on software architectures, API design principles, and building scalable full-stack web applications.',
    registerLink: null,
    slidesLink: '#',
    problemStatementsLink: '#',
  },
  {
    id: 6,
    title: 'Competitive Programming Session 3 (CPS 3)',
    date: '2025-04-12',
    category: 'past',
    description: 'Advanced session on Dynamic Programming, Segment Trees, and solving hard-level optimization problems in competitive programming contests.',
    registerLink: null,
    slidesLink: '#',
    problemStatementsLink: '#',
  },
  {
    id: 7,
    title: 'Competitive Programming Session 2 (CPS 2)',
    date: '2025-03-05',
    category: 'past',
    description: 'Focusing on essential algorithms: binary search applications, graph traversals (BFS/DFS), and time complexity analysis.',
    registerLink: null,
    slidesLink: '#',
    problemStatementsLink: '#',
  },
  {
    id: 8,
    title: 'Intro to Programming (PC 1010 & PC 2020)',
    date: '2025-01-18',
    category: 'past',
    description: 'Our starter series designed for absolute beginners, teaching basic syntax, problem-solving flowcharts, and fundamental programming constructs using Python and C++.',
    registerLink: null,
    slidesLink: '#',
    problemStatementsLink: null,
  }
];
