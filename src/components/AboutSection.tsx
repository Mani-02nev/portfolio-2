export default function AboutSection() {
  const values = [
    { title: "Impact First", desc: "Every product must create tangible value for real people and businesses." },
    { title: "Excellence", desc: "Engineering maturity meets innovation — no shortcuts, no compromise on quality." },
    { title: "Leadership", desc: "Guide teams and communities with empathy, clarity, and accountability." },
    { title: "Continuous Learning", desc: "Rapid learning velocity — stay ahead of the curve in AI and systems engineering." },
    { title: "Integrity", desc: "Professional ethics, reliability, and engineering discipline in every decision." }
  ]

  return (
    <section id="about" className="visionary-section bg-primary" style={{ padding: '80px 0', color: 'var(--color-black)' }}>
      <div className="container">
        
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' }}>
          Engineering Maturity Meets Innovation
        </h2>
        
        <p style={{ fontSize: '20px', maxWidth: '900px', margin: '0 auto 40px auto', lineHeight: '1.6', fontWeight: 500 }}>
          As a Computer Engineering graduate, I've built a solid foundation in computer science principles. My journey is defined by a relentless drive to solve complex problems using intelligent systems, enterprise AI solutions at VDart, and developer community leadership through Google programs.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', margin: '40px 0', textAlign: 'left' }}>
          
          {/* Mission & Vision Column */}
          <div style={{ background: 'rgba(0,0,0,0.05)', padding: '30px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', textTransform: 'uppercase', marginBottom: '15px' }}>
              Mission
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '25px', color: '#111' }}>
              To build AI-powered companies and ecosystems that solve real-world problems with elegance, scalability, and measurable impact.
            </p>
            
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', textTransform: 'uppercase', marginBottom: '15px' }}>
              Vision
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#111' }}>
              A world where intelligent systems empower every founder, student, and engineer to build products that matter — led by the Mr K AI Ecosystem.
            </p>
          </div>

          {/* Core Values Column */}
          <div style={{ background: 'rgba(0,0,0,0.05)', padding: '30px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', textTransform: 'uppercase', marginBottom: '15px' }}>
              Core Values
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {values.map((v, i) => (
                <div key={i}>
                  <strong style={{ fontSize: '16px', color: '#000' }}>• {v.title}:</strong>
                  <span style={{ fontSize: '14px', color: '#222', marginLeft: '5px', lineHeight: '1.4' }}>{v.desc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Highlights & Resume */}
        <div style={{ marginTop: '40px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '40px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '30px', fontSize: '15px', fontWeight: 'bold' }}>
            <span style={{ background: '#000', color: 'var(--color-primary)', padding: '8px 18px', borderRadius: '4px' }}>
              🏫 SIT Trichy
            </span>
            <span style={{ background: '#000', color: 'var(--color-primary)', padding: '8px 18px', borderRadius: '4px' }}>
              🚀 VDart & Novi Tech AI Experience
            </span>
            <span style={{ background: '#000', color: 'var(--color-primary)', padding: '8px 18px', borderRadius: '4px' }}>
              🌐 Google Campus Leader
            </span>
          </div>

          <a 
            href="/certificates/KARUPPASAMY M.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary" 
            style={{ 
              backgroundColor: '#000', 
              color: 'var(--color-primary)', 
              border: '2px solid #000', 
              padding: '14px 32px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontSize: '15px',
              display: 'inline-block',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#000';
              e.currentTarget.style.color = 'var(--color-primary)';
            }}
          >
            Download Resume &rarr;
          </a>
        </div>

      </div>
    </section>
  )
}
