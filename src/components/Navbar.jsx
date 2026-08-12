import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { assetPath,eventGroups } from '../data/eventsData';

// ─── Desktop Events Dropdown ─────────────────────────────────────────
const EventsDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1 ${
          open ? 'text-primary' : 'text-gray-300 hover:text-white'
        }`}
      >
        Events
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full mt-2 w-56 bg-surface/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl shadow-black/40 z-50"
          >
            {/* All Events link */}
            <Link
              to="/events"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-gray-300 hover:text-primary hover:bg-white/5 transition-colors border-b border-white/[0.06] font-medium rounded-t-xl"
            >
              All Events
            </Link>

            <div className="py-1">
              {eventGroups.map((group) => (
                <div key={group.name}>
                  {group.events.length === 1 ? (
                    /* Single event — link directly */
                    <Link
                      to={`/events/${group.events[0].slug}`}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-primary hover:bg-white/5 transition-colors"
                    >
                      {group.name}
                    </Link>
                  ) : (
                    /* Group with sub-events (Hover Flyout) */
                    <div className="relative group">
                      <button className="w-full text-left flex items-center justify-between px-4 py-2.5 text-sm text-gray-300 hover:text-primary hover:bg-white/5 transition-colors">
                        {group.name}
                        <ChevronRight size={14} className="text-gray-500 group-hover:text-primary transition-colors" />
                      </button>

                      <div className="absolute left-[95%] top-0 ml-1 w-48 bg-surface/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-1">
                          {group.events.map((event) => (
                            <Link
                              key={event.slug}
                              to={`/events/${event.slug}`}
                              onClick={() => setOpen(false)}
                              className="block px-4 py-2.5 text-sm text-gray-400 hover:text-primary hover:bg-white/5 transition-colors"
                            >
                              {event.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Mobile Events Expandable ────────────────────────────────────────
const MobileEventsSection = ({ onClose }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-surface/50"
      >
        Events
        <ChevronDown
          size={16}
          className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <Link
              to="/events"
              onClick={onClose}
              className="block pl-6 py-1.5 text-sm text-primary font-medium"
            >
              All Events
            </Link>
            {eventGroups.map((group) =>
              group.events.length === 1 ? (
                <Link
                  key={group.name}
                  to={`/events/${group.events[0].slug}`}
                  onClick={onClose}
                  className="block pl-6 py-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {group.name}
                </Link>
              ) : (
                <div key={group.name}>
                  <span className="block pl-6 pt-2 pb-0.5 text-xs font-mono uppercase tracking-widest text-textMuted/50">
                    {group.name}
                  </span>
                  {group.events.map((event) => (
                    <Link
                      key={event.slug}
                      to={`/events/${event.slug}`}
                      onClick={onClose}
                      className="block pl-9 py-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {event.title}
                    </Link>
                  ))}
                </div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Navbar ──────────────────────────────────────────────────────────
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const simpleLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    // Events handled by dropdown
    { name: 'Newsletter', path: '/newsletter' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <nav className="glass-nav fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="flex items-center gap-2.5 text-xl font-bold text-white hover:text-primary transition-colors"
            >
              <img
                src={logo}
                alt="Programming Club IITM logo"
                className="h-9 w-auto"
              />
              <span>
                Programming Club{' '}
                <span className="text-primary">IITM</span>
              </span>
            </NavLink>
          </div>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-baseline space-x-4">
            {simpleLinks.slice(0, 2).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <EventsDropdown />

            {simpleLinks.slice(2).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          {/* ── Right Section (CFI Logo + Mobile Toggle) ── */}
          <div className="flex items-center gap-4">
            <a href="https://cfi.iitm.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img src={assetPath('cfi.png')} alt="CFI Logo" className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* ── Mobile Toggle ── */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-surface focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass-nav border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              {simpleLinks.slice(0, 2).map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-primary bg-surface/50'
                        : 'text-gray-300 hover:text-white hover:bg-surface/50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <MobileEventsSection onClose={() => setIsOpen(false)} />

              {simpleLinks.slice(2).map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-primary bg-surface/50'
                        : 'text-gray-300 hover:text-white hover:bg-surface/50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
