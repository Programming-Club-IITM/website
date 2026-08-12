import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ChevronRight } from 'lucide-react';
import { assetPath,eventGroups, getAllEvents } from '../data/eventsData';
import SectionBackground from '../components/SectionBackground';
import { getEventBySlug } from '../data/eventsData';
// ─── Small Event Card (links to detail page) ────────────────────────
const EventCard = ({ event }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <Link
      to={`/events/${event.slug}`}
      className="glass-card p-6 flex flex-col h-full group block"
    >
      {/* {event.poster && (
        <img
          src={assetPath(event.poster)}
          alt={event.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )} */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ml-3 ${
            event.category === 'upcoming'
              ? 'bg-primary/20 text-primary border border-primary/30'
              : 'bg-surface text-textMuted border border-white/10'
          }`}
        >
          {event.category === 'upcoming' ? 'Upcoming' : 'Past'}
        </span>
      </div>

      <div className="flex items-center gap-2 text-textMuted text-sm mb-3">
        <Calendar size={14} />
        <span>
          {new Date(event.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
      </div>

      <p className="text-textMuted text-sm mb-4 flex-grow line-clamp-2">
        {event.description}
      </p>

      <div className="flex items-center text-primary text-sm font-medium group-hover:gap-1.5 transition-all">
        View Details <ArrowRight size={14} className="ml-1" />
      </div>
    </Link>
  </motion.div>
);

// ─── Event Group Panel ───────────────────────────────────────────────
const EventGroupPanel = ({ group }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5 }}
    className="glass-panel p-6 md:p-8"
  >
    <div className="flex items-center gap-3 mb-6">
      <ChevronRight size={20} className="text-primary" />
      <h3 className="text-xl font-bold text-white">{group.name}</h3>
      <span className="text-xs font-mono text-textMuted">
        ({group.events.length} {group.events.length === 1 ? 'event' : 'events'})
      </span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {group.events.map((event) => (
        <EventCard key={event.slug} event={event} />
      ))}
    </div>
  </motion.div>
);

// ─── Main Events Page ────────────────────────────────────────────────
const Events = () => {
  const allEvents = getAllEvents();
  const upcomingEvents = allEvents.filter((e) => e.category === 'upcoming');

  return (
    <SectionBackground variant="teal" intensity={0.06}>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Events &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-highlight">
                Workshops
              </span>
            </h1>
            <p className="text-xl text-textMuted max-w-2xl mx-auto">
              Join us for hackathons, bootcamps, and weekly sessions to level up
              your skills.
            </p>
          </motion.div>

          {/* ── Upcoming Events ── */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">
                ✦
              </span>
              Upcoming Events
            </h2>
            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            ) : (
              <div className="glass-card p-8 text-center text-textMuted max-w-xl mx-auto">
                <p className="mb-2 font-semibold text-white">
                  No upcoming events scheduled right now.
                </p>
                <p className="text-sm">
                  We are cooking up some exciting events. Check back soon or
                  follow our socials for updates!
                </p>
              </div>
            )}
          </div>

          {/* ── Past Events — Grouped by Series ── */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-400">
              Past Events
            </h2>
            <div className="space-y-8">
              {eventGroups
                .filter((g) => g.events.some((e) => e.category === 'past'))
                .map((group) => (
                  <EventGroupPanel
                    key={group.name}
                    group={{
                      ...group,
                      events: group.events.filter(
                        (e) => e.category === 'past'
                      ),
                    }}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </SectionBackground>
  );
};

export default Events;
