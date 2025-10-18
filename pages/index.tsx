import Head from 'next/head';
import { useState } from 'react';
import NavMobile from '../components/NavMobile';
import CityNightAnimation from '../components/CityNightAnimation';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={styles.cinaContainer}>
      <Head>
        <title>CINA Protocol</title>
        <meta name="description" content="Connecting onshore finance with blockchain capital markets through RWA infrastructure" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 导航栏 - 完全参考 Theo 网站 */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <a href="#" className={styles.logo}>CINA</a>
          <div className={styles.navLinks}>
            <a href="#overview" className={styles.navLink}>Overview</a>
            <a href="#products" className={styles.navLink}>Products</a>
            <a href="#ecosystem" className={styles.navLink}>Ecosystem</a>
            <a href="#docs" className={styles.navLink}>Docs</a>
          </div>
          <button className={styles.connectButton}>Connect Wallet</button>
          <button 
            className={styles.mobileMenuButton} 
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* 移动端导航菜单 */}
      <NavMobile isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* 主要内容区域 - 参考 Theo 网站布局，添加Canvas城市夜景动画背景 */}
      <section className={styles.heroSection}>
        {/* Canvas城市夜景动画背景 */}
        <CityNightAnimation />
        
        <div className={styles.heroContent}>
          <div className={styles.theoHeader}>
            <h1 className={styles.mainTitle}>CINA Dollar Protocol</h1>
            <h2 className={styles.subtitle}>RWA 支撑的人民币稳定资产体系</h2>
          </div>
          <p className={styles.description}>
            CINA Protocol通过WRMB稳定币、收益型sWRMB份额与CINA治理代币，构建连接在岸MMF收益与链上资本效率的混合架构。
          </p>
          <div className={styles.actionButtons}>
            <button className={styles.primaryButton}>阅读技术白皮书</button>
            <button className={styles.secondaryButton}>查看架构概览</button>
          </div>
        </div>
      </section>
      
      {/* 区域导航链接 - 根据图片添加 */}
      <div className={styles.sectionNav}>
        <div className={styles.sectionNavContent}>
          <a href="#overview" className={styles.sectionNavLink}>协议视觉</a>
          <a href="#wrn-network" className={styles.sectionNavLink}>WRMB网络</a>
          <a href="#governance" className={styles.sectionNavLink}>治理与代币</a>
          <a href="#technical" className={styles.sectionNavLink}>技术文档</a>
        </div>
      </div>
      
      {/* 数据统计区域 - 参考 Theo 水平布局 */}
      <div className={styles.theoStats}>
        <div className={styles.theoStatItem}>
          <span className={styles.statValue}>¥0</span>
          <span className={styles.statLabel}>TVL</span>
        </div>
        <div className={styles.theoStatDivider}></div>
        <div className={styles.theoStatItem}>
          <span className={styles.statValue}>0</span>
          <span className={styles.statLabel}>Holders</span>
        </div>
        <div className={styles.theoStatDivider}></div>
        <div className={styles.theoStatItem}>
          <span className={styles.statValue}>0%</span>
          <span className={styles.statLabel}>APY</span>
        </div>
      </div>

      {/* 产品介绍区域 */}
      <section className={styles.productsSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Products</h2>
          <div className={styles.productCards}>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>W</div>
              <h3 className={styles.productTitle}>WRMB</h3>
              <p className={styles.productDescription}>RMB-backed stablecoin pegged 1:1 to offshore RMB</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>S</div>
              <h3 className={styles.productTitle}>sWRMB</h3>
              <p className={styles.productDescription}>Yield-bearing share representing WRMB in MMF</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>C</div>
              <h3 className={styles.productTitle}>CINA</h3>
              <p className={styles.productDescription}>Governance token for protocol decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* 生态系统区域 */}
      <section className={styles.ecosystemSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Ecosystem</h2>
          <div className={styles.ecosystemGrid}>
            <div className={styles.ecosystemItem}>
              <div className={styles.ecosystemIcon}>🏦</div>
              <h3 className={styles.ecosystemTitle}>Onshore Finance</h3>
              <p className={styles.ecosystemDescription}>Connected with regulated MMF providers</p>
            </div>
            <div className={styles.ecosystemItem}>
              <div className={styles.ecosystemIcon}>⛓️</div>
              <h3 className={styles.ecosystemTitle}>Blockchain</h3>
              <p className={styles.ecosystemDescription}>Built on scalable blockchain infrastructure</p>
            </div>
            <div className={styles.ecosystemItem}>
              <div className={styles.ecosystemIcon}>🌐</div>
              <h3 className={styles.ecosystemTitle}>DeFi Integration</h3>
              <p className={styles.ecosystemDescription}>Seamless integration with major DeFi protocols</p>
            </div>
            <div className={styles.ecosystemItem}>
              <div className={styles.ecosystemIcon}>🔒</div>
              <h3 className={styles.ecosystemTitle}>Security</h3>
              <p className={styles.ecosystemDescription}>Audited by leading security firms</p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部链接区域 - 完全参考 Theo 网站 */}
      <footer className={styles.cinaFooter}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>CINA</div>
            <p className={styles.footerDescription}>RWA-backed RMB stable asset system</p>
          </div>
          <div className={styles.footerLinksGrid}>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>Protocol</h4>
              <a href="#" className={styles.footerLink}>Overview</a>
              <a href="#" className={styles.footerLink}>Products</a>
              <a href="#" className={styles.footerLink}>Ecosystem</a>
            </div>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>Resources</h4>
              <a href="#" className={styles.footerLink}>Documentation</a>
              <a href="#" className={styles.footerLink}>Security</a>
              <a href="#" className={styles.footerLink}>Audits</a>
            </div>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>Community</h4>
              <a href="#" className={styles.footerLink}>Twitter</a>
              <a href="#" className={styles.footerLink}>Discord</a>
              <a href="#" className={styles.footerLink}>Telegram</a>
            </div>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>Legal</h4>
              <a href="#" className={styles.footerLink}>Terms</a>
              <a href="#" className={styles.footerLink}>Privacy</a>
              <a href="#" className={styles.footerLink}>Disclaimer</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© 2024 CINA Protocol. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}