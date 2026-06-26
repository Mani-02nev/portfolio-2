export default function AboutSection() {
  const values = [
    { icon: "⚡", title: "Velocity", desc: "Ship fast. Iterate daily. A working product beats a perfect plan." },
    { icon: "🧠", title: "Intelligence", desc: "AI isn't the future — it's the present. We embed it in everything we build." },
    { icon: "🌍", title: "Impact", desc: "Every product we launch has a mission beyond revenue." },
    { icon: "🤝", title: "Integrity", desc: "Transparent decisions. No shortcuts. Long-term trust over short-term gain." },
    { icon: "🔥", title: "Resilience", desc: "Started from nothing. Built everything. Failure is part of the blueprint." },
    { icon: "🌱", title: "Growth", desc: "I grow my team, my companies, and myself simultaneously." },
  ]

  return (
    <section id="about" style={{ padding: '100px 0', background: '#0a0a0a' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-badge">FOUNDER STORY</span>
          <h2 className="section-heading">Who Is <span style={{ color: 'var(--color-primary)' }}>Mr K</span>?</h2>
        </div>

        {/* Story Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '80px',
          alignItems: 'start'
        }}>
          {/* Story Text */}
          <div style={{ gridColumn: 'span 1' }}>
            <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '20px', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              The Journey
            </h3>
            <p style={{ color: '#888', lineHeight: '1.85', marginBottom: '18px', fontSize: '15px' }}>
              I'm <strong style={{ color: '#ccc' }}>Karuppasamy M</strong> — known as <strong style={{ color: 'var(--color-primary)' }}>Mr K</strong>. I grew up with a singular obsession: build things that matter at scale. From my earliest days in tech, I saw gaps where AI could completely transform industries.
            </p>
            <p style={{ color: '#888', lineHeight: '1.85', marginBottom: '18px', fontSize: '15px' }}>
              I founded the <strong style={{ color: '#ccc' }}>Mr K AI Ecosystem</strong> with a simple thesis — the best companies are built on intelligence, speed, and purpose. We're not just shipping software; we're engineering competitive advantages for founders, enterprises, and communities.
            </p>
            <p style={{ color: '#888', lineHeight: '1.85', fontSize: '15px' }}>
              As a mentor, I've helped 50+ developers accelerate their careers. As a speaker, I've shared the founder's playbook with 200+ students and entrepreneurs across India.
            </p>
          </div>

          {/* Vision Box */}
          <div style={{
            background: 'rgba(255, 209, 0, 0.04)',
            border: '1px solid rgba(255, 209, 0, 0.15)',
            borderRadius: '12px',
            padding: '36px',
          }}>
            <h3 style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '16px', fontWeight: 700 }}>Mission Statement</h3>
            <p style={{ fontSize: '22px', lineHeight: '1.55', color: '#fff', fontWeight: '500', marginBottom: '28px', fontFamily: 'var(--font-heading)' }}>
              "To build AI-powered companies and ecosystems that solve real-world problems with elegance, scalability, and measurable impact."
            </p>
            <div style={{ borderTop: '1px solid #222', paddingTop: '24px' }}>
              <h4 style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#555', marginBottom: '14px' }}>Leadership Philosophy</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Lead from the trenches — I code, I sell, I mentor",
                  "Build systems that outlast individuals",
                  "Hire for curiosity, train for excellence",
                  "Ship before you're ready — then improve daily"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <span style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }}>▸</span>
                    <span style={{ color: '#888', fontSize: '14px', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', textTransform: 'uppercase', letterSpacing: '2px', color: '#fff' }}>Core Values</h3>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {values.map((val, i) => (
            <div key={i} className="card" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>{val.icon}</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#fff', marginBottom: '10px' }}>{val.title}</h4>
              <p style={{ color: '#666', fontSize: '13px', lineHeight: 1.7 }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
