import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import HeroBackground from '../components/HeroBackground';

const TypingText = ({ phrases }) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer;
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      }, 70);
    }
    
    if (!isDeleting && displayText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }
    
    return () => clearInterval(timer);
  }, [displayText, isDeleting, phraseIndex, phrases]);

  return (
    <span className="font-mono text-primary">
      {displayText}
      <span className="animate-pulse text-white">|</span>
    </span>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-drift-a"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-drift-b"></div>
          <HeroBackground />
        </div>
        
        <div className="z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-primary font-mono text-sm">
              <Terminal size={16} />
              <span>&gt; ./init_club.sh</span>
              <span className="w-1.5 h-1.5 rounded-full bg-spark animate-pulse"></span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              ProgClub<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-highlight">IITM</span>
            </h1>
            <div className="text-xl md:text-2xl text-textMuted mb-10 h-16">
              <TypingText phrases={["CFI and IITM", "CFI, IIT Madras"]} />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:programmingclubiitm@gmail.com" className="btn-primary">Join the Community</a>
              <Link to="/projects" className="btn-outline">Explore Projects</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About & Mission Section */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-10 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">About Us</h2>
              <p className="text-lg text-textMuted leading-relaxed">
                Part of the Centre for Innovation (CFI) at IIT Madras, the Programming Club is a vibrant community of developers, problem solvers, and tech enthusiasts. We aim to foster a culture of coding, open-source contribution, and competitive programming across the institute.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-10 flex flex-col justify-center border-l-4 border-l-accent"
            >
              <h2 className="text-3xl font-bold mb-6 text-accent">Our Mission</h2>
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
