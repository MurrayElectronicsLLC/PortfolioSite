export function sanitizeText(value, { max = 2000 } = {}) {
  if (typeof value !== 'string') return ''
  let out = ''
  for (let i = 0; i < value.length; i += 1) {
    const code = value.charCodeAt(i)
    if (code === 0x7f || code < 0x20) continue
    out += value[i]
  }
  const trimmed = out.trim()
  if (trimmed.length <= max) return trimmed
  return trimmed.slice(0, max)
}

export function isValidEmail(value) {
  if (typeof value !== 'string') return false
  const v = value.trim()
  if (v.length > 254) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v)
}

