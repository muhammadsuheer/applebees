import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 900, color: '#c8102e', marginBottom: '10px' }}>404</h1>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '20px' }}>Page Not Found</h2>
        <p style={{ maxWidth: '500px', color: '#555', marginBottom: '30px', fontSize: '1.1rem' }}>
          Sorry, we couldn&apos;t find the menu or guide you were looking for. It might have been updated or moved.
        </p>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link 
            href="/" 
            style={{ 
              backgroundColor: '#c8102e', 
              color: '#fff', 
              padding: '12px 24px', 
              borderRadius: '6px', 
              textDecoration: 'none', 
              fontWeight: 'bold' 
            }}
          >
            Go to Homepage
          </Link>
          <Link 
            href="/menu" 
            style={{ 
              backgroundColor: '#333', 
              color: '#fff', 
              padding: '12px 24px', 
              borderRadius: '6px', 
              textDecoration: 'none', 
              fontWeight: 'bold' 
            }}
          >
            Explore Full Menu
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
