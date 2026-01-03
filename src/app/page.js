import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.bannerWrapper}>
          <Image
            src="/banner.png"
            alt="NeuraStack Labs Banner"
            fill
            style={{ objectFit: "fill", width: "100%", height: "100%" }}
            priority
            className={styles.bannerImage}
          />
          <div className={styles.heroOverlay}>
            <h1 className={styles.heroTitle}>NeuraStack Labs</h1>
            <p className={styles.heroSubtitle}>Innovating the Future with AI</p>
            <button className={styles.ctaButton}>Get Started</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>AI Research</h3>
              <p>Pushing the boundaries of what is possible with state-of-the-art machine learning models.</p>
            </div>
            <div className={styles.card}>
              <h3>Custom Solutions</h3>
              <p>Tailored AI implementations to solve your specific business challenges.</p>
            </div>
            <div className={styles.card}>
              <h3>Data Analytics</h3>
              <p>Transforming raw data into actionable insights for strategic decision making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.container}>
          <div className={styles.overviewBlock}>
            <div className={styles.overviewHeader}>
              <h2 className={styles.overviewTitle}>Overview</h2>
              <div className={styles.overviewDivider}></div>
            </div>
            
            <div className={styles.overviewBody}>
              <p className={styles.leadText}>
                NeuraStack Labs builds production-grade software and AI-powered systems for startups and enterprises.
              </p>
              <p className={styles.subText}>
                We design scalable, high-performance platforms that enable businesses to automate customer interactions, build intelligent systems, and leverage data-driven platforms for real-world use cases.
              </p>
              
              <h3 className={styles.workTitle}>Our Capabilities</h3>
              <ul className={styles.overviewList}>
                <li>
                  <span className={styles.iconWrapper}>⚡</span>
                  <span>Customer-centric automation using AI-powered voice bots, chatbots, and messaging assistants</span>
                </li>
                <li>
                  <span className={styles.iconWrapper}>🧠</span>
                  <span>Intelligent systems and data-driven platforms for decision-making and operations</span>
                </li>
                <li>
                  <span className={styles.iconWrapper}>⚙️</span>
                  <span>Backend services, APIs, and distributed system architectures</span>
                </li>
                <li>
                  <span className={styles.iconWrapper}>🔄</span>
                  <span>Workflow and process automation across support, operations, and internal teams</span>
                </li>
                <li>
                  <span className={styles.iconWrapper}>🛠️</span>
                  <span>Internal tools, developer platforms, and system modernization</span>
                </li>
              </ul>

              <div className={styles.focusBox}>
                <p>
                  <strong>Our Focus:</strong> Reliability, Scalability, and Real-world Impact. <span className={styles.faded}>No demos, just results.</span>
                </p>
              </div>

              <div className={styles.ctaBox}>
                <p>Open to consulting, MVP development, and long-term engineering partnerships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            Ready to start your journey with AI? Reach out to us today.
          </p>
          <div className={styles.contactForm}>
             {/* Placeholder for contact form */}
             <input type="email" placeholder="Enter your email" className={styles.input} />
             <button className={styles.submitButton}>Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
}
