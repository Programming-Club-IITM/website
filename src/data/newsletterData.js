// src/data/newsletterData.js

// Import markdown files directly using Vite's ?raw suffix!
// import rvoContent from './newsletters/rvo.md?raw';

export const NEWSLETTER_SUBSCRIBE_LINK = 'https://programmingclubiitm.substack.com';

export const newsletter = [
  {
    slug: 'rvo-cpp', // Replaced 'id' and 'link' with 'slug'
    title: 'Return Value Optimization (RVO)',
    date: '2026-08-13',
    author: 'Programming Club',
    summary: 'A deep dive into C++ Return Value Optimization, analyzing assembly output across C++11 and C++17.',
    tags: ['C++', 'Compilers', 'Assembly'],
    // content: rvoContent, // Use the imported raw markdown here!
    content: '## Placeholder \n Replace this with actual markdown imports later.',
  },
  {
    slug: 'building-cli-rust',
    title: 'Building a CLI tool in Rust',
    date: '2025-11-20',
    author: 'Bob Williams',
    summary: 'Why we chose Rust for our internal tooling and how you can get started building blazingly fast CLIs.',
    tags: ['Rust', 'Systems Programming', 'CLI'],
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  }
];

// Helper function for the detail page
export const getNewsletterBySlug = (slug) => newsletter.find(n => n.slug === slug);