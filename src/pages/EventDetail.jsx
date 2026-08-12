import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  Presentation,
  Trophy,
  ClipboardList,
} from 'lucide-react';
import { assetPath,getEventBySlug } from '../data/eventsData';
import SectionBackground from '../components/SectionBackground';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdf.js-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
// ─── Detail row helper ───────────────────────────────────────────────
const InfoRow = ({ icon: Icon, label, children }) => (
  <div className="flex items-start gap-3 text-textMuted">
    <Icon size={18} className="text-primary mt-0.5 shrink-0" />
    <div>
      <span className="text-xs font-mono uppercase tracking-widest text-textMuted/60 block mb-0.5">
        {label}
      </span>
      <span className="text-white text-sm">{children}</span>
    </div>
  </div>
);

// ─── Action button ───────────────────────────────────────────────────
const ActionButton = ({ href, icon: Icon, children, primary = false }) => {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg text-sm font-medium transition-all ${
        primary
          ? 'btn-primary'
          : 'btn-outline'
      }`}
    >
      <Icon size={16} />
      {children}
    </a>
  );
};

// ─── Main Event Detail Page ──────────────────────────────────────────
const EventDetail = () => {
  const { slug } = useParams();
  const event = getEventBySlug(slug);
  const [activePhoto, setActivePhoto] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [scale, setScale] = useState(1);


  // 404 fallback
  if (!event) {
    return (
      <div className="py-20 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">
            Event Not Found
          </h1>
          <p className="text-textMuted mb-8">
            The event you're looking for doesn't exist or may have been removed.
          </p>
          <Link to="/events" className="btn-primary">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const hasDetails = event.details || event.venue || event.time;
  const hasActions =
    event.registrationLink ||
    event.contestLink ||
    event.ranklistLink ||
    event.slidesLink;

  return (
    <SectionBackground variant="cyan" intensity={0.06}>
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm text-textMuted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Events
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              {event.groupName && (
                <span className="text-xs font-mono uppercase tracking-widest text-accent">
                  {event.groupName}
                </span>
              )}
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  event.category === 'upcoming'
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-surface text-textMuted border border-white/10'
                }`}
              >
                {event.category === 'upcoming' ? 'Upcoming' : 'Past'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {event.title}
            </h1>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`grid gap-8 ${
              event.poster ? 'md:grid-cols-[2fr_3fr]' : 'grid-cols-1'
            }`}
          >
            {/* Poster */}
            {event.poster && (
              <div className="glass-panel p-3 self-start">
                <img
                  src={assetPath(event.poster)}
                  alt={`${event.title} poster`}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              </div>
            )}
            {/* Gallery */}
            {event.posters?.length > 0 && (
              <div className="glass-panel p-3 self-start mt-4">
                <img
                  src={assetPath(event.posters[activePhoto])}
                  alt={`${event.title} photo ${activePhoto + 1}`}
                  className="w-full h-auto rounded-xl"
                />
                {event.posters.length > 1 && (
                  <div className="flex gap-2 mt-2 overflow-x-auto">
                    {event.posters.map((src, i) => (
                      <button key={i} onClick={() => setActivePhoto(i)}>
                        <img
                          src={assetPath(src)}
                          className={`w-16 h-16 object-cover rounded ${i === activePhoto ? 'ring-2 ring-white' : 'opacity-60'}`}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Details panel */}
            <div className="glass-panel p-8 space-y-6">
              {/* Short description */}
              <p className="text-textMuted leading-relaxed">
                {event.description}
              </p>

              {/* Info rows */}
              <div className="space-y-4 border-t border-white/[0.07] pt-6">
                <InfoRow icon={Calendar} label="Date">
                  {formattedDate}
                </InfoRow>
                {event.time && (
                  <InfoRow icon={Clock} label="Time">
                    {event.time}
                  </InfoRow>
                )}
                {event.venue && (
                  <InfoRow icon={MapPin} label="Venue">
                    {event.venue}
                  </InfoRow>
                )}
              </div>

              {/* Extended details */}
              {event.details && (
                <div className="border-t border-white/[0.07] pt-6">
                  <h3 className="text-sm font-mono uppercase tracking-widest text-textMuted/60 mb-3">
                    Details
                  </h3>
                  <div className="prose prose-invert max-w-none">
                    <ReactMarkdown>{event.details}</ReactMarkdown>
                  </div>
                </div>
              )}
              {/* Slides */}
              {event.slidesPdf && (
                <div className="border-t border-white/[0.07] pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-textMuted/60">
                      Slides
                    </h3>
                    <a>
                      href={event.slidesPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                      <ExternalLink size={14} /> Open PDF
                    </a>
                  </div>
                  <Document file={assetPath(event.slidesPdf)} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                    <Page pageNumber={pageNum} scale={scale} />
                  </Document>
                  <div className="flex gap-2 mt-3 items-center text-sm text-textMuted">
                    <button onClick={() => setPageNum((p) => Math.max(1, p - 1))} disabled={pageNum <= 1} className="btn-outline px-2 py-1">Prev</button>
                    <span>{pageNum} / {numPages}</span>
                    <button onClick={() => setPageNum((p) => Math.min(numPages, p + 1))} disabled={pageNum >= numPages} className="btn-outline px-2 py-1">Next</button>
                    <button onClick={() => setScale((s) => s + 0.2)} className="btn-outline px-2 py-1">+</button>
                    <button onClick={() => setScale((s) => Math.max(0.4, s - 0.2))} className="btn-outline px-2 py-1">-</button>
                  </div>
                </div>
              )}
              {/* Action buttons */}
              {hasActions && (
                <div className="border-t border-white/[0.07] pt-6 flex flex-wrap gap-3">
                  <ActionButton
                    href={event.registrationLink}
                    icon={ClipboardList}
                    primary
                  >
                    Register
                  </ActionButton>
                  <ActionButton href={event.contestLink} icon={ExternalLink}>
                    Contest Page
                  </ActionButton>
                  <ActionButton href={event.ranklistLink} icon={Trophy}>
                    Ranklist
                  </ActionButton>
                  <ActionButton href={event.slidesLink} icon={Presentation}>
                    Slides
                  </ActionButton>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionBackground>
  );
};

export default EventDetail;
