import { useMemo, useState } from 'react'
import { isValidEmail, sanitizeText } from '../../lib/sanitize.js'
import styles from './ContactForm.module.css'

const DEFAULT_FORM_ENDPOINT = 'https://formspree.io/f/mykopble'

function resolveFormEndpoint() {
  const raw = import.meta.env.VITE_FORMSPREE_ENDPOINT
  if (typeof raw !== 'string') return DEFAULT_FORM_ENDPOINT
  const trimmed = raw.trim().replace(/^['"]|['"]$/g, '')
  return trimmed || DEFAULT_FORM_ENDPOINT
}

const FORM_ENDPOINT = resolveFormEndpoint()

function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  const [subject, setSubject] = useState('Book a Consultation')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const validation = useMemo(() => {
    const s = sanitizeText(subject, { max: 60 })
    const n = sanitizeText(name, { max: 80 })
    const e = sanitizeText(email, { max: 254 })
    const m = sanitizeText(message, { max: 2000 })

    if (!s) return { ok: false, reason: 'Please select a subject.' }
    if (!n) return { ok: false, reason: 'Please add your name.' }
    if (!e) return { ok: false, reason: 'Please add your email.' }
    if (!isValidEmail(e)) return { ok: false, reason: 'Please use a valid email address.' }
    if (!m) return { ok: false, reason: 'Please add a short message about what you need.' }

    return { ok: true, values: { subject: s, name: n, email: e, message: m } }
  }, [subject, name, email, message])

  async function onSubmit(e) {
    e.preventDefault()
    setError('')

    if (!validation.ok) {
      setStatus('error')
      setError(validation.reason)
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          subject: validation.values.subject,
          name: validation.values.name,
          email: validation.values.email,
          message: validation.values.message,
          _subject: `${validation.values.subject} — Murray Electronics LLC`,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        const msg =
          data?.errors?.[0]?.message ||
          `Message failed to send (${res.status}). Please try again in a moment.`
        throw new Error(msg)
      }

      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <label className={styles.label}>
        <span className={styles.labelText}>Subject</span>
        <select
          className={styles.select}
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        >
          <option>Book a Consultation</option>
          <option>General Inquiry</option>
          <option>Pricing Question</option>
          <option>Other</option>
        </select>
      </label>

      <div className={styles.row}>
        <label className={styles.label}>
          <span className={styles.labelText}>Name</span>
          <input
            className={styles.input}
            name="name"
            autoComplete="name"
            inputMode="text"
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className={styles.label}>
          <span className={styles.labelText}>Email</span>
          <input
            className={styles.input}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={254}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      <label className={styles.label}>
        <span className={styles.labelText}>Message</span>
        <textarea
          className={styles.textarea}
          name="message"
          rows={6}
          maxLength={2000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>

      <div className={styles.actions}>
        <button
          className={styles.submit}
          type="submit"
          disabled={status === 'sending'}
        >
          {status === 'sending'
            ? 'Sending…'
            : status === 'sent'
              ? 'Request Consultation'
              : 'Request Consultation'}
        </button>
        <div className={styles.hint}>Replies go directly to your inbox via Formspree.</div>
      </div>

      <div className={styles.live} aria-live="polite">
        {status === 'sent' ? (
          <div className={styles.ok}>Message sent. I’ll reply soon.</div>
        ) : null}
        {status === 'error' ? <div className={styles.err}>{error}</div> : null}
        {!validation.ok && status !== 'sending' && status !== 'sent' ? (
          <div className={styles.validation}>{validation.reason}</div>
        ) : null}
      </div>
    </form>
  )
}

export default ContactForm
