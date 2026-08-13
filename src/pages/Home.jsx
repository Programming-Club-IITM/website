import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import HeroBackground from '../components/HeroBackground';
import React, { useState, useEffect } from 'react';
const quotes = [
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "The question of whether computers can think is like the question whether submarines can swim.", author: "Edsger Dijkstra" },
  {
    text: "What one programmer can do in one month, two programmers can do in two months.", author: "Fred Brooks" },
  { text: "To iterate is human, to recurse divine.", author: "L. Peter Deutsch" },
  { text: "There are 10 types of people in this world. Those who understand binary and those who don't.", author: "Random user" }
];
const Home = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    // Calculate index based on the current epoch time divided by 30 minutes (1,800,000 ms)
    // This ensures everyone sees the same quote at the same time, and it changes globally!
    const updateQuote = () => {
      const index = Math.floor(Date.now() / (30 * 60 * 1000)) % quotes.length;
      setQuoteIndex(index);
    };

    updateQuote(); // Set initially
    const interval = setInterval(updateQuote, 60000); // Check every minute to see if 30 mins have passed
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col w-full">
      {/* ─── Hero Section ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-between overflow-hidden py-10 pb-20">
        {/* Background Network */}
        <div className="absolute inset-0 z-0 bg-[#0B0F15]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bgDark/50 to-bgDark z-10"></div>
          <HeroBackground />
        </div>

        {/* Main Content */}
        <div className="z-20 text-center px-4 max-w-5xl mx-auto w-full flex-1 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Title */}
            <h1
              className="font-extrabold tracking-tight mb-2 leading-none"
              style={{ fontSize: 'clamp(2.75rem, 15vw, 9rem)' }}
            >
              <span className="text-white block mb-2">Programming</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent inline-block">
                Club
              </span>
            </h1>

            {/* Subtitles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-4 mb-8 flex flex-col items-center space-y-2"
            >
              <div className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide">
                <span className="text-gray-300">Centre </span>
                <span className="text-red-500 font-semibold">for Innovation</span>
              </div>
              <span className="font-sans font-medium tracking-wide text-accent text-sm uppercase">
                Indian Institute of Technology Madras
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4"
            >
              <a href="mailto:programmingclubiitm@gmail.com" className="btn-primary py-3 px-8 text-base shadow-[0_0_20px_rgba(47,189,165,0.3)] hover:shadow-[0_0_30px_rgba(47,189,165,0.5)]">
                Join the Community
              </a>
              <Link to="/projects" className="btn-outline py-3 px-8 text-base bg-white/[0.03] backdrop-blur-sm group">
                Explore Projects
                <ArrowRight size={16} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        {/* Dynamic Quote Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 max-w-2xl mx-auto flex flex-col items-center justify-center space-y-2"
        >
          <p className="text-textMuted/80 text-sm md:text-base italic font-medium text-center">
            "{quotes[quoteIndex].text}"
          </p>
          <p className="text-primary/60 text-xs font-semibold tracking-widest uppercase">
            — {quotes[quoteIndex].author}
          </p>
        </motion.div>
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="z-20 flex flex-col items-center text-textMuted"
        >
          <span className="text-xs font-mono uppercase tracking-widest mb-2 opacity-50">Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={20} className="text-primary/70" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── About & Mission Section ────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-bgDark">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* About Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
              className="glass-panel p-10 md:p-12 relative overflow-hidden group"
            >
              {/* Subtle top border accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-50"></div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">About Us</span>
              </h2>
              <p className="text-lg text-textMuted leading-relaxed">
                Part of the Centre for Innovation (CFI) at IIT Madras, the Programming Club is a vibrant community of developers, problem solvers, and tech enthusiasts. We aim to foster a culture of coding, open-source contribution, and competitive programming across the institute.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-panel p-10 md:p-12 relative overflow-hidden group"
            >
              {/* Subtle top border accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-50"></div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Our Mission</span>
              </h2>
              <p className="text-lg text-textMuted leading-relaxed">
                We are dedicated to strengthening the logical thinking that powers all great code. We channel this passion into the fast-paced, analytical challenges of Competitive Programming (CP) and the creative, hands-on world of Development (Dev). Whether solving a complex puzzle or launching a new project, our goal is to cultivate the essential skills of a programmer.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
