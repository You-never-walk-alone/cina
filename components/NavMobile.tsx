import { useState } from 'react';
import styles from '../styles/NavMobile.module.css';

interface NavMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavMobile({ isOpen, onClose }: NavMobileProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <div className={styles.menuHeader}>
          <div className={styles.logo}>CINA</div>
          <button className={styles.closeButton} onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <nav className={styles.nav}>
          <a href="#overview" className={styles.navLink} onClick={onClose}>Overview</a>
          <a href="#products" className={styles.navLink} onClick={onClose}>Products</a>
          <a href="#ecosystem" className={styles.navLink} onClick={onClose}>Ecosystem</a>
          <a href="#docs" className={styles.navLink} onClick={onClose}>Docs</a>
          <button className={styles.connectButton}>Connect Wallet</button>
        </nav>
      </div>
    </div>
  );
}