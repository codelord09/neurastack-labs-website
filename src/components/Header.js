'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="NeuraStack Labs Logo" 
              width={40} 
              height={40} 
              style={{ objectFit: 'contain', verticalAlign: 'middle' }}
              priority
            />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/" className={styles.navLink}>Home</Link></li>
            <li><Link href="#about" className={styles.navLink}>About</Link></li>
            <li><Link href="#services" className={styles.navLink}>Services</Link></li>
            <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
