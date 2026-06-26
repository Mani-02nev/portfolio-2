import { motion } from 'framer-motion'

const products = [
  {
    title: 'Mr K AI Law Agent',
    tag: 'AI Agent · Legal Tech',
    desc: 'Intelligent legal assistant powered by AI that provides case law analysis, contract review, and legal document insights with multi-domain legal expertise.',
    tech: ['React', 'NLP', 'Full Stack'],
    live: 'https://pickup-law-agent.vercel.app/',
    github: null,
    image: '/law_agent.png',
  },
  {
    title: 'Agent K',
    tag: 'AI Platform · Autonomous',
    desc: 'Browser-based autonomous AI web agent built with scalable SaaS architecture, supporting multi-model orchestration and browser automation.',
    tech: ['React', 'Python', 'Full Stack'],
    live: 'https://agent02.vercel.app/',
    github: null,
    image: '/agent_k_dashboard.png',
  },
  {
    title: 'AI HR Management System',
    tag: 'AI Platform · Enterprise',
    desc: 'AI-driven HR platform with smart employee analytics, automated attendance tracking, leave management, and intelligent recruitment pipeline.',
    tech: ['Python', 'Machine Learning', 'Full Stack'],
    live: null,
    github: 'https://github.com/Mani-02nev/HRMS',
    image: '/hrms_dashboard.png',
  },
  {
    title: 'KS AI Resume Builder',
    tag: 'AI SaaS',
    desc: 'AI-powered SaaS platform that generates ATS-optimized resumes instantly using structured prompt engineering and real-time customization.',
    tech: ['React', 'AI', 'Full Stack'],
    live: 'https://kscv.vercel.app/',
    github: null,
    image: '/ks_resume_builder.png',
  },
  {
    title: 'AI Sales Intelligence',
    tag: 'AI Platform · Analytics',
    desc: 'Smart sales analytics platform leveraging AI for lead scoring, revenue forecasting, pipeline optimization, and actionable business insights.',
    tech: ['Python', 'Data Analytics', 'Full Stack'],
    live: null,
    github: 'https://github.com/Mani-02nev/Ai-Sales-Inteligence',
    image: '/sales_intelligence.png',
  },
]

export default function ProjectsSection() {
  return (
    <section style={{ background: '#121212', padding: '140px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Ghost */}
      <div style={{
        position: 'absolute', top: '50%', left: '-2%', transform: 'translateY(-50%)',
        fontFamily: 'var(--font-display)', fontSize: 'clamp(80px, 16vw, 220px)',
        color: 'rgba(255,255,255,0.025)', fontWeight: 900, textTransform: 'uppercase',
        letterSpacing: '-6px', userSelect: 'none', pointerEvents: 'none', lineHeight: 1,
      }}>PRODUCTS</div>

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad-desktop)', position: 'relative', zIndex: 2 }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-label">Mr K AI Ecosystem</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', textTransform: 'uppercase', letterSpacing: '-1px', lineHeight: 1, color: '#fff', marginBottom: '80px', marginTop: '8px' }}>
            Products <span style={{ color: 'var(--accent)' }}>Built</span>
          </h2>
        </motion.div>

        {/* Alternating product rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
          {products.map((p, i) => {
            const isEven = i % 2 === 0
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '64px',
                  alignItems: 'center',
                  direction: isEven ? 'ltr' : 'rtl',
                }}
              >
                {/* Screenshot */}
                <div style={{ direction: 'ltr', position: 'relative', borderRadius: '16px', overflow: 'hidden', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    style={{ width: '100%', height: '320px', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseOver={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)' }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
                  />
                  {/* Number watermark */}
                  <div style={{
                    position: 'absolute', top: '16px', left: '16px',
                    fontFamily: 'var(--font-display)', fontSize: '13px',
                    color: 'rgba(255,255,255,0.25)', letterSpacing: '2px',
                    background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
                    padding: '4px 10px', borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}>{String(i+1).padStart(2,'0')}</div>
                </div>

                {/* Content */}
                <div style={{ direction: 'ltr' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>{p.tag}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 44px)', textTransform: 'uppercase', letterSpacing: '-1px', lineHeight: 1.05, color: '#fff', marginBottom: '20px' }}>{p.title}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--secondary)', lineHeight: 1.8, marginBottom: '28px' }}>{p.desc}</p>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '36px' }}>
                    {p.tech.map((t, j) => (
                      <span key={j} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--secondary)' }}>{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        className="btn btn-yellow"
                        style={{ fontSize: '13px', padding: '12px 24px' }}>
                        Live Demo ↗
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ fontSize: '13px', padding: '12px 24px' }}>
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`@media(max-width:900px){.product-row{grid-template-columns:1fr !important; direction:ltr !important;}}`}</style>
    </section>
  )
}
