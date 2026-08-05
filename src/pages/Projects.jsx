import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ExternalLink } from 'lucide-react';
import { projects } from '../data/projectsData';

const Projects = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            Discover the open-source projects and tools built by our community at CFI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
              
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex gap-3">
                  <a href={project.githubLink} className="text-gray-400 hover:text-white transition-colors">
                    <GitBranch size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <p className="text-textMuted mb-8 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-surface text-xs font-mono text-gray-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
