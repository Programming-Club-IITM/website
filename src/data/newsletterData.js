// src/data/newsletterData.js

// 1. Import the raw markdown string (make sure this file actually exists in this folder!)
import rvoContent from './newsletters/RVO.md?raw';
import AoCContent from './newsletters/AoC.md?raw';
import Cpp23Content from './newsletters/c++23.md?raw';

export const newsletter = [
  {
    slug: 'rvo-cpp',
    title: 'Return Value Optimization (RVO)',
    date: null,
    author: 'tushar3q34',
    summary: 'A deep dive into C++ Return Value Optimization, analyzing assembly output across C++11 and C++17.',
    tags: ['C++', 'Compilers', 'Assembly'],
    content: rvoContent, // 2. Assign the imported markdown here
    furtherReading: []
  },
  {
    slug: 'advent-of-code',
    title: 'Advent of Code 2025',
    date: null,
    author: 'ScepticallySam',
    summary: "An introduction to the 12-day Advent of Code 2025 programming challenge, detailing puzzle mechanics and how to join the Programming Club's private leaderboard.",
    tags: ['advent-of-code', 'competitive-programming', 'puzzles'],
    content: AoCContent, // 2. Assign the imported markdown here
    furtherReading: [ ]

  },
  {
    slug: 'c++23',
    title: 'New feature in C++ 23',
    date: null,
    author: 'ScepticallySam',
    summary: "A brief introduction to the std::expected feature introduced in C++23, highlighting its benefits for explicit, type-safe, and composable error handling compared to traditional exceptions and std::optional.",
    tags: ['c++23', 'std-expected',],
    content: Cpp23Content, // 2. Assign the imported markdown here
    furtherReading: [
      {
        title: 'std::expected',
        url: 'https://en.cppreference.com/w/cpp/utility/expected.html',
        type: 'read' // 'read' or 'video'
      },
      {
        title: 'error handling',
        url: 'https://www.youtube.com/watch?v=Vz40rDiWnN8',
        type: 'video' // 'read' or 'video'
      },
    ]

  }

];

export const getNewsletterBySlug = (slug) => newsletter.find(n => n.slug === slug);