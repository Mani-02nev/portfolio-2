import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.7, ease: [0.16,1,0.3,1] } })
}

export default function AboutSection() {
  return (
    <section style={{ background: '#111111', padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad-desktop)' }}>

        {/* Top label */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="section-label">Founder Story</span>
        </motion.div>

        {/* 2-column magazine layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start', marginTop: '16px' }}>

          {/* Left — oversized heading */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(52px, 7vw, 100px)',
              textTransform: 'uppercase',
              letterSpacing: '-2px',
              lineHeight: 0.95,
              color: '#fff',
              marginBottom: '40px',
            }}>
              Who<br />Is<br /><span style={{ color: 'var(--accent)' }}>Mr K?</span>
            </h2>

            {/* Image block */}
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden' }}>
              <img
                src="/about.png"
                alt="Mr K — Founder"
                style={{
                  width: '100%', height: '420px',
                  objectFit: 'cover', objectPosition: 'top center',
                  filter: 'grayscale(100%) contrast(1.1) brightness(0.92)',
                  display: 'block',
                }}
              />
              {/* Gold overlay strip */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '4px', background: 'var(--accent)',
              }} />
            </div>
          </motion.div>

          {/* Right — story content */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}
            style={{ paddingTop: '20px' }}>

            <p style={{ fontSize: '18px', lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: '28px', fontWeight: 400 }}>
              I'm <strong style={{ color: '#fff' }}>Karuppasamy M</strong> — known as <strong style={{ color: 'var(--accent)' }}>Mr K</strong>. A Computer Engineering student at Seshasayee Institute of Technology, Trichy, who decided to build real AI companies before graduating.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--secondary)', marginBottom: '28px' }}>
              I founded the <strong style={{ color: '#ccc' }}>Mr K AI Ecosystem</strong> — a portfolio of intelligent SaaS products across legal, HR, sales, health, and autonomous agent domains. Every product is production-grade and solves real business problems.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--secondary)', marginBottom: '40px' }}>
              As a <strong style={{ color: '#ccc' }}>Google Campus Ambassador</strong>, I lead developer communities, organize AI workshops, and mentor the next generation of builders. My mission is simple — build systems that outlast individuals and create lasting impact.
            </p>

            {/* Key highlights — horizontal list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { label: 'Education', value: 'Seshasayee Institute of Technology, Trichy' },
                { label: 'Role', value: 'Founder & CEO, Mr K AI Ecosystem' },
                { label: 'Ambassador', value: 'Google Campus Ambassador 2026' },
                { label: 'Experience', value: 'VDart Inc. · Novi Tech · Google' },
                { label: 'Location', value: 'Trichy, India · Open to Global' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '20px',
                  padding: '16px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <span style={{ fontSize: '12px', color: 'var(--secondary)', letterSpacing: '1.5px', textTransform: 'uppercase', width: '110px', flexShrink: 0, paddingTop: '2px' }}>{item.label}</span>
                  <span style={{ fontSize: '14px', color: '#fff', lineHeight: 1.5 }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`@media(max-width:900px){.about-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}
