import { chromium } from 'playwright'
import path from 'node:path'

const OUT_DIR = path.resolve('public/projects')
const VIEWPORT = { width: 1600, height: 900 }
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'

const PROJECTS = [
  {
    slug: 'clear-flow',
    url: 'https://clear-flow-mock-website-portfolio.vercel.app/',
  },
  {
    slug: 'evergreen',
    url: 'https://ever-green-hospital-mock-website.vercel.app/',
  },
  {
    slug: 'nexus',
    url: 'https://3rd-port-site.vercel.app/',
  },
]

const browser = await chromium.launch({
  channel: 'chrome',
  args: ['--disable-blink-features=AutomationControlled'],
})

const context = await browser.newContext({
  viewport: VIEWPORT,
  deviceScaleFactor: 2,
  userAgent: USER_AGENT,
  locale: 'en-US',
  extraHTTPHeaders: {
    'Accept-Language': 'en-US,en;q=0.9',
  },
})

await context.addInitScript(() => {
  // Some sites block obvious automation signals.
  // eslint-disable-next-line no-undef
  Object.defineProperty(navigator, 'webdriver', { get: () => undefined })
})

const page = await context.newPage()

for (const p of PROJECTS) {
  const outPath = path.join(OUT_DIR, `${p.slug}.png`)
  // eslint-disable-next-line no-console
  console.log(`Capturing ${p.slug}: ${p.url} -> ${outPath}`)

  await page.goto(p.url, { waitUntil: 'networkidle', timeout: 90_000 })
  await page.waitForTimeout(750)
  await page.screenshot({ path: outPath, fullPage: false })
}

await browser.close()

