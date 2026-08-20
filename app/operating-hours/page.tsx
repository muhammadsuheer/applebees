import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';
import {
  HoursOverview,
  StandardHours,
  LateNightShift,
  ThanksgivingChristmas,
  MinorHolidays,
  DualBrandedIHOP,
  TakeoutCurfews,
  DriveThruTesting,
  VerifyRealTime,
  HoursFAQ
} from '@/components/HoursSections';

export const metadata: Metadata = {
  title: 'Applebee\'s Hours 2026 | Holiday Schedule & Late Night',
  description: 'The definitive 2026 guide to Applebee\'s operating hours. Find out exactly when the late-night Happy Hour starts, Thanksgiving and Christmas schedules, and more.',
  alternates: {
    canonical: 'https://applebees-menus.us/operating-hours/',
  }
};

export default function OperatingHoursPage() {
  return (
    <main>
      <Header />
      <Breadcrumb items={[{ label: 'Operating Hours', href: '/hours' }]} />
      
      <section className={styles.hero}>
        <h1>Applebee's Operating Hours: The 2026 Insider Guide</h1>
        <p>
          Before you drive to your neighborhood grill on Thanksgiving Day, read this. We expose exactly why 96% of locations have different closing times, break down the strict 10:00 PM weekend Happy Hour shift, and reveal how the new dual-branded IHOP locations are forcing Applebee's kitchens to open at 6:00 AM.
        </p>
      </section>

      <HoursOverview />
      <StandardHours />
      <LateNightShift />
      <ThanksgivingChristmas />
      <MinorHolidays />
      <DualBrandedIHOP />
      <TakeoutCurfews />
      <DriveThruTesting />
      <VerifyRealTime />
      <HoursFAQ />

      <Footer />
    </main>
  );
}
