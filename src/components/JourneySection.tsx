import { motion } from 'framer-motion'

const milestones = [
  { year: '2022', title: 'Started Programming', desc: 'Dived deep into Computer Engineering fundamentals, learning algorithms, data structures, and systems design from first principles.', tag: 'Learning' },
  { year: '2023', title: 'First Internship — Novi Tech', desc: 'Data Analytics internship building interactive BI dashboards and applying statistical techniques to real-world datasets.', tag: 'Internship' },
  { year: '2023', title: 'Started Mentoring', desc: 'Began sharing knowledge with peers through code reviews, campus tech clubs, and peer-to-peer learning sessions.', tag: 'Mentorship' },
  { year: '2024', title: 'AI & ML Engineering', desc: 'Joined VDart Inc. for AI/ML internship — deployed ML models, built NLP pipelines, and contributed to production-grade AI microservices.', tag: 'AI / ML' },
  { year: '2024', title: 'First AI Products', desc: 'Shipped 5+ AI products including Law Agent, HR Management System, and AI Sales Intelligence — all production-grade.', tag: 'Products' },
  { year: '2025', title: 'Founded Mr K AI Ecosystem', desc: 'Launched the AI Ecosystem — a founder-led studio building intelligent SaaS products. Shipped KS Resume Builder and Agent K.', tag: 'Founding' },
  { year: '2026', title: 'Google Campus Ambassador', desc: 'Selected as Google Campus Ambassador — leading developer events, AI workshops, and community programs across the campus.', tag: 'Google' },
  { year: '2026', title: 'Building India\'s AI Future', desc: 'Scaling the ecosystem. Mentoring 50+ developers. Inspiring 200+ students. Speaking at events across India.', tag: 'Now' },
]

export default function JourneySection() {
  return (
    <section style={{ background: '#161616', padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Ghost background */}
      <div style={{
        position: 'absolute', top: '50%', right: '-5%',
        transform: 'translateY(-50%)',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(100px, 20vw, 280px)',
        color: 'rgba(255,255,255,0.025)',
        fontWeight: 900, textTransform: 'uppercase',
        letterSpacing: '-6px', userSelect: 'none', pointerEvents: 'none', lineHeight: 1,
      }}>JOURNEY</div>

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad-desktop)', position: 'relative', zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}>
          <span className="section-label">Founder Timeline</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', textTransform: 'uppercase', letterSpacing: '-1px', lineHeight: 1, color: '#fff', marginBottom: '80px', marginTop: '8px' }}>
            The <span style={{ color: 'var(--accent)' }}>Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '140px', top: 0, bottom: 0,
            width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(255,212,0,0.3) 10%, rgba(255,212,0,0.15) 90%, transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16,1,0.3,1] }}
                style={{ display: 'flex', gap: '0', alignItems: 'flex-start', paddingBottom: '56px', position: 'relative' }}
              >
                {/* Year */}
                <div style={{ width: '140px', flexShrink: 0, paddingTop: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: i === milestones.length - 1 ? 'var(--accent)' : 'rgba(255,255,255,0.2)', letterSpacing: '-1px' }}>{m.year}</span>
                </div>

                {/* Dot */}
                <div style={{
                  width: '12px', height: '12px', borderRadius: '50%', flexShrink: 0,
                  background: i === milestones.length - 1 ? 'var(--accent)' : '#333',
                  border: i === milestones.length - 1 ? '2px solid var(--accent)' : '2px solid #444',
                  marginTop: '6px', marginRight: '0', position: 'relative', zIndex: 1,
                  boxShadow: i === milestones.length - 1 ? '0 0 16px rgba(255,212,0,0.5)' : 'none',
                }} />

                {/* Content */}
                <div style={{ paddingLeft: '40px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>{m.title}</h3>
                    <span style={{
                      fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px',
                      textTransform: 'uppercase', padding: '3px 10px', borderRadius: '100px',
                      background: i === milestones.length - 1 ? 'rgba(255,212,0,0.15)' : 'rgba(255,255,255,0.05)',
                      color: i === milestones.length - 1 ? 'var(--accent)' : 'var(--secondary)',
                      border: `1px solid ${i === milestones.length - 1 ? 'rgba(255,212,0,0.3)' : 'rgba(255,255,255,0.08)'}`,
                    }}>{m.tag}</span>
                  </div>
                  <p style={{ fontSize: '15px', color: 'var(--secondary)', lineHeight: 1.75, maxWidth: '600px' }}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
