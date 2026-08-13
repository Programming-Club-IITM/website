import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Mail } from 'lucide-react';
import { newsletter, NEWSLETTER_SUBSCRIBE_LINK } from '../data/newsletterData';
import { Link} from 'react-router-dom';
import SectionBackground from '../components/SectionBackground';

const Newsletter = () => {
  return (
    <SectionBackground variant="cyan" intensity={0.07}>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <Link className="block glass-card p-8 group hover:border-accent/40 transition-colors" to="{`/newsletter/${post.slug}`}">
              <div className="flex items-center gap-4 text-sm font-mono text-textMuted mb-4">
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                <span className="text-primary">{post.author}</span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h2>

              <p className="text-gray-400 mb-5 leading-relaxed">
                {post.summary}
              </p>

              {/* Topic tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-accent/10 text-xs font-mono text-accent/80 border border-accent/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                Read Full Article <ArrowRight className="ml-1" size="{18}" />
              </div>
            </Link>
          </motion.div>

          <div className="space-y-8">
            {newsletter.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
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

                <p className="text-gray-400 mb-5 leading-relaxed">
                  {post.summary}
                </p>

                {/* Topic tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-accent/10 text-xs font-mono text-accent/80 border border-accent/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                  Read Full Article <ArrowRight size={18} className="ml-1" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionBackground>
  );
};

export default Newsletter;
