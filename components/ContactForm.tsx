'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

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

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
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
              <h2 className={styles.successTitle}>Message Received!</h2>
              <p className={styles.successText}>
                Thank you for reaching out, <strong>{formData.name}</strong>. Your inquiry regarding <em>&quot;{formData.subject}&quot;</em> has been logged in our editorial queue.
              </p>
              <p className={styles.successText} style={{ fontSize: '14px', color: '#6b7280' }}>
                Our team reviews submissions and responds to verified emails within <strong>24 to 48 business hours</strong>.
              </p>
              <button onClick={handleReset} className={styles.resetBtn}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <p className={styles.formSubtitle}>
                Have a menu question, price correction, or general inquiry? Fill out the form below.
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
                  <option value="Advertising & Partnerships">Advertising & Sponsorship Opportunities</option>
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
                {isSubmitting ? 'Sending Message...' : 'Submit Inquiry →'}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Direct Info & Support Badges */}
        <div className={styles.infoSidebar}>
          <div className={styles.infoCard}>
            <h3>📬 Direct Editorial Contact</h3>
            <p>For official correspondence, press inquiries, or corrections, reach us directly at:</p>
            <a href="mailto:admin@applebees-menus.us" className={styles.emailBadge}>
              admin@applebees-menus.us
            </a>
          </div>

          <div className={styles.infoCard}>
            <h3>⏱️ Response Times</h3>
            <ul>
              <li><strong>General Inquiries:</strong> 24–48 Business Hours</li>
              <li><strong>Price Corrections:</strong> Reviewed within 24 Hours</li>
              <li><strong>DMCA / Legal Notices:</strong> Priority handling (24h)</li>
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h3>⚖️ Disclaimer & Notice</h3>
            <p style={{ fontSize: '13.5px', color: '#64748b' }}>
              This website is an independent community menu resource. We are not officially affiliated with or operated by Dine Brands Global, Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
