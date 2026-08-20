import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';
import {
  GiftCardOverview,
  CheckingBalance,
  BonusCardTrap,
  CorporateBulk,
  CrossBranding,
  ThirdPartyRetailers,
  LostStolen,
  DigitalWallet,
  GiftCardFAQ
} from '@/components/GiftCardSections';

export const metadata: Metadata = {
  title: 'Applebee\'s Gift Card Balance Check, Bonus Rules & Bulk Discounts',
  description: 'The definitive 2026 guide to Applebee\'s Gift Cards. Learn how to securely check your balance without getting scammed, the truth about Bonus Card expiration dates, and how to get B2B corporate discounts.',
  alternates: {
    canonical: 'https://applebees-menus.us/gift-card/',
  }
};

export default function GiftCardPage() {
  return (
    <main>
      <Header />
      <Breadcrumb items={[{ label: 'Gift Card', href: '/gift-card' }]} />
      
      <section className={styles.hero}>
        <h1>Applebee's Gift Cards: Balance Checks & Bonus Rules</h1>
        <p>
          Before you type your 19-digit card number into a random website, read this. We expose the digital scams targeting your balance, explain the strict federal laws regarding expiration dates, and break down the "Bonus Card" trap.
        </p>
      </section>

      <GiftCardOverview />
      <CheckingBalance />
      <BonusCardTrap />
      <CorporateBulk />
      <CrossBranding />
      <ThirdPartyRetailers />
      <LostStolen />
      <DigitalWallet />
      <GiftCardFAQ />

      <Footer />
    </main>
  );
}
