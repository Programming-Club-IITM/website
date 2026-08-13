import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { getNewsletterBySlug } from '../data/newsletterData';
import SectionBackground from '../components/SectionBackground';

const NewsletterDetail = () => {
    const { slug } = useParams();
    const post = getNewsletterBySlug(slug);

    if (!post) {
        return (
            <div className="py-20 text-center">
                <div className="max-w-xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
                    <p className="text-textMuted mb-8">This newsletter issue doesn't exist.</p>
                    <Link to="/newsletter" className="btn-primary">← Back to Newsletter</Link>
                </div>
            </div>
        );
    }

    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <SectionBackground intensity={0.05} variant="cyan">
            <div className="py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    <Link to="/newsletter" className="inline-flex items-center gap-2 text-sm text-textMuted hover:text-accent transition-colors mb-10">
                        <ArrowLeft size={16} />
                        Back to Articles
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 border-b border-white/10 pb-10"
                    >
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-accent/10 text-xs font-mono text-accent/80 border border-accent/15">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-textMuted text-sm font-mono">
                            <div className="flex items-center gap-2">
                                <User size={16} className="text-primary" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-primary" />
                                {formattedDate}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-accent hover:prose-a:text-highlight prose-pre:bg-[#0d1312] prose-pre:border prose-pre:border-white/10"
                    >
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </motion.div>

                </div>
            </div>
        </SectionBackground>
    );
};

export default NewsletterDetail;