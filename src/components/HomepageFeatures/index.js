import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Software Hub',
    Svg: require('@site/static/img/icon-software.svg').default,
    description: (
      <>
        Discover open-source fleet management platforms, GPS tracking solutions, 
        route optimizers, and maintenance tools. Compare features and find the 
        perfect fit for your fleet.
      </>
    ),
    link: '/docs/software-hub',
  },
  {
    title: 'Hardware Hub',
    Svg: require('@site/static/img/icon-hardware.svg').default,
    description: (
      <>
        Browse GPS trackers, OBD-II devices, gateways, and sensors. 
        Find compatible hardware for your fleet management system with 
        detailed specifications and reviews.
      </>
    ),
    link: '/docs/hardware-hub',
  },
  {
    title: 'Protocol Hub',
    Svg: require('@site/static/img/icon-protocol.svg').default,
    description: (
      <>
        Technical documentation for GPS protocols including GT06, TK103, 
        Teltonika, and more. Essential reference for developers building 
        fleet management integrations.
      </>
    ),
    link: '/docs/protocol-hub',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={link}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
