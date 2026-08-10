/**
 * TEAM DATA TEMPLATE & CONFIGURATION
 *
 * Structure:
 *   - heads:        Overall club heads
 *   - devStrats:    Development strategists
 *   - cpStrats:     Competitive Programming strategists
 *   - coordinators: General coordinators
 *   - projects:     Each project has its own leads[] and members[]
 *
 * Every person is an object shaped like:
 *   {
 *     id: <unique number>,
 *     name: 'Full Name',
 *     linkedin: 'https://www.linkedin.com/in/username' // set to '#' if not available yet
 *   }
 *
 * PHOTOS:
 * We don't have real photos yet, so `avatar` is auto-generated as an initials
 * placeholder (a colored circle with the person's initials) via avatarPlaceholder().
 * Once you have a real photo, just add a `photo: '/path/or/url/to/image.jpg'` field
 * to that person's object — MemberCard (in Team.jsx) will automatically prefer
 * `photo` over the generated placeholder if it's present.
 *
 * TO ADD A NEW PERSON: copy an existing object in the relevant array/section and
 * update the id, name, and linkedin fields.
 *
 * TO ADD A NEW PROJECT: copy an object in the `projects` array below and fill in
 * name, leads[], and members[]. Keep project names in sync with projectsData.js.
 */

// Theme-matched palette used to color the initials placeholders (cycled per person)
const AVATAR_PALETTE = ['2FBDA5', '1B8FB0', '86C440', 'F2A93B'];

const getInitials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');

// Generates a lightweight inline SVG data-URI avatar (no network request needed).
// This is intentionally simple looking so it reads clearly as a "placeholder".
export const avatarPlaceholder = (name, seed = 0) => {
  const initials = getInitials(name || '?');
  const color = AVATAR_PALETTE[seed % AVATAR_PALETTE.length];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
    <rect width='100%' height='100%' rx='100' fill='#121a19'/>
    <circle cx='100' cy='100' r='96' fill='none' stroke='#${color}' stroke-width='3' stroke-opacity='0.5'/>
    <text x='50%' y='52%' text-anchor='middle' dy='.35em' font-family='Inter, sans-serif' font-size='72' font-weight='600' fill='#${color}'>${initials}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

// Helper to build a person object with an auto-generated placeholder avatar.
const person = (id, name, linkedin = null) => ({
  id,
  name,
  linkedin,
  avatar: avatarPlaceholder(name, id),
});

export const team = {
  heads: [
    person(1, 'Head 1'),
    person(2, 'Head 2'),
  ],

  devStrats: [
    person(3, 'Dev Strat 1'),
    person(4, 'Dev Strat 2'),
    person(5, 'Dev Strat 3'),
  ],

  cpStrats: [
    person(6, 'CP Strat 1'),
    person(7, 'CP Strat 2'),
    person(8, 'CP Strat 3'),
  ],

  coordinators: [
    person(9, 'Coordinator 1'),
    person(10, 'Coordinator 2'),
    person(11, 'Coordinator 3'),
    person(12, 'Coordinator 4'),
    person(13, 'Coordinator 5'),
    person(14, 'Coordinator 6'),
  ],

  // Keep these names in sync with src/data/projectsData.js
  projects: [
    {
      id: 1,
      name: 'Matplotlib',
      leads: [
        person(15, 'Project Lead 1'),
        person(16, 'Project Lead 2'),
      ],
      members: [
        person(17, 'Project Member 1'),
        person(18, 'Project Member 2'),
        person(19, 'Project Member 3'),
      ],
    },
    {
      id: 2,
      name: 'Poozle',
      leads: [
        person(20, 'Project Lead 1'),
        person(21, 'Project Lead 2'),
      ],
      members: [
        person(22, 'Project Member 1'),
        person(23, 'Project Member 2'),
        person(24, 'Project Member 3'),
      ],
    },
    {
      id: 3,
      name: 'GUNN',
      leads: [
        person(25, 'Project Lead 1'),
        person(26, 'Project Lead 2'),
      ],
      members: [
        person(27, 'Project Member 1'),
        person(28, 'Project Member 2'),
        person(29, 'Project Member 3'),
      ],
    },
    {
      id: 4,
      name: 'CodeGrader',
      leads: [
        person(30, 'Project Lead 1'),
        person(31, 'Project Lead 2'),
      ],
      members: [
        person(32, 'Project Member 1'),
        person(33, 'Project Member 2'),
        person(34, 'Project Member 3'),
      ],
    },
  ],
};