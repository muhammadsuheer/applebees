'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { SITE_EMAIL, SITE_NAME } from '@/data/site';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // There is no server here, so don't pretend there is. Hand the message to
    // the reader's own mail client with everything pre-filled.
    const subject = `[${formData.subject}] ${formData.name}`;
    const body = [
      formData.message,
      '',
      '---',
      `From: ${formData.name}`,
      `Reply to: ${formData.email}`,
      `Topic: ${formData.subject}`,
    ].join('\n');

    window.location.href =
      `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Left Column: Interactive Form */}
        <div className={styles.formCard}>
          {isSubmitted ? (
            <div className={styles.successCard}>
              <div className={styles.successIcon}>✓</div>
              <h2 className={styles.successTitle}>Your mail app should be open</h2>
              <p className={styles.successText}>
                We&apos;ve pre-filled an email to <strong>{SITE_EMAIL}</strong> about <em>&quot;{formData.subject}&quot;</em>. Nothing is sent until you press send in your own mail app.
              </p>
              <p className={styles.successText} style={{ fontSize: '14px', color: '#6b7280' }}>
                If nothing opened, email <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a> directly. {SITE_NAME} is a small operation, so replies take a few days rather than a few hours.
              </p>
              <button onClick={handleReset} className={styles.resetBtn}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <p className={styles.formSubtitle}>
                Menu question, price correction, or a takedown notice? Fill this in and it opens a pre-filled email in your own mail app.
              </p>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">
                  Full Name <span>*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. John Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">
                  Email Address <span>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="subject">
                  Inquiry Topic <span>*</span>
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={styles.select}
                >
                  <option value="General Inquiry">General Inquiry / Feedback</option>
                  <option value="Menu Price / Calorie Correction">Menu Price or Calorie Correction</option>
                  <option value="Business enquiry">Business enquiry</option>
                  <option value="DMCA & Copyright Takedown">DMCA & Copyright Takedown Request</option>
                  <option value="CCPA / GDPR Data Request">CCPA / GDPR Data Request</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">
                  Your Message <span>*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Please describe your inquiry, including any specific menu item names or restaurant locations..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={styles.textarea}
                />
              </div>

              <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                {isSubmitting ? 'Opening your mail app...' : 'Compose Email →'}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Direct Info & Support Badges */}
        <div className={styles.infoSidebar}>
          <div className={styles.infoCard}>
            <h3>Direct editorial contact</h3>
            <p>For official correspondence, press inquiries, or corrections, reach us directly at:</p>
            <a href={`mailto:${SITE_EMAIL}`} className={styles.emailBadge}>
              {SITE_EMAIL}
            </a>
          </div>

          <div className={styles.infoCard}>
            <h3>Response times</h3>
            <ul>
              <li><strong>Price corrections:</strong> checked against our next sampling round</li>
              <li><strong>General questions:</strong> a few working days</li>
              <li><strong>DMCA and legal notices:</strong> handled first</li>
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h3>Disclaimer</h3>
            <p style={{ fontSize: '13.5px', color: '#64748b' }}>
              {SITE_NAME} is an independent research site. It isn&apos;t affiliated with, endorsed by, or operated by Applebee&apos;s Neighborhood Grill + Bar or Dine Brands Global, Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
