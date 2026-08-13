// src/data/newsletterData.js

// 1. Import the raw markdown string (make sure this file actually exists in this folder!)
import rvoContent from './newsletters/RVO.md?raw';

export const newsletter = [
  {
    slug: 'rvo-cpp',
    title: 'Return Value Optimization (RVO)',
    date: '2026-08-13',
    author: 'Programming Club',
    summary: 'A deep dive into C++ Return Value Optimization, analyzing assembly output across C++11 and C++17.',
    tags: ['C++', 'Compilers', 'Assembly'],
    content: rvoContent, // 2. Assign the imported markdown here
    furtherReading: [    // 3. New section for links
      {
        title: 'CppReference: Copy Elision',
        url: 'https://en.cppreference.com/w/cpp/language/copy_elision',
        type: 'read' // 'read' or 'video'
      },
      {
        title: 'CppCon: Understanding Compiler Optimization',
        url: 'https://youtube.com/watch?example',
        type: 'video'
      }
    ]
  },
  {
    slug: 'building-cli-rust',
    title: 'Building a CLI tool in Rust',
    date: '2025-11-20',
    author: 'Bob Williams',
    summary: 'Why we chose Rust for our internal tooling and how you can get started building blazingly fast CLIs.',
    tags: ['Rust', 'Systems Programming', 'CLI'],
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    furtherReading: [] // Leave empty if none
  }
];

export const getNewsletterBySlug = (slug) => newsletter.find(n => n.slug === slug);