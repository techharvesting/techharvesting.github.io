import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className='button button--secondary button--lg' to='/tutorials'>
            Tutorials
          </Link>
          <Link
            className='button button--secondary button--lg'
            to='/blog'
            style={{
              marginLeft: '10px',
            }}
          >
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='TechHarvesting - Learn full stack web development'
    >
      <Head>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@naseelniyas' />
        <meta name='twitter:creator' content='@naseelniyas' />
        <meta name='twitter:title' content={`${siteConfig.title}`} />
        <meta name='twitter:description' content={`${siteConfig.tagline}`} />
        <meta
          name='twitter:image'
          content='https://techharvesting.com/img/logo.png'
        />
        <meta property='og:title' content={`${siteConfig.title}`} />
        <meta property='og:description' content={`${siteConfig.tagline}`} />
      </Head>
      <HomepageHeader />
      <main>
        {/* Red subscribe button */}
              <div className='card'>
                <div className='card__content' style={{
                  padding: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                  <h3 className='card__title'>
                    <a
                      href='https://www.youtube.com/techharvestingwithnaseel?sub_confirmation=1'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='button button--danger button--lg'
                    >
                      Subscribe
                    </a>
                  </h3>
                  <p className='card__description'>
                    Subscribe to TechHarvesting YouTube channel to get tutorials
                    on different technologies
                  </p>
                </div>
              </div>
      </main>
    </Layout>
  );
}
