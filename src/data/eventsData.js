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
        slug: 'PC-1010-1020',
        title: 'PC 1010 & PC 2020',
        date: '2025-08-18',
        category: 'past',
        description: 'Join us for a **comprehensive two-part series** on C++ and Competitive Programming! We will cover everything from the absolute basics of C++ and navigating Codeforces to advanced development concepts like classes and pointers.\n\n*Perfect for beginners looking to dive into competitive programming and master C++ development.*',
        poster: 'events/pc-1010-1020/pc-1010-1020.jpg',
        posters: ['events/pc-1010-1020/g1.jpg', 'events/pc-1010-1020/g2.jpg', 'events/pc-1010-1020/g3.jpg', 'events/pc-1010-1020/g4.jpg', 'events/pc-1010-1020/g5.jpg', 'events/pc-1010-1020/g6.jpg'],
        venue: 'CRC 102',
        time: '7:30 PM',
        details: "### What to expect\nThis two-part event will bridge the gap between basic programming and competitive problem-solving. We will begin with the fundamentals of C++ and the Codeforces platform, before diving deep into object-oriented programming and memory management in C++.\n\n### Prerequisites\n* No prior experience in C++ required, just a willingness to learn!\n* Basic logical and problem-solving skills.\n* A laptop with a working C++ compiler and IDE.\n\n### Syllabus\n1. **C++ & CP Basics:** Introduction to C++ syntax, basic competitive programming paradigms, and getting started on Codeforces.\n2. **Advanced C++ Development:** Deep dive into Object-Oriented Programming (Classes) and memory management (Pointers).",
        registrationLink: null,
        contestLink: null,
        ranklistLink: null,
        teamConducted: null,
        slidesPdf: ['events/pc-1010-1020/PC-1010.pdf','events/pc-1010-1020/PC-1020.pdf'],
      },
    ],
  },
  {
    name: 'CPS',
    events: [
      {
        slug: 'cps-2',
        title: 'CPS - 2',
        date: '2025-09-14',
        category: 'completed',
        // Description is now markdown and sits next to the poster
        description: 'The Programming Club is back to dive into the real weapons of Competitive Programming! It’s time to skip the long ways and make your code much faster – like a pro.\n\n*Perfect for anyone looking to boost their problem-solving, add speed to their code, explore new concepts, or just have some fun!*',
        poster: 'events/cps-2/cps2.jpg',
        posters: ['events/cps-2/g1.jpg', 'events/cps-2/g2.jpg', 'events/cps-2/g3.jpg'],
        venue: 'CS36, CS Block',
        time: '6:00 PM – 8:30 PM',
        // Details is markdown and sits below the action buttons
        details: '### What to expect\nThis session focuses on essential techniques to optimize your code and solve problems more efficiently. We will introduce you to powerful built-in tools and fundamental algorithms that are crucial for any competitive programmer.\n\n### Prerequisites\n* Basic knowledge of C++ syntax and general programming concepts.\n* A laptop with a working IDE.\n\n### Syllabus\n1. **Standard Template Library (STL):** Utilizing built-in data structures and functions.\n2. **Prefix Sum:** Optimizing range queries for faster execution.\n3. **Binary Search:** Efficiently finding elements and solving monotonic functions.',
        registrationLink: null,
        contestLink: null,
        ranklistLink: null,
        problemsetLink: null,
        teamConducted:null,
        slidesPdf: 'events/cps-2/cps2.pdf',
      },
      {
        slug: 'cps-3',
        title: 'CPS - 3',
        date: '2026-04-13',
        category: 'past',
        description: 'Ever wondered how Google Maps finds the fastest route or how social networks suggest friends? The Programming Club is hosting an introductory session to get you started with Graphs, one of the most powerful data structures in computer science!\n\n*Perfect for beginners eager to explore advanced data structures and their real-world applications.*',
        poster: 'events/cps-3/cps-3.jpeg',
        posters: null,
        venue:null ,
        time: '8:45 PM',
        details: '### What to expect\nThis session will unpack the building blocks of Graph Theory. We will explore how to represent complex networks and navigate them efficiently using foundational algorithms.\n\n### Prerequisites\n* Basic understanding of C++ and data structures (like arrays and vectors).\n* A laptop with a working IDE.\n\n### Syllabus\n1. **Fundamentals:** Nodes, edges, and graph representations.\n2. **Traversals:** Master BFS and DFS from scratch.\n3. **Shortest Path Algorithms:** Introduction to finding the most efficient routes.',
        registrationLink: null,
        contestLink: null,
        ranklistLink: null,
        problemsetLink: null,
        teamConducted: null,
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
        date: '2025-09-25',
        category: 'past',
        description: 'Ever saved a file as project_final.cpp, then project_final_v2.cpp, then project_REALLY_final.cpp? There’s a better way! Come learn the magic of Git & GitHub with us at The Programming Club. Think of it as a time machine for your code and the best way to work on team projects.\n\n*Designed for absolute beginners. No prior experience needed!*',
        poster: 'events/sds-2/sds-2.jpg',
        posters: ['events/sds-2/g1.jpg', 'events/sds-2/g2.jpg','events/sds-2/g3.jpg'],
        venue: 'CRC 101',
        time: '6:00 PM',
        details: '### What to expect\nThis session will introduce you to the fundamentals of version control. You will learn how to track changes securely, manage your codebase, and collaborate seamlessly on team projects using Git and GitHub.\n\n### Prerequisites\n* Absolutely none! This is designed for beginners.\n* A laptop to practice the commands and set up your account.\n\n### Syllabus\n1. **Version Control Basics:** Understanding why we track code changes and how it saves time.\n2. **Git Commands:** Essential local commands to stage, commit, and manage your repository.\n3. **GitHub:** Hosting your code, collaborating, and working efficiently in teams.',
        registrationLink: null,
        contestLink: null,
        ranklistLink: null,
        problemsetLink: null,
        teamConducted: null,
        slidesPdf: 'events/sds-2/sds-2.pdf',
      },
    ],
  },
  {
    name: 'OSS',
    events: [
      {
        slug: 'oss-1',
        title: 'OSS – 1',
        date: '2025-09-25',
        category: 'past',
        description: 'The Programming Club is thrilled to announce its inaugural session: Open Source Session – 1 (OSS-1), marking the beginning of our journey to Google Summer of Code (GSoC) mentorship for next summer! We’ll also prep you for Hacktoberfest, one of the largest open-source contributor events!\n\n*Perfect for anyone looking to dive into open source, build their developer profile, and learn directly from past contributors.*',
        poster:'events/oss-1/oss-1.jpg' ,
        posters: ['events/oss-1/g1.jpg', 'events/oss-1/g2.jpg','events/oss-1/g3.jpg'],

        venue: 'CRC 101',
        time: '7:30 PM',
        details: '### What to expect\nThis session will guide you through the open-source landscape. You will gain valuable insights from past GSoC contributors, learn how to make your first contributions, and get ready to showcase your skills during Hacktoberfest.\n\n### Prerequisites\n* No prior open-source experience needed!\n* A laptop, a GitHub account (recommended), and an eagerness to collaborate.\n\n### Syllabus\n1. **Introduction to Open Source:** How to start contributing and effectively build your profile.\n2. **Hacktoberfest Prep:** Everything you need to know to participate and showcase your skills (Join the IITM Discord: https://discord.gg/vJMSmwh4).\n3. **GSoC Mentorship:** Insights from past GSoC contributors and details on joining our mentorship program (Application: https://forms.gle/AEHAWAyYL22edZdW8).',
        registrationLink: null,
        contestLink: null,
        ranklistLink: null,
        problemsetLink: null,
        teamConducted: null,
        slidesPdf: 'events/oss-1/oss-1.pdf',
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
export const getAllEvents = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day for fair comparison

  return eventGroups.flatMap((group) =>
    group.events.map((event) => {
      // Automatically determine category based on date
      const eventDate = new Date(event.date);
      const category = eventDate >= today ? 'upcoming' : 'past';

      return { ...event, groupName: group.name, category };
    })
  );
};

export const getEventBySlug = (slug) =>
  getAllEvents().find((e) => e.slug === slug) || null;