import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="/ai-driven-hackathon/docs/category/foundations-of-physical-ai">
            Start Learning - Week 1
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A 13-week curriculum for industry engineers">
      <HomepageHeader />
      <main>
         <div className="container margin-vert--xl">
            <div className="row">
              <div className="col col--4">
                <h3>For Industry Engineers</h3>
                <p>A practical, hands-on guide designed for professionals with Python experience.</p>
              </div>
              <div className="col col--4">
                <h3>Hardware Neutral</h3>
                <p>Learn with Digital Twins, Edge Kits, or Cloud environments. Concepts apply universally.</p>
              </div>
              <div className="col col--4">
                <h3>Full Pipeline</h3>
                <p>From Speech and Planning to Navigation, Perception, and Manipulation.</p>
              </div>
            </div>
         </div>
      </main>
    </Layout>
  );
}