import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle" style={{color: '#f3f4f6', fontSize: '1.5rem', textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
          {siteConfig.tagline}
        </p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/software-hub"
            style={{fontWeight: 'bold'}}>
            Explore Software Hub 🚛
          </Link>
          <Link
            className="button button--outline button--lg margin-left--md"
            to="/docs/hardware-hub"
            style={{color: '#ffffff', borderColor: '#ffffff', fontWeight: 'bold'}}>
            Browse Hardware 📡
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Open Source Fleet Management Resources`}
      description="The global resource hub for open source fleet technologies. Discover software, hardware, protocols, and industry insights.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
