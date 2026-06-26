import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16,1,0.3,1] }
  })
}

export default function FounderQuoteSection() {
  return (
    <section style={{ background: '#0F0F10', padding: '140px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Background word */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(80px, 18vw, 260px)',
        color: 'rgba(255,255,255,0.03)',
        fontWeight: 900, textTransform: 'uppercase',
        letterSpacing: '-8px', whiteSpace: 'nowrap',
        userSelect: 'none', pointerEvents: 'none',
        lineHeight: 1,
      }}>VISION</div>

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad-desktop)', position: 'relative', zIndex: 2 }}>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          style={{
            width: '60px', height: '3px',
            background: 'var(--accent)',
            marginBottom: '48px',
            transformOrigin: 'left',
          }}
        />

        {/* Quote */}
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5.5vw, 76px)',
            textTransform: 'uppercase',
            letterSpacing: '-1px',
            lineHeight: 1.05,
            color: '#fff',
            maxWidth: '900px',
            marginBottom: '48px',
          }}
        >
          "I don't build startups.{' '}
          <span style={{ color: 'var(--accent)' }}>
            I build systems
          </span>{' '}
          that create startups."
        </motion.blockquote>

        {/* Attribution */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
        >
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontSize: '22px', color: '#000',
            flexShrink: 0,
          }}>K</div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#fff' }}>Karuppasamy M — Mr K</div>
            <div style={{ fontSize: '13px', color: 'var(--secondary)', marginTop: '2px' }}>Founder & CEO, Mr K AI Ecosystem</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
