import { motion } from 'framer-motion'

const communityItems = [
  { label: 'Google Dev Events', icon: '🎤', desc: 'Campus Ambassador hosting AI workshops, cloud study jams and developer events.' },
  { label: 'AI Workshops', icon: '🧠', desc: 'Hands-on sessions teaching students to build production-grade AI applications.' },
  { label: 'Hackathons', icon: '⚡', desc: 'Mentoring and judging technical hackathons across Trichy colleges.' },
  { label: 'Code Reviews', icon: '💻', desc: 'Weekly peer code reviews helping junior developers level up their craft.' },
  { label: 'Product Demo Days', icon: '🚀', desc: 'Mr K AI Ecosystem product showcases for students, developers, and founders.' },
  { label: 'Startup Sessions', icon: '🏗️', desc: 'Founder mindset workshops for aspiring student entrepreneurs.' },
]

const stats = [
  { value: '50+', label: 'Developers Mentored' },
  { value: '200+', label: 'Students Inspired' },
  { value: '15+', label: 'Events Organized' },
  { value: '3+', label: 'Communities Led' },
]

export default function CommunitySection() {
  return (
    <section style={{ background: '#0A0A0B', padding: '140px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Large accent glow */}
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(255,212,0,0.05) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad-desktop)', position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <div className="community-header-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end', marginBottom: '80px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-label">Community</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', textTransform: 'uppercase', letterSpacing: '-1px', lineHeight: 1, color: '#fff', marginTop: '8px' }}>
              People <span style={{ color: 'var(--accent)' }}>First.</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }}
            style={{ fontSize: '17px', color: 'var(--secondary)', lineHeight: 1.8 }}>
            The strongest part of the Mr K ecosystem isn't the products — it's the people. From Google campus events to late-night code reviews, every interaction is designed to inspire someone to start building.
          </motion.p>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="community-stats-grid"
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '20px', padding: '40px', gap: '0',
            marginBottom: '60px',
          }}
        >
          {stats.map((s, i) => (
            <div key={i} className="community-stat-item" style={{
              textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              padding: '0 20px',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '56px', letterSpacing: '-2px', color: '#fff', lineHeight: 1 }}>
                {s.value.replace('+', '')}<span style={{ color: 'var(--accent)' }}>+</span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--secondary)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '8px' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Community grid */}
        <div className="community-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {communityItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16,1,0.3,1] }}
              whileHover={{ y: -6, borderColor: 'rgba(255,212,0,0.2)' }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                padding: '32px',
                cursor: 'default',
                transition: 'border-color 0.3s',
              }}
            >
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{item.label}</h3>
              <p style={{ fontSize: '14px', color: 'var(--secondary)', lineHeight: 1.7 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Google badge */}
        <motion.div
          className="google-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            marginTop: '60px',
            display: 'flex', alignItems: 'center', gap: '20px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px', padding: '24px 32px',
          }}
        >
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>G</div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>Google Campus Ambassador 2026</div>
            <div style={{ fontSize: '13px', color: 'var(--secondary)' }}>Representing Google Developer ecosystem — organizing workshops, study jams, and tech events on campus.</div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .community-header-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            margin-bottom: 48px !important;
          }
          .community-stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px 0 !important;
            padding: 24px 16px !important;
          }
          .community-stat-item {
            border-right: none !important;
            padding: 0 8px !important;
          }
          .community-stat-item:nth-child(odd) {
            border-right: 1px solid rgba(255,255,255,0.06) !important;
          }
          .community-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .google-badge {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 20px !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
