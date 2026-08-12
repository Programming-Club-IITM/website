/**
 * EVENTS DATA — Grouped by Event Series
 *
 * Structure:
 *   eventGroups[] → each group has a name + events[]
 *   Each event has a `slug` used for its internal route: /events/:slug
 *
 * Detail-page fields (all nullable — set null until real content is added):
 *   poster         – path to poster image (e.g., '/events/bitshift-poster.png')
 *   venue          – string (e.g., 'Online' or 'CLT, IIT Madras')
 *   time           – string (e.g., '5:00 PM – 7:30 PM')
 *   details        – long description / markdown text for the detail page
 *   registrationLink – external registration URL
 *   contestLink    – external contest/codeforces URL
 *   ranklistLink   – ranklist URL
 *   slidesLink     – slides/presentation URL
 *
 * TO ADD A NEW EVENT:
 *   1. Find the right group (or create a new one)
 *   2. Add an event object with a unique slug
 *   3. Set category: 'upcoming' for live events, 'past' when done
 */
const base = import.meta.env.BASE_URL;
export const assetPath = (path) => `${base}${path}`;

export const eventGroups = [
  {
    name: 'Intro to Programming',
    events: [
      {
        slug: 'pc-1010-1020',
        title: 'PC 1010 & PC 2020',
        date: '2025-01-18',
        category: 'past',
        description: 'Our starter series designed for absolute beginners, teaching basic syntax, problem-solving flowcharts, and fundamental programming constructs using Python and C++.',
        poster: null,
        venue: null,
        time: null,
        details: null,
        registrationLink: null,
        contestLink: null,
        ranklistLink: null,
        slidesPdf: null,
      },
    ],
  },
  {
    name: 'CPS',
    events: [
      {
        slug: 'cps-2',
        title: 'CPS – 2',
        date: '2025-03-05',
        category: 'past',
        description: 'Focusing on essential algorithms: binary search applications, graph traversals (BFS/DFS), and time complexity analysis.',
        poster: 'events/cps-2/cps2.jpg',
        posters: ['events/cps-2/g1.jpg', 'events/cps-2/g2.jpg','events/cps-2/g3.jpg'],
        venue: null,
        time: null,
        details: null,
        registrationLink: null,
        contestLink: null,
        ranklistLink: null,
        slidesPdf: 'events/cps-2/cps2.pdf',
      },
      {
        slug: 'cps-3',
        title: 'CPS – 3',
        date: '2025-04-12',
        category: 'past',
        description: 'Advanced session on Dynamic Programming, Segment Trees, and solving hard-level optimization problems in competitive programming contests.',
        poster: null,
        venue: null,
        time: '8:45 PM',
        details: 'Covering: Graphs\n• Fundamentals: Nodes, Edges, representation\n• Traversals: Master BFS and DFS from scratch.\n• Shortest Path Algorithms\n\nEver wondered how Google Maps finds the fastest route or how social networks suggest friends? The Programming Club is hosting an introductory session to get you started with one of the most powerful data structures in computer science.',
        registrationLink: null,
        contestLink: null,
        ranklistLink: null,
        slidesPdf: null,
      },
    ],
  },
  {
    name: 'SDS',
    events: [
      {
        slug: 'sds-2',
        title: 'SDS – 2',
        date: '2025-08-28',
        category: 'past',
        description: 'Intermediate session on software architectures, API design principles, and building scalable full-stack web applications.',
        poster: null,
        venue: null,
        time: null,
        details: null,
        registrationLink: null,
        contestLink: null,
        ranklistLink: null,
        slidesPdf: null,
      },
    ],
  },
  {
    name: 'OSS',
    events: [
      {
        slug: 'oss-1',
        title: 'OSS – 1',
        date: '2025-10-05',
        category: 'past',
        description: 'Introductory hands-on workshop guiding students on git commands, GitHub workflows, pull requests, and making contributions to open-source software.',
        poster: null,
        venue: null,
        time: null,
        details: null,
        registrationLink: null,
        contestLink: null,
        ranklistLink: null,
        slidesPdf: null,
      },
    ],
  },
  {
    name: 'Code Arena',
    events: [
      {
        slug: 'codearena',
        title: 'Code Arena',
        date: '2025-11-10',
        category: 'past',
        description: 'A fast-paced coding arena challenge testing algorithmic speed, correctness, and debugging capabilities under a strict time limit.',
        poster: null,
        venue: null,
        time: null,
        details: null,
        registrationLink: null,
        contestLink: null,
        ranklistLink: null,
        slidesPdf: null,
      },
    ],
  },
  {
    name: 'BitShift',
    events: [
      {
        slug: 'bitshift',
        title: 'BitShift 2026',
        date: '2026-01-20',
        category: 'past',
        description: 'The flagship hackathon of Programming Club IITM. An all-India competitive programming contest sponsored by Jane Street.',
        poster: null,
        venue: 'Online',
        time: '5:00 PM – 7:30 PM',
        details: 'The Programming Club at IIT Madras is pleased to invite you to BitShift 2026, an all-India competitive programming contest.\n\nWe are thrilled to share that the contest is sponsored by Jane Street, featuring a prize pool of ₹70,000.\n\nContest Details:\n• Eligibility: All college students in India\n• Participation: Online, in teams of upto 2\n• Date: January 24th, 2026\n• Time: 5:00 PM – 7:30 PM\n\nHow to Participate:\n• Registration link: https://unstop.com/p/bitshift-2026-iit-madras-1619526 (registration is mandatory to be eligible for prizes)\n• View the contest details here: https://codeforces.com/blog/entry/150003\n\nWe look forward to seeing your solutions on the leaderboard!',
        registrationLink: 'https://unstop.com/p/bitshift-2026-iit-madras-1619526',
        contestLink: 'https://codeforces.com/blog/entry/150003',
        ranklistLink: null,
        slidesPdf: null,
      },
    ],
  },
  {
    name: 'DeadLock',
    events: [
      {
        slug: 'deadlock',
        title: 'DeadLock',
        date: '2026-02-15',
        category: 'past',
        description: 'An intense algorithmic coding contest featuring mind-bending optimization problems and custom-crafted puzzles.',
        poster: null,
        venue: null,
        time: null,
        details: null,
        registrationLink: null,
        contestLink: null,
        ranklistLink: null,
        slidesPdf: null,
      },
    ],
  },
];

// ─── Helper: flatten all events for lookups ──────────────────────────
export const getAllEvents = () =>
  eventGroups.flatMap((group) =>
    group.events.map((event) => ({ ...event, groupName: group.name }))
  );

export const getEventBySlug = (slug) =>
  getAllEvents().find((e) => e.slug === slug) || null;
