import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Presentation } from 'lucide-react';
import { events } from '../data/eventsData';

const EventCard = ({ event }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card p-6 flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-white">{event.title}</h3>
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
        event.category === 'upcoming' ? 'bg-primary/20 text-primary' : 'bg-surface text-textMuted'
      }`}>
        {event.category === 'upcoming' ? 'Upcoming' : 'Past'}
      </span>
    </div>
    
    <div className="flex items-center gap-2 text-textMuted text-sm mb-4">
      <Calendar size={16} />
      <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
    </div>
    
    <p className="text-textMuted mb-6 flex-grow">
      {event.description}
    </p>
    
    <div className="flex flex-wrap gap-3 mt-auto">
      {event.registerLink && (
        <a href={event.registerLink} className="btn-primary flex-1 text-center py-2 px-4 text-sm">
          Register Now
        </a>
      )}
      {event.slidesLink && (
        <a href={event.slidesLink} className="btn-outline flex-1 text-center flex items-center justify-center gap-2 py-2 px-4 text-sm">
          <Presentation size={16} /> Slides
        </a>
      )}
      {event.problemStatementsLink && (
        <a href={event.problemStatementsLink} className="btn-outline flex-1 text-center flex items-center justify-center gap-2 py-2 px-4 text-sm">
          <ExternalLink size={16} /> Problems
        </a>
      )}
    </div>
  </motion.div>
);

const Events = () => {
  const upcomingEvents = events.filter(e => e.category === 'upcoming');
  const pastEvents = events.filter(e => e.category === 'past');

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Events & Workshops</h1>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            Join us for hackathons, bootcamps, and weekly sessions to level up your skills.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✦</span>
            Upcoming Events
          </h2>
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="glass-card p-8 text-center text-textMuted max-w-xl mx-auto">
              <p className="mb-2 font-semibold text-white">No upcoming events scheduled right now.</p>
              <p className="text-sm">We are cooking up some exciting events. Check back soon or follow our socials for updates!</p>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-400">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
