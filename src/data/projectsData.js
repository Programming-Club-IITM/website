/**
 * PROJECTS DATA
 *
 * status: 'active' | 'completed'
 *   – All current entries are past/completed projects.
 *   – Set status to 'active' when adding new ongoing projects.
 *
 * teamId: matches the project id in teamData.js so we can link
 *   the project card to the corresponding team section.
 */

export const projects = [
  {
    id: 1,
    title: 'Matplotlib',
    description: 'Contributing to the core visualization library in Python. Work involves optimizing rendering pipelines and adding new plot types.',
    tags: ['Python', 'C++', 'Data Visualization'],
    githubLink: null,
    status: 'active',
    teamId: 1,
  },
  {
    id: 2,
    title: 'Poozle',
    description: 'An open-source integration platform for modern engineering teams. Unified API for all your integrations.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    githubLink: null,
    status: 'active',
    teamId: 2,
  },
  {
    id: 3,
    title: 'GUNN',
    description: 'Graphics Processing on Neural Networks using CUDA. Exploring parallel processing capabilities for deep learning.',
    tags: ['CUDA', 'C++', 'Deep Learning'],
    githubLink: null,
    status: 'active',
    teamId: 3,
  },
  {
    id: 4,
    title: 'CodeGrader',
    description: 'An automated testing and grading system for competitive programming contests, with isolated execution environments.',
    tags: ['Docker', 'Go', 'React'],
    githubLink: null,
    status: 'completed',
    teamId: 4,
  },
];
