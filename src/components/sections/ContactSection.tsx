import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Building2, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS, SITE_METADATA } from '../../data/cms';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    category: 'Student',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      // Clear or keep confirmation
    }, 400);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-b border-[#E5E0D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#B45309] font-bold tracking-widest uppercase">
              06 / CONNECT
            </span>
            <div className="w-12 h-px bg-[#B45309]" />
            <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
              Get in Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1E2022] leading-tight">
            Let's build the future together.
          </h2>

          <p className="text-base text-[#52525B] leading-relaxed">
            Whether you are an engineering dean seeking campus nodal status, an industry leader wishing to mentor, or a student team seeking clarification, our project team is here to help.
          </p>
        </div>

        {/* Two-Column Layout: Contact Form + Details & FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E5E0D5] shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-[#1E2022]">Message Dispatched</h3>
                <p className="text-sm text-[#52525B] max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Your message has been routed to the SwaraNidhi Communications Desk. We usually respond within 2 business days.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: '', email: '', organization: '', category: 'Student', message: '' });
                  }}
                  className="px-6 py-2.5 bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-semibold text-[#1E2022] rounded-full hover:bg-[#F4F1EA]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-serif text-[#1E2022]">Official Communications Desk</h3>
                  <p className="text-xs text-[#78716C]">Fill in your details below for institutional or individual inquiries.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1E2022] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Dr. / Prof. / Mr. / Ms."
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-[#E5E0D5] rounded-xl text-sm text-[#1E2022] focus:outline-hidden focus:border-[#B45309]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1E2022] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@domain.com"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-[#E5E0D5] rounded-xl text-sm text-[#1E2022] focus:outline-hidden focus:border-[#B45309]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1E2022] mb-1">Organization / College</label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Institution or Company Name"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-[#E5E0D5] rounded-xl text-sm text-[#1E2022] focus:outline-hidden focus:border-[#B45309]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1E2022] mb-1">Inquiry Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-[#E5E0D5] rounded-xl text-sm text-[#1E2022] focus:outline-hidden focus:border-[#B45309]"
                    >
                      <option value="Student">Student / Team Inquiry</option>
                      <option value="Institution">College / University Chapter</option>
                      <option value="Mentor">Mentor / Jury Application</option>
                      <option value="Industry">Industry / Incubation Partner</option>
                      <option value="Media">Media & Communications</option>
                      <option value="General">General Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1E2022] mb-1">Your Message or Inquiry *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can our steering group assist you or your institution?"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-[#E5E0D5] rounded-xl text-sm text-[#1E2022] focus:outline-hidden focus:border-[#B45309]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1E2022] text-[#FAF9F5] text-xs font-semibold tracking-wide uppercase hover:bg-[#B45309] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Transmit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right: Operational Information & Frequently Asked Questions */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Connect Info */}
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E5E0D5] space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#78716C] font-semibold">
                Secretariat & Coordination
              </h4>

              <div className="space-y-3 text-xs text-[#52525B]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1E2022] block">Official Email</span>
                    <span className="font-mono text-[#78716C]">secretariat@swaranidhi.org (placeholder)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1E2022] block">Ecosystem Governance</span>
                    <span>SwaraNidhi Steering Group & THRIVE OS Working Committee</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1E2022] block">Event 1.0 Hubs</span>
                    <span>Multi-Region University Nodal Centers & Hybrid Online Arenas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQs Accordion */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#78716C]">
                <HelpCircle className="w-4 h-4 text-[#B45309]" />
                <span>Frequently Clarified Topics</span>
              </div>

              <div className="space-y-2">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-[#E5E0D5] rounded-xl overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                        className="w-full px-4 py-3 text-left flex items-center justify-between text-xs font-semibold text-[#1E2022] hover:bg-[#FAF9F5] transition-colors"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-[#B45309]" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#78716C]" />}
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs text-[#52525B] leading-relaxed border-t border-[#F4F1EA]">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
