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
              <div className={styles.brandMeta}>Solo web development • Morgantown, WV</div>
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
                  base. I recently graduated with an A.A.S in Information Systems and I'm continuing
                  toward a four-year degree. Every project is handled with complete care and
                  attention.
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
                        <span className={styles.avatarText}>DM</span>
                      </div>
                      <div>
                        <div className={styles.profileName}>Murray Electronics LLC</div>
                        <div className={styles.profileHandle}>@dominickmurray</div>
                      </div>
                    </div>
                    <div className={styles.profileRole}>Business Owner</div>
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

            <div className={styles.cards}>
              <article className={styles.card}>
                <h3 className={styles.h3}>Portfolio sites</h3>
                <p className={styles.cardText}>
                  A premium single-page portfolio that feels personal, loads fast, and converts.
                </p>
                <ul className={styles.bullets}>
                  <li>Unique look & motion</li>
                  <li>Projects + contact pipeline</li>
                  <li>SEO basics + analytics-ready</li>
                </ul>
              </article>

              <article className={styles.card}>
                <h3 className={styles.h3}>Business websites</h3>
                <p className={styles.cardText}>
                  A small-business presence with strong UX, clear messaging, and crisp mobile
                  performance.
                </p>
                <ul className={styles.bullets}>
                  <li>Accessible + responsive</li>
                  <li>Production security headers</li>
                </ul>
              </article>

              <article className={styles.card}>
                <h3 className={styles.h3}>Front-end builds</h3>
                <p className={styles.cardText}>
                  Clean React components, modern styling, and a maintainable structure that scales.
                </p>
                <ul className={styles.bullets}>
                  <li>Component-level CSS Modules</li>
                  <li>Design tokens + consistency</li>
                  <li>Performance-first delivery</li>
                </ul>
              </article>
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
                  <div className={styles.projectTitle}>Clear Flow Plumbing</div>
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
                  <div className={styles.projectTitle}>Evergreen General Hospital</div>
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
                  <li>Performance budget thinking</li>
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
                <div className={styles.notice}>
                  <div className={styles.noticeTitle}>Security note</div>
                  <div className={styles.noticeText}>
                    This form submits directly to Formspree over HTTPS. No passwords or sensitive
                    personal data, please.
                  </div>
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
