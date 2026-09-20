'use client';

import React, { useState } from 'react';
import {
  Mail,
  Send,
  Globe,
  Phone,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useInView } from '@/hooks/useInView';
import styles from './Contact.module.css';

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteUrl: '',
    serviceInterest: 'Comprehensive SEO Audit',
    message: '',
  });

  const { ref, isInView } = useInView({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-wrapper" ref={ref}>
      <div className="container">
        <SectionHeading
          badgeText="Contact"
          badgeIcon={<Mail size={14} />}
          title="Let's Connect"
          highlightWord="Connect"
        />

        <div className={styles.contactContainer}>
          {/* Left / Info Column (No redundant label text - icons convey meaning) */}
          <div className={`clay-card ${styles.infoCard} ${isInView ? 'reveal-init reveal-visible stagger-1' : 'reveal-init'}`}>
            <div className={styles.availabilityBadge}>
              <span className={styles.pulseDot} />
              <span>Available for Consultations</span>
            </div>

            <h3 className={styles.infoTitle}>Start a Conversation</h3>

            {/* Direct Connect Details with icons only */}
            <div className={styles.contactDetailsList}>
              <a href="mailto:fizashaikh0004@gmail.com" className={styles.contactItem} title="Email">
                <div className={styles.itemIconWrap}>
                  <Mail size={18} className={styles.iconCyan} />
                </div>
                <span className={styles.itemValue}>fizashaikh0004@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={styles.contactItem}
                title="LinkedIn Profile"
              >
                <div className={styles.itemIconWrap}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.iconIndigo}
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <span className={styles.itemValue}>linkedin.com/in/fiza-shaikh</span>
              </a>

              <div className={styles.contactItem} title="Location">
                <div className={styles.itemIconWrap}>
                  <Globe size={18} className={styles.iconEmerald} />
                </div>
                <span className={styles.itemValue}>Azamgarh, Uttar Pradesh</span>
              </div>

              <a href="tel:+918127365885" className={styles.contactItem} title="Phone">
                <div className={styles.itemIconWrap}>
                  <Phone size={18} className={styles.iconAmber} />
                </div>
                <span className={styles.itemValue}>+91 81273 65885</span>
              </a>
            </div>

            <div className={styles.guaranteeBox}>
              <ShieldCheck size={16} className={styles.guaranteeIcon} />
              <span>Confidentiality & NDA Assured</span>
            </div>
          </div>

          {/* Right / Interactive Form Card (No redundant labels - clean modern placeholders) */}
          <div className={`clay-card ${styles.formCard} ${isInView ? 'reveal-init reveal-visible stagger-2' : 'reveal-init'}`}>
            {formSubmitted ? (
              <div className={styles.successMessage}>
                <div className={styles.successIconWrap}>
                  <CheckCircle2 size={36} className={styles.successIcon} />
                </div>
                <h4 className={styles.successTitle}>Message Sent</h4>
                <p className={styles.successText}>
                  Thank you. I will get back to you shortly.
                </p>
                <button
                  className={styles.resetBtn}
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      websiteUrl: '',
                      serviceInterest: 'Comprehensive SEO Audit',
                      message: '',
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={styles.inputField}
                    aria-label="Full Name"
                  />
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={styles.inputField}
                    aria-label="Email Address"
                  />
                </div>

                <div className={styles.formRow}>
                  <input
                    id="website"
                    type="text"
                    placeholder="Website URL (e.g. yoursite.com)"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className={styles.inputField}
                    aria-label="Target Website URL"
                  />
                  <select
                    id="service"
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className={styles.selectField}
                    aria-label="Service of Interest"
                  >
                    <option value="Comprehensive SEO Audit">Comprehensive SEO Audit</option>
                    <option value="Technical SEO & Core Web Vitals">Technical SEO & Core Web Vitals</option>
                    <option value="Penalty Recovery & Toxic Disavow">Penalty Recovery & Toxic Disavow</option>
                    <option value="Local SEO & Location Pages">Local SEO & Location Pages</option>
                    <option value="Keyword Strategy & Content">Keyword Strategy & Content</option>
                    <option value="High-Authority Link Building">High-Authority Link Building</option>
                  </select>
                </div>

                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Your message or project brief *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={styles.textareaField}
                  aria-label="Message"
                />

                <button type="submit" className={styles.submitBtn}>
                  <span>Send Message</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
