import React, { useState } from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import useScrollReveal from '../../hooks/useScrollReveal';

const EMAIL = 'nlabs.asia@gmail.com';
const projectTypes = ['Website / Web App', 'UI/UX Design', 'Digital Workflow Optimization', 'Something else'];
const emptyForm = { name: '', email: '', type: projectTypes[0], message: '' };

const Contact = () => {
    const sectionRef = useScrollReveal();
    const [form, setForm] = useState(emptyForm);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const update = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
        if (errors[field]) setErrors({ ...errors, [field]: undefined });
    };

    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = 'Please enter your name.';
        if (!form.email.trim()) next.email = 'Please enter your email.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'That email does not look right.';
        if (!form.message.trim()) next.message = 'Tell us a little about the project.';
        return next;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const next = validate();
        setErrors(next);
        if (Object.keys(next).length > 0) return;
        const subject = encodeURIComponent(`Project inquiry: ${form.type}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\n\n${form.message}`
        );
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <section id="contact" ref={sectionRef} className="relative scroll-mt-16 py-20 md:py-28 overflow-hidden bg-white">
            <div className="orb orb-primary w-[400px] h-[400px] -bottom-[150px] -left-[150px] opacity-40" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16">
                    {/* Left */}
                    <div className="reveal-hidden reveal-left">
                        {/* Section Number */}
                        <span className="text-6xl md:text-8xl font-extrabold text-primary/10 font-mono leading-none select-none block mb-4">06</span>

                        <span className="inline-flex items-center gap-2 text-primary text-sm font-mono font-medium mb-3">
                            <span className="w-8 h-px bg-primary" />
                            Contact
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink leading-tight mb-4">
                            Tell us about
                            <br />
                            <span className="gradient-text">your project</span>
                        </h2>
                        <p className="text-muted text-base leading-relaxed mb-8 max-w-md">
                            Send the form and your email app opens with the message ready. We reply to every inquiry ourselves.
                        </p>

                        {/* Email card */}
                        <div className="bg-surface-warm rounded-2xl p-5 border border-border group hover:border-primary/20 hover:shadow-md transition-all duration-500 mb-5">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <BiMessageDetail className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted font-mono mb-0.5">Email us directly</p>
                                    <a href={`mailto:${EMAIL}`} className="text-ink font-semibold text-sm hover:text-primary transition-colors">
                                        {EMAIL}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Info badges */}
                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 text-sm text-green-700">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Responds within 24h
                            </div>
                            <div className="flex items-center gap-2 bg-primary/5 border border-primary/15 rounded-full px-4 py-2 text-sm text-primary">
                                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Free consultation
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="reveal-hidden reveal-right reveal-stagger-2">
                        <form onSubmit={handleSubmit} noValidate className="bg-surface-warm rounded-3xl p-6 md:p-8 border border-border space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="contact-name" className="block text-xs font-mono font-semibold text-body mb-2 uppercase tracking-wider">
                                        Your name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        value={form.name}
                                        onChange={update('name')}
                                        placeholder="John Doe"
                                        className={`w-full rounded-xl border-2 bg-white px-4 py-3 text-ink placeholder-muted/40 font-sans input-glow transition-all duration-300 ${
                                            errors.name ? 'border-red-400' : 'border-border'
                                        }`}
                                    />
                                    {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block text-xs font-mono font-semibold text-body mb-2 uppercase tracking-wider">
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        value={form.email}
                                        onChange={update('email')}
                                        placeholder="email@example.com"
                                        className={`w-full rounded-xl border-2 bg-white px-4 py-3 text-ink placeholder-muted/40 font-sans input-glow transition-all duration-300 ${
                                            errors.email ? 'border-red-400' : 'border-border'
                                        }`}
                                    />
                                    {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="contact-type" className="block text-xs font-mono font-semibold text-body mb-2 uppercase tracking-wider">
                                    Project type
                                </label>
                                <select
                                    id="contact-type"
                                    value={form.type}
                                    onChange={update('type')}
                                    className="w-full rounded-xl border-2 border-border bg-white px-4 py-3 text-ink font-sans input-glow transition-all duration-300"
                                >
                                    {projectTypes.map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="block text-xs font-mono font-semibold text-body mb-2 uppercase tracking-wider">
                                    Project details
                                </label>
                                <textarea
                                    id="contact-message"
                                    rows={5}
                                    value={form.message}
                                    onChange={update('message')}
                                    placeholder="What are you building, and what does success look like?"
                                    className={`w-full rounded-xl border-2 bg-white px-4 py-3 text-ink placeholder-muted/40 font-sans input-glow transition-all duration-300 resize-y ${
                                        errors.message ? 'border-red-400' : 'border-border'
                                    }`}
                                />
                                {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="magnetic-btn w-full bg-primary text-white px-8 py-4 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center gap-2 group"
                            >
                                Send Inquiry
                                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>

                            {submitted && (
                                <div className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 text-sm text-primary" role="status">
                                    Your email app should open with the message ready. If it did not, write to us directly at {EMAIL}.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
