import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../data/teamData';

const MemberCard = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="glass-card p-6 flex flex-col items-center text-center group"
  >
    <div className="relative w-32 h-32 mb-4">
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-colors"></div>
      <img 
        src={member.avatar} 
        alt={member.name} 
        className="relative w-full h-full object-cover rounded-full border-2 border-surface group-hover:border-primary transition-colors"
      />
    </div>
    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
    <p className="text-sm font-mono text-primary mb-4">{member.role}</p>
  </motion.div>
);

const Team = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Meet the Team</h1>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            The dedicated individuals behind Programming Club IITM.
          </p>
        </div>

        <div className="space-y-24">
          {/* Leads */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-10">Club Leads</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
              {team.leads.map(member => <MemberCard key={member.id} member={member} />)}
            </div>
          </section>

          {/* Cores */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-10">Core Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
              {team.cores.map(member => <MemberCard key={member.id} member={member} />)}
            </div>
          </section>

          {/* Coordinators */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-10">Coordinators</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {team.coordinators.map(member => <MemberCard key={member.id} member={member} />)}
            </div>
          </section>

          {/* Mentors */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-10">Mentors</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
              {team.mentors.map(member => <MemberCard key={member.id} member={member} />)}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Team;
