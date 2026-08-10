import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../data/teamData';

// Inline LinkedIn icon (kept local to this file so it matches the "redirect
// symbol" styling described for member cards without depending on lucide's
// brand icon set).
const LinkedinIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MemberCard = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="glass-card p-6 flex flex-col items-center text-center group"
  >
    <div className="relative w-28 h-28 mb-4">
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-colors" />
      <img
        src={member.photo || member.avatar}
        alt={member.name}
        className="relative w-full h-full object-cover rounded-full border-2 border-surface group-hover:border-primary transition-colors"
      />
    </div>
    <h3 className="text-lg font-bold text-white mb-3">{member.name}</h3>
    {member.linkedin && (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} on LinkedIn`}
        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-[#0077b5] hover:bg-[#0077b5]/20 transition-colors"
      >
        <LinkedinIcon />
      </a>
    )}
  </motion.div>
);

const MemberGrid = ({ members }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
    {members.map((member) => (
      <MemberCard key={member.id} member={member} />
    ))}
  </div>
);

const TeamSection = ({ title, children }) => (
  <section>
    <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
    {children}
  </section>
);

const ProjectTeam = ({ project }) => (
  <div className="glass-card p-8 md:p-10">
    <h3 className="text-2xl font-bold text-primary mb-8 text-center">{project.name}</h3>

    <div className="mb-10">
      <h4 className="text-sm font-mono uppercase tracking-widest text-textMuted mb-6 text-center">
        Project Leads
      </h4>
      <MemberGrid members={project.leads} />
    </div>

    <div>
      <h4 className="text-sm font-mono uppercase tracking-widest text-textMuted mb-6 text-center">
        Project Members
      </h4>
      <MemberGrid members={project.members} />
    </div>
  </div>
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
          <TeamSection title="Heads">
            <MemberGrid members={team.heads} />
          </TeamSection>

          <TeamSection title="Dev Strats">
            <MemberGrid members={team.devStrats} />
          </TeamSection>

          <TeamSection title="CP Strats">
            <MemberGrid members={team.cpStrats} />
          </TeamSection>

          <TeamSection title="Coordinators">
            <MemberGrid members={team.coordinators} />
          </TeamSection>

          <section>
            <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
            <div className="space-y-10">
              {team.projects.map((project) => (
                <ProjectTeam key={project.id} project={project} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Team;