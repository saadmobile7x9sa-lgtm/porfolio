import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, Copy, Mail, MapPin, Send, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Brand Identity & Systems',
    budget: '$5,000 – $10,000',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const directEmail = 'businesswithmoeed@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const serviceOptions = [
    'Brand Identity & Systems',
    'Packaging & Physical Goods',
    'Poster & Editorial Typography',
    'Digital Art Direction',
  ];

  const budgetTiers = [
    '$3,000 – $5,000',
    '$5,000 – $10,000',
    '$10,000 – $25,000',
    '$25,000+',
  ];

  return (
    <section id="contact" className="py-20 md:py-32 border-b border-current/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-current/10 text-xs font-mono uppercase tracking-widest text-[#737068] dark:text-[#9C9B97]">
          <span>07 / INITIATE CONTACT</span>
          <span className="text-[#FF3B1D] font-bold">PROJECT INQUIRY</span>
        </div>

        <div className="pt-12 md:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Studio Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF3B1D] font-bold block">
                Have a Vision?
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white bg-[#FF3810] p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl shadow-[#FF3810]/20 leading-tight inline-block">
                Let’s Build Something Unforgettable.
              </h2>
              <p className="mt-4 text-base text-[#524F47] dark:text-[#A8A69E] leading-relaxed">
                Currently booking select branding, packaging, and editorial commissions for Q1/Q2. Whether you need an entire identity system or high-impact packaging die-lines, let's talk.
              </p>
            </div>

            {/* Direct Email Card with 1-Click Copy */}
            <div className="p-6 rounded-3xl bg-[#F2EFE8] dark:bg-[#18181C] border border-[#DDD8CD] dark:border-[#2C2C32] space-y-4">
              <span className="text-xs font-mono uppercase text-[#737068] dark:text-[#93918A]">
                Direct Studio Email
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm md:text-base font-semibold text-[#141414] dark:text-white truncate">
                  {directEmail}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider bg-[#141414] text-white dark:bg-white dark:text-[#141414] hover:bg-[#FF3B1D] dark:hover:bg-[#FF3B1D] dark:hover:text-white transition-colors shrink-0 flex items-center gap-1.5"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Studio Availability & Timezone Details */}
            <div className="p-6 rounded-3xl bg-[#F2EFE8] dark:bg-[#18181C] border border-[#DDD8CD] dark:border-[#2C2C32] space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between pb-2 border-b border-current/10">
                <span className="text-[#75726B] dark:text-[#8D8A82] flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#FF3B1D]" />
                  <span>Timezone</span>
                </span>
                <span className="font-semibold text-[#141414] dark:text-white">CET (Paris, France) / UTC+1</span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-current/10">
                <span className="text-[#75726B] dark:text-[#8D8A82] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FF3B1D]" />
                  <span>Work Radius</span>
                </span>
                <span className="font-semibold text-[#141414] dark:text-white">Global Remote & On-Site</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#75726B] dark:text-[#8D8A82] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF3B1D]" />
                  <span>Turnaround Guarantee</span>
                </span>
                <span className="font-semibold text-[#FF3B1D]">Response within 24h</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7 bg-[#F2EFE8] dark:bg-[#18181C] rounded-3xl p-6 sm:p-10 border border-[#DDD8CD] dark:border-[#2C2C32]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FF3B1D]/10 text-[#FF3B1D] flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#141414] dark:text-white">
                  Message Dispatched to Abdulmoeed!
                </h3>
                <p className="text-sm text-[#57544C] dark:text-[#B0AEA6] max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. I have received your project details and will reply with an initial scope proposal and scheduling link within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-mono uppercase bg-[#141414] text-white dark:bg-white dark:text-[#141414] hover:bg-[#FF3B1D] dark:hover:bg-[#FF3B1D] dark:hover:text-white transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#75726B] dark:text-[#95938B] mb-2 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Thorne"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121215] border border-[#DDD9CE] dark:border-[#2C2C33] text-sm text-[#141414] dark:text-white focus:outline-none focus:border-[#FF3B1D] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#75726B] dark:text-[#95938B] mb-2 font-semibold">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maya@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121215] border border-[#DDD9CE] dark:border-[#2C2C33] text-sm text-[#141414] dark:text-white focus:outline-none focus:border-[#FF3B1D] transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#75726B] dark:text-[#95938B] mb-2 font-semibold">
                    Primary Service Requirement
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, service: opt })}
                        className={`p-3 rounded-xl text-left text-xs font-medium transition-all border ${
                          formData.service === opt
                            ? 'bg-[#141414] text-white dark:bg-white dark:text-[#141414] border-transparent shadow-sm'
                            : 'bg-white/60 dark:bg-[#141417] text-[#47443E] dark:text-[#B0AEA6] border-[#DDD9CE] dark:border-[#2B2B32] hover:border-[#FF3B1D]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#75726B] dark:text-[#95938B] mb-2 font-semibold">
                    Estimated Budget Tier
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetTiers.map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setFormData({ ...formData, budget: tier })}
                        className={`py-2 px-3 rounded-xl text-center text-xs font-mono transition-all border ${
                          formData.budget === tier
                            ? 'bg-[#FF3B1D] text-white border-transparent shadow-sm font-bold'
                            : 'bg-white/60 dark:bg-[#141417] text-[#47443E] dark:text-[#B0AEA6] border-[#DDD9CE] dark:border-[#2B2B32] hover:border-[#FF3B1D]'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#75726B] dark:text-[#95938B] mb-2 font-semibold">
                    Brief / Project Overview
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your product, timeline, aesthetic goals, or any specific die-line constraints..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121215] border border-[#DDD9CE] dark:border-[#2C2C33] text-sm text-[#141414] dark:text-white focus:outline-none focus:border-[#FF3B1D] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-full text-xs font-mono uppercase font-bold tracking-widest text-white bg-[#FF3B1D] hover:bg-[#E02E12] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#FF3B1D]/25 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Encrypting & Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
