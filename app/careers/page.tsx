import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';
import {
  CareersOverview,
  FranchiseReality,
  FrontOfHouse,
  BackOfHouse,
  AIHiringProcess,
  ManagementFastTrack,
  CompensationTips,
  BenefitsPerks,
  AgeRequirements,
  CareersFAQ
} from '@/components/CareersSections';

export const metadata: Metadata = {
  title: 'Applebee\'s Careers 2026 | Salaries, Interviews & Benefits',
  description: 'The definitive 2026 guide to Applebee\'s jobs. We reveal the AI hiring process, the tipped minimum wage structure, and management salaries at Flynn Group.',
  alternates: {
    canonical: 'https://applebees-menus.us/careers',
  }
};

export default function CareersPage() {
  return (
    <main>
      <Header />
      <Breadcrumb items={[{ label: 'Careers', href: '/careers' }]} />
      
      <section className={styles.hero}>
        <h1>Applebee's Careers: The 2026 Survival Guide</h1>
        <p>
          Before you apply, read this. We expose the intense reality of the Friday night dinner rush, the AI text-bot that will interview you, and exactly how the complicated "Tip-Out" structure will affect your paycheck. This is the ultimate insider guide to working under the neighborhood roof.
        </p>
      </section>

      <CareersOverview />
      <FranchiseReality />
      <FrontOfHouse />
      <BackOfHouse />
      <AIHiringProcess />
      <ManagementFastTrack />
      <CompensationTips />
      <BenefitsPerks />
      <AgeRequirements />
      <CareersFAQ />

      <Footer />
    </main>
  );
}
