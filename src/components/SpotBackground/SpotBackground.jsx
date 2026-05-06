import { useMemo } from 'react'
import styles from './SpotBackground.module.css'

function SpotBackground() {
  const spots = useMemo(
    () => [
      { x: 8, y: 12, s: 220, o: 0.9, c: 1, r: -12, d: 38, l: -4 },
      { x: 22, y: 62, s: 260, o: 0.88, c: 2, r: 18, d: 46, l: -12 },
      { x: 38, y: 28, s: 190, o: 0.92, c: 1, r: 6, d: 44, l: -18 },
      { x: 52, y: 10, s: 320, o: 0.84, c: 2, r: -22, d: 60, l: -8 },
      { x: 64, y: 44, s: 240, o: 0.9, c: 1, r: 14, d: 54, l: -16 },
      { x: 78, y: 18, s: 210, o: 0.88, c: 2, r: -6, d: 42, l: -20 },
      { x: 88, y: 62, s: 300, o: 0.82, c: 1, r: 10, d: 66, l: -10 },
      { x: 12, y: 88, s: 340, o: 0.8, c: 2, r: -16, d: 72, l: -22 },
      { x: 42, y: 78, s: 230, o: 0.86, c: 1, r: 22, d: 50, l: -14 },
      { x: 70, y: 86, s: 260, o: 0.84, c: 2, r: -10, d: 58, l: -28 },
      { x: 30, y: 46, s: 330, o: 0.8, c: 2, r: 8, d: 70, l: -30 },
      { x: 58, y: 66, s: 210, o: 0.88, c: 1, r: -18, d: 40, l: -18 },
      { x: 92, y: 34, s: 260, o: 0.82, c: 2, r: 16, d: 62, l: -26 },
      { x: 6, y: 42, s: 280, o: 0.84, c: 1, r: 12, d: 56, l: -34 },
      { x: 84, y: 88, s: 220, o: 0.86, c: 1, r: -24, d: 48, l: -6 },
      { x: 46, y: 96, s: 260, o: 0.82, c: 2, r: 6, d: 64, l: -16 },
    ],
    [],
  )

  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.vignette} />
      <div className={styles.glow} />
      <div className={styles.spots}>
        {spots.map((p) => (
          <span
            key={`${p.x}-${p.y}-${p.s}-${p.r}`}
            className={styles.spot}
            data-tone={p.c}
            style={{
              '--x': `${p.x}%`,
              '--y': `${p.y}%`,
              '--s': `${p.s}px`,
              '--o': p.o,
              '--r': `${p.r}deg`,
              '--d': `${p.d}s`,
              '--l': `${p.l}s`,
            }}
          />
        ))}
      </div>
      <div className={styles.grain} />
    </div>
  )
}

export default SpotBackground

