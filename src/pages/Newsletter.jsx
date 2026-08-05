import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Mail } from 'lucide-react';
import { newsletter, NEWSLETTER_SUBSCRIBE_LINK } from '../data/newsletterData';

const Newsletter = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-6">
            <BookOpen size={32} />
          </div>
          <h1 className="text-5xl font-bold mb-6">Technical Blog & Newsletter</h1>
          <p className="text-xl text-textMuted max-w-2xl mx-auto mb-8">
            Deep dives, tutorials, and write-ups from our community members.
          </p>
          {NEWSLETTER_SUBSCRIBE_LINK && (
            <a 
              href={NEWSLETTER_SUBSCRIBE_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 btn-primary py-3 px-6 rounded-lg text-sm font-semibold hover:scale-105 transition-transform"
            >
              <Mail size={18} />
              Subscribe to Newsletter
            </a>
          )}
        </div>

        <div className="space-y-8">
          {newsletter.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group cursor-pointer hover:border-accent/40 transition-colors"
              onClick={() => {
                if (post.link) {
                  window.open(post.link, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className="flex items-center gap-4 text-sm font-mono text-textMuted mb-4">
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                <span className="text-primary">{post.author}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {post.summary}
              </p>
              
              <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                Read Full Article <ArrowRight size={18} className="ml-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
