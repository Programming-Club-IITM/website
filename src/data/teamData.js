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
const person = (id, name, linkedin = null, photo=null) => ({
  id,
  name,
  linkedin,
  photo,
  avatar: avatarPlaceholder(name, id),
});

export const team = {
  heads: [
    person(1, 'Madhav AK', 'https://www.linkedin.com/in/madhav-arun-krishna-868a762b2', 'team/t1.jpeg'),
    person(2, 'Anvesh', 'https://in.linkedin.com/in/anvesh-subham-pradhan-333367313','team/t2.jpeg'  ),
  ],

  devStrats: [
    person(3, 'Veer Mani Tripathi', 'https://www.linkedin.com/in/veer-mani-tripathi-246a52335?utm_source=share_via&utm_content=profile&utm_medium=member_android', 'team/t3.jpeg'),
    person(4, 'Samarth Shah', 'https://www.linkedin.com/in/samarth-shah-b9136439b?utm_source=share_via&utm_content=profile&utm_medium=member_android', 'team/t4.jpeg'),
    person(5, 'V Sathvik Reddy', 'https://www.linkedin.com/in/vangapelli-sathvik-reddy-9513b1321/', 'team/t5.jpeg'),
  ],

  cpStrats: [
    person(6, 'Harshvardhan Jaju', 'https://www.linkedin.com/in/harshvardhan-jaju-692825376/', 'team/t6.jpeg'),
    person(7, 'Parasa V Prajwal', 'https://www.linkedin.com/in/parasaprajwal/', 'team/t7.jpeg'),
    person(8, 'Pranavanand Saji', 'https://www.linkedin.com/in/pranavanand-saji-830256315?utm_source=share_via&utm_content=profile&utm_medium=member_ios', 'team/t8.jpeg'),
    person(9, 'Arnav Thorat', 'http://linkedin.com/in/arnav-thorat/', 'team/t9.jpeg')
  ],

  coordinators: [
    person(10, 'Rishhilingam C N', 'https://www.linkedin.com/in/rishhilingam-c-n-185412384?utm_source=share_via&utm_content=profile&utm_medium=member_android', 'team/t10.jpeg'),
    person(11, 'Bhupathi Nithin Agnihotri', 'https://www.linkedin.com/in/nithin-agnihotri-bhupathi-06446a372?utm_source=share_via&utm_content=profile&utm_medium=member_android', 'team/t11.jpeg'),
    person(12, 'Aayush Ranjan', 'https://www.linkedin.com/in/aayush-ranjan-3693981b1?utm_source=share_via&utm_content=profile&utm_medium=member_ios', 'team/t12.jpeg'),
    person(13, 'Mukunthan K U', 'https://www.linkedin.com/in/mukunthan-k-u-b078b9308/', 'team/t13.jpeg'),
    person(14, 'Siddharth R', 'https://www.linkedin.com/in/siddharth-r-089b54376?utm_source=share_via&utm_content=profile&utm_medium=member_android', 'team/t14.jpeg'),
    person(15, 'Kushal', 'https://www.linkedin.com/in/kushal-vurukonda/', 'team/t15.jpeg'),
    person(16, 'Kanishka Chakraborty', 'https://www.linkedin.com/in/kanishka-chakraborty-8a1b28374/', 'team/t16.jpeg'),
    person(17, 'Sasanka Mouli G', 'https://www.linkedin.com/in/gsm070', 'team/t17.jpeg'),
    person(18, 'Chaithanya Parama Shivam', 'http://www.linkedin.com/in/chaithanya-parama-shivam-4a0421397', 'team/t18.jpeg'),
    person(19, 'Atharva Mhatre', 'http://linkedin.com/in/atharva-mhatre-0ba40b365/', 'team/t19.jpeg'),
    person(20, 'Aarit', 'https://www.linkedin.com/in/aarit-panda-32274339b/', 'team/t20.jpeg'),
    person(21, 'Anish sarkar', 'https://www.linkedin.com/in/anish-sarkar-5b964a19a/?isSelfProfile=true', 'team/t21.jpeg'),
    person(22, 'Nithil', 'https://www.linkedin.com/in/nithil-adav-a-0aba9a374?utm_source=share_via&utm_content=profile&utm_medium=member_android', 'team/t22.jpeg'),
    person(23, 'Dev Kaurav', 'https://www.linkedin.com/in/devkaurav2025', 'team/t23.jpeg'),
    person(24, 'Yash Tulshyan', 'https://www.linkedin.com/in/yasht67', 'team/t24.jpeg'),
    person(25, 'Saatvik Rai', 'https://www.linkedin.com/in/saatvik-rai', 'team/t25.jpeg'),
    person(26, 'Siddharth Maira', 'https://www.linkedin.com/in/siddharth-maira/', 'team/t26.jpeg'),
    person(27, 'SJayashivan Hosamani', 'https://www.linkedin.com/in/jayashivan-hosamani-6b9b7039b', 'team/t27.jpeg'),
  ],

  // Keep these names in sync with src/data/projectsData.js
  projects: [
    {
      id: 1,
      name: 'Matplotlib',
      leads: [
        person(3, 'Project Lead 1'),
        person(4, 'Project Lead 2'),
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
        person(5, 'Project Lead 1'),
        person(6, 'Project Lead 2'),
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
        person(7, 'Project Lead 1'),
        person(8, 'Project Lead 2'),
      ],
      members: [
        person(27, 'Project Member 1'),
        person(10, 'Project Member 2'),
        person(11, 'Project Member 3'),
      ],
    },
    {
      id: 4,
      name: 'CodeGrader',
      leads: [
        person(9, 'Project Lead 1'),
        person(1, 'Project Lead 2'),
      ],
      members: [
        person(12, 'Project Member 1'),
        person(13, 'Project Member 2'),
        person(14, 'Project Member 3'),
      ],
    },
  ],
};