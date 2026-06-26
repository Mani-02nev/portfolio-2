export default function CompaniesPage() {
  const companies = [
    {
      name: 'Mr K AI Ecosystem',
      status: 'Active',
      description: 'A founder-led AI ecosystem building intelligent SaaS products across legal, HR, sales, health, and autonomous agent domains.',
      vision: 'To become the premier AI product studio from India, shipping world-class intelligent systems that compete globally.',
      url: 'https://agent02.vercel.app/',
      products: ['Mr K AI Law Agent', 'AI HR Management System', 'AI Sales Intelligence', 'Agent K', 'KS Resume Builder'],
    },
    {
      name: 'Future Ventures',
      status: 'Vision',
      description: 'Expanding into AI infrastructure, developer tools, and education platforms that scale the Mr K mission globally.',
      vision: 'Building the next generation of AI-native companies that redefine how businesses operate.',
      url: null,
      products: [],
    },
  ]

  return (
    <div className="page-wrapper">
      <section className="section">
        <div className="container">
          <span className="section-label">Portfolio</span>
          <h1 className="section-title">Companies <span>Built</span></h1>
          <p className="section-subtitle" style={{ marginBottom: '60px' }}>
            Every company in the Mr K ecosystem is built with one goal — to create real, measurable impact through intelligent systems.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {companies.map((co, i) => (
              <div key={i} className="card" style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', textTransform: 'uppercase', letterSpacing: '1px', color: '#fff' }}>
                      {co.name}
                    </h2>
                    <span style={{
                      fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
                      padding: '4px 12px', borderRadius: '50px',
                      background: co.status === 'Active' ? 'rgba(0,255,128,0.1)' : 'var(--yellow-dim)',
                      color: co.status === 'Active' ? '#00ff80' : 'var(--yellow)',
                    }}>{co.status}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>{co.description}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, fontStyle: 'italic' }}>{co.vision}</p>
                  {co.url && (
                    <a href={co.url} target="_blank" rel="noopener noreferrer"
                      className="btn btn-yellow" style={{ marginTop: '28px', display: 'inline-flex', fontSize: '13px' }}>
                      Visit →
                    </a>
                  )}
                </div>
                {co.products.length > 0 && (
                  <div>
                    <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '16px' }}>Products</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {co.products.map((p, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--yellow)', flexShrink: 0 }} />
                          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
