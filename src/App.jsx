import { useMemo, useRef, useState } from 'react'
import SpotBackground from './components/SpotBackground/SpotBackground.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import styles from './App.module.css'

function App() {
  const sections = useMemo(
    () => [
      { id: 'services', label: 'Services' },
      { id: 'projects', label: 'Projects' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  )

  const mainRef = useRef(null)
  const [activePreview, setActivePreview] = useState(null)

  function scrollToId(id) {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const top8 = useMemo(
    () => [
      { label: 'HTML', icon: 'HTML' },
      { label: 'CSS', icon: 'CSS' },
      { label: 'JS', icon: 'JS' },
      { label: 'Next.js', icon: 'N' },
      { label: 'Python', icon: 'PY' },
      { label: 'Git', icon: 'GIT' },
      { label: 'GitHub', icon: 'GH' },
      { label: 'Vercel', icon: 'V' },
    ],
    [],
  )

  return (
    <div className={styles.shell}>
      <SpotBackground />

      <a className={styles.skipLink} href="#content">
        Skip to content
      </a>

      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true" />
            <div className={styles.brandText}>
              <div className={styles.brandName}>Murray Electronics LLC</div>
              <div className={styles.brandMeta}>Web Developer</div>
            </div>
          </div>

          <nav className={styles.nav} aria-label="Primary">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                className={styles.navLink}
                onClick={() => scrollToId(s.id)}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className={styles.headerCta}>
            <button
              type="button"
              className={styles.primaryButton}
              onClick={() => scrollToId('contact')}
            >
              Request a quote
            </button>
          </div>
        </div>
      </header>

      <main id="content" ref={mainRef} className={styles.main}>
        <section className={styles.hero} aria-label="Introduction">
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <h1 className={styles.h1}>
                  Warm, bold websites that feel alive.
                </h1>
                <p className={styles.lede}>
                  Hi, my name is Dominick, owner of Murray Electronics, based out of Morgantown, WV.
                  I build sites for businesses that are looking to expand their reach and grow their
                  customer base. I recently graduated with an A.A.S in Information Systems and plan on continuing
                  my education with a Bachelor's degree. Every project receives the utmost care and
                  precision.
                </p>
                <div className={styles.heroActions}>
                  <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={() => scrollToId('projects')}
                  >
                    View work
                  </button>
                  <button
                    type="button"
                    className={styles.secondaryButton}
                    onClick={() => scrollToId('services')}
                  >
                    Services & pricing
                  </button>
                </div>
                <div className={styles.top8Wrap} aria-label="Top 8 tech">
                  <div className={styles.top8Label}>Skills</div>
                  <div className={styles.top8Grid}>
                    {top8.map((t) => (
                      <div key={t.label} className={styles.top8Tile}>
                        <div className={styles.top8Icon} aria-hidden="true">
                          {t.icon}
                        </div>
                        <div className={styles.top8Name}>{t.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.heroCard} role="presentation" aria-hidden="true">
                <div className={styles.heroCardInner}>
                  <div className={styles.profileCard}>
                    <div className={styles.profileTop}>
                      <div className={styles.avatar} aria-hidden="true">
                        <span className={styles.avatarText}>ME</span>
                      </div>
                      <div>
                        <div className={styles.profileName}>Murray Electronics LLC</div>
                        <div className={styles.profileHandle}>@dominickmurray</div>
                      </div>
                    </div>
                    <div className={styles.profileRole}>Owner</div>
                    {/* REPLACE WITH PHOTO */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.h2}>Services</h2>
            <p className={styles.muted}>
              Focused offerings for small businesses and personal brands, clear scope, clean builds,
              and a launch that's ready to drive business growth.
            </p>

            <div className={styles.pricingGrid} aria-label="Service tiers">
              <article className={styles.tierCard}>
                <div className={styles.tierTop}>
                  <h3 className={styles.h3}>Template</h3>
                </div>
                <div className={styles.tierPrice}>
                  <span className={styles.tierPriceLabel}>Starting at</span>
                  <span className={styles.tierPriceValue}>$500</span>
                </div>
                <p className={styles.cardText}>
                  We consult, you share your vision, and we present you with a curated selection of
                  templates built around your brand and goals.
                </p>
                <ul className={styles.bullets}>
                  <li>Consultation & discovery call</li>
                  <li>Template selection & customization</li>
                  <li>Mobile & desktop responsive</li>
                  <li>Contact form setup</li>
                  <li>Domain & deployment</li>
                  <li>Basic SEO setup</li>
                  <li>2 rounds of revisions</li>
                </ul>
                <button
                  type="button"
                  className={styles.tierCta}
                  onClick={() => scrollToId('contact')}
                >
                  Book a Consultation
                </button>
              </article>

              <article className={`${styles.tierCard} ${styles.tierCardPopular}`}>
                <div className={styles.tierTop}>
                  <h3 className={styles.h3}>Custom</h3>
                  <span className={styles.badgeAmber}>Most Popular</span>
                </div>
                <div className={styles.tierPrice}>
                  <span className={styles.tierPriceLabel}>Starting at</span>
                  <span className={styles.tierPriceValue}>$900</span>
                </div>
                <p className={styles.cardText}>
                  A fully custom build designed around your business. Ideal for retail, e-commerce,
                  drop shipping, or anything that needs more than a standard presence.
                </p>
                <ul className={styles.bullets}>
                  <li>Everything in Template</li>
                  <li>Unique design, built from scratch</li>
                  <li>More complex layouts & functionality</li>
                  <li>E-commerce & retail ready</li>
                  <li>3–4 rounds of revisions depending on scope</li>
                </ul>
                <button
                  type="button"
                  className={styles.tierCta}
                  onClick={() => scrollToId('contact')}
                >
                  Book a Consultation
                </button>
              </article>
            </div>

            <div className={styles.compareWrap} aria-label="Template vs Custom comparison">
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Template</th>
                    <th scope="col">Custom</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Consultation call</th>
                    <td className={styles.cellYes}>✓</td>
                    <td className={styles.cellYes}>✓</td>
                  </tr>
                  <tr>
                    <th scope="row">Mobile & desktop responsive</th>
                    <td className={styles.cellYes}>✓</td>
                    <td className={styles.cellYes}>✓</td>
                  </tr>
                  <tr>
                    <th scope="row">Contact form</th>
                    <td className={styles.cellYes}>✓</td>
                    <td className={styles.cellYes}>✓</td>
                  </tr>
                  <tr>
                    <th scope="row">Basic SEO</th>
                    <td className={styles.cellYes}>✓</td>
                    <td className={styles.cellYes}>✓</td>
                  </tr>
                  <tr>
                    <th scope="row">Domain & deployment</th>
                    <td className={styles.cellYes}>✓</td>
                    <td className={styles.cellYes}>✓</td>
                  </tr>
                  <tr>
                    <th scope="row">Template-based design</th>
                    <td className={styles.cellYes}>✓</td>
                    <td className={styles.cellDash}>—</td>
                  </tr>
                  <tr>
                    <th scope="row">Custom design from scratch</th>
                    <td className={styles.cellDash}>—</td>
                    <td className={styles.cellYes}>✓</td>
                  </tr>
                  <tr>
                    <th scope="row">E-commerce ready</th>
                    <td className={styles.cellDash}>—</td>
                    <td className={styles.cellYes}>✓</td>
                  </tr>
                  <tr>
                    <th scope="row">Revision rounds</th>
                    <td>2</td>
                    <td>3–4</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.hostingWrap} aria-label="Hosting and maintenance plans">
              <div className={styles.hostingHeader}>
                <h3 className={styles.h3}>Hosting &amp; maintenance</h3>
                <div className={styles.hostingDisclaimers}>
                  <p className={styles.hostingNote}>
                    All hosting plans require an active site built or transferred through Murray
                    Electronics LLC. Custom plans available on request.
                  </p>
                  <p className={styles.hostingFinePrint}>
                    Hosting rates are base pricing. High-traffic sites or projects requiring
                    additional resources may be subject to adjusted pricing — discussed and agreed
                    upon before any changes are made.
                  </p>
                </div>
              </div>
              <div className={styles.cards}>
                <article className={styles.card}>
                  <div className={styles.hostingTop}>
                    <div className={styles.hostingName}>Basic</div>
                    <div className={styles.hostingPrice}>$25/mo</div>
                  </div>
                  <p className={styles.cardText}>
                    Covers the essentials to keep your site live, backed up, and running smoothly.
                  </p>
                </article>

                <article className={styles.card}>
                  <div className={styles.hostingTop}>
                    <div className={styles.hostingName}>Standard</div>
                    <div className={styles.hostingPrice}>$60/mo</div>
                  </div>
                  <p className={styles.cardText}>
                    Everything in Basic, plus hands-on support for updates and ongoing performance.
                  </p>
                </article>

                <article className={styles.card}>
                  <div className={styles.hostingTop}>
                    <div className={styles.hostingName}>Pro</div>
                    <div className={styles.hostingPrice}>$120/mo</div>
                  </div>
                  <p className={styles.cardText}>
                    Full ongoing support, regular check-ins, and priority access — for businesses
                    that want consistent attention.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.h2}>Projects</h2>
            <p className={styles.muted}>
              Mock projects demonstrate the kinds of sites I build for clients — branding, structure,
              responsiveness, and polish.
            </p>

            <div className={styles.projectGrid}>
              <article className={styles.projectCard}>
                <div className={styles.projectTop}>
                  <div className={styles.projectTitle}>Clear Flow</div>
                  <div className={styles.projectTag}>Local Business · Branding Website</div>
                </div>
                <div className={styles.projectPreviewWrap}>
                  <img
                    className={styles.projectPreviewImg}
                    src="/projects/clear-flow.png"
                    alt="Clear Flow Plumbing preview"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className={styles.cardText}>
                  A single-page site for a fictional plumbing company. Focused on clean layout,
                  service presentation, and mobile responsiveness.
                </p>
                <div className={styles.projectMeta}>
                  <span className={styles.chip}>HTML</span>
                  <span className={styles.chip}>CSS</span>
                  <span className={styles.chip}>Vanilla JS</span>
                </div>
                <div className={styles.projectActions}>
                  {/* REPLACE WITH DEPLOYED URL */}
                  <a
                    className={styles.projectLink}
                    href="https://clear-flow-mock-website-portfolio.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  {/* REPLACE WITH DEPLOYED URL */}
                  <a className={styles.projectLink} href="#" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <button
                    type="button"
                    className={styles.previewButton}
                    onClick={() => setActivePreview('clear-flow')}
                  >
                    Preview
                  </button>
                </div>
              </article>

              <article className={styles.projectCard}>
                <div className={styles.projectTop}>
                  <div className={styles.projectTitle}>General Hospital</div>
                  <div className={styles.projectTag}>Healthcare · Service-Focused Website</div>
                </div>
                <div className={styles.projectPreviewWrap}>
                  <img
                    className={styles.projectPreviewImg}
                    src="/projects/evergreen.png"
                    alt="Evergreen General Hospital preview"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className={styles.cardText}>
                  A multi-section hospital site with accordion departments, a doctor search UI, and a
                  full patient information section.
                </p>
                <div className={styles.projectMeta}>
                  <span className={styles.chip}>HTML</span>
                  <span className={styles.chip}>CSS</span>
                  <span className={styles.chip}>Vanilla JS</span>
                </div>
                <div className={styles.projectActions}>
                  {/* REPLACE WITH DEPLOYED URL */}
                  <a
                    className={styles.projectLink}
                    href="https://ever-green-hospital-mock-website.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  {/* REPLACE WITH DEPLOYED URL */}
                  <a className={styles.projectLink} href="#" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <button
                    type="button"
                    className={styles.previewButton}
                    onClick={() => setActivePreview('evergreen')}
                  >
                    Preview
                  </button>
                </div>
              </article>

              <article className={styles.projectCard}>
                <div className={styles.projectTop}>
                  <div className={styles.projectTitle}>Nexus</div>
                  <div className={styles.projectTag}>SaaS · Product Marketing Site</div>
                </div>
                <div className={styles.projectPreviewWrap}>
                  <img
                    className={styles.projectPreviewImg}
                    src="/projects/nexus.png"
                    alt="Nexus preview"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className={styles.cardText}>
                  A dark, glassmorphism product site with animated components, a pricing toggle,
                  scroll-triggered animations, and a React component architecture.
                </p>
                <div className={styles.projectMeta}>
                  <span className={styles.chip}>React</span>
                  <span className={styles.chip}>Vite</span>
                  <span className={styles.chip}>CSS Modules</span>
                </div>
                <div className={styles.projectActions}>
                  {/* REPLACE WITH DEPLOYED URL */}
                  <a
                    className={styles.projectLink}
                    href="https://3rd-port-site.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  {/* REPLACE WITH DEPLOYED URL */}
                  <a className={styles.projectLink} href="#" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <button
                    type="button"
                    className={styles.previewButton}
                    onClick={() => setActivePreview('nexus')}
                  >
                    Preview
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.h2}>About</h2>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutCard}>
                <h3 className={styles.h3}>Who you’re hiring</h3>
                <p className={styles.cardText}>
                  My background is technical — I recently graduated with a degree in Information
                  Systems and I'm continuing my education with purpose. Staying current means the
                  sites I build stay modern, load fast, and are built on practices that hold up over
                  time rather than cutting corners that cost you later.
                </p>
              </div>

              <div className={styles.aboutCard}>
                <h3 className={styles.h3}>How I build</h3>
                <ul className={styles.bullets}>
                  <li>Design systems that stay consistent under growth</li>
                  <li>Accessible, responsive layout as a first-class feature</li>
                  <li>Security-minded defaults for a live public site</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.h2}>Contact</h2>
            <p className={styles.muted}>
              Have a project in mind? Reach out for a free consultation and we can discuss your
              needs — no pressure, no commitment.
            </p>
            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <h3 className={styles.h3}>Send a message</h3>
                <ContactForm />
              </div>
              <div className={styles.contactCard}>
                <h3 className={styles.h3}>What to include</h3>
                <ul className={styles.bullets}>
                  <li>What you do / who the site is for</li>
                  <li>Pages/sections you need (and any examples you like)</li>
                  <li>Deadline + budget range</li>
                </ul>
                <div className={styles.contactAside}>
                  <p className={styles.cardText}>
                    You can expect a response within 48 hours — usually sooner on business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerBrand}>Murray Electronics LLC</div>
              <div className={styles.footerMeta}>Morgantown, WV • Solo web development</div>
            </div>
            <div className={styles.footerLinks}>
              {sections.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={styles.footerLink}
                  onClick={() => scrollToId(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.footerFine}>
            © {new Date().getFullYear()} Murray Electronics LLC. Built with React + Vite.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
