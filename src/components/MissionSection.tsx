import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const values = [
  { number: '01', title: 'Impact First', desc: 'Every product must create tangible value for real people and businesses. Revenue follows impact — not the other way around.' },
  { number: '02', title: 'Ship Fast', desc: 'A working product beats a perfect plan. We iterate daily, learn constantly, and improve in public.' },
  { number: '03', title: 'Build with Intelligence', desc: 'AI isn\'t the future — it\'s the present. We embed intelligence into everything we build.' },
  { number: '04', title: 'Lead with Integrity', desc: 'Transparent decisions. No shortcuts. Long-term trust over short-term gain. Every time.' },
]

export default function MissionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const typoY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section ref={ref} style={{ background: '#0D0D0E', padding: '160px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Parallax background word */}
      <motion.div style={{ y: typoY, position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(100px, 22vw, 320px)',
          fontWeight: 900, textTransform: 'uppercase',
          letterSpacing: '-10px',
          color: 'rgba(255,255,255,0.03)',
          lineHeight: 1, userSelect: 'none', whiteSpace: 'nowrap',
        }}>MISSION</div>
      </motion.div>

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad-desktop)', position: 'relative', zIndex: 2 }}>

        {/* Gold accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16,1,0.3,1] }}
          style={{ width: '80px', height: '3px', background: 'var(--accent)', marginBottom: '56px', transformOrigin: 'left' }}
        />

        {/* Large mission statement */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 6vw, 88px)',
            textTransform: 'uppercase',
            letterSpacing: '-2px',
            lineHeight: 1.05,
            color: '#fff',
            maxWidth: '900px',
            marginBottom: '80px',
          }}
        >
          To build India's largest{' '}
          <span style={{ color: 'var(--accent)' }}>AI ecosystem</span>{' '}
          that empowers students,{' '}
          <span style={{ color: 'var(--accent)' }}>developers,</span>{' '}
          and founders.
        </motion.h2>

        {/* Background words row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            display: 'flex', gap: '40px', marginBottom: '100px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            padding: '28px 0',
          }}
        >
          {['BUILD.', 'LEARN.', 'LEAD.', 'IMPACT.'].map((w, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 52px)',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              color: i % 2 === 0 ? 'rgba(255,255,255,0.08)' : 'rgba(255,212,0,0.2)',
            }}>{w}</span>
          ))}
        </motion.div>

        {/* Values — horizontal list, not cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '60px 80px' }}>
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16,1,0.3,1] }}
            >
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '52px', color: 'rgba(255,212,0,0.15)',
                  lineHeight: 1, flexShrink: 0, letterSpacing: '-2px',
                }}>{v.number}</span>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{v.title}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--secondary)', lineHeight: 1.75 }}>{v.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
