import { useState, useEffect } from 'react'

const roles = ["FOUNDER & CEO", "AI BUILDER", "ENTREPRENEUR", "MENTOR", "SPEAKER"]

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  const stats = [
    { value: "1+", label: "Companies Built" },
    { value: "9+", label: "Products Shipped" },
    { value: "50+", label: "Developers Mentored" },
    { value: "200+", label: "Students Inspired" },
  ]

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '90px',
      paddingBottom: '60px',
      background: 'var(--color-black)'
    }}>

      {/* Ambient Background Text */}
      <div key={index} style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(60px, 14vw, 220px)',
        fontFamily: 'var(--font-heading)',
        color: 'rgba(255, 209, 0, 0.04)',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '4px',
        zIndex: 0,
        animation: 'fadeInOut 2.5s ease-in-out infinite'
      }}>
        {roles[index]}
      </div>

      <div className="container" style={{ zIndex: 10, width: '100%' }}>

        {/* Hero Content — Two Column */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'center',
          marginBottom: '60px'
        }}>

          {/* Left Column — Text */}
          <div>
            <span style={{
              background: 'var(--color-primary)',
              color: 'var(--color-black)',
              padding: '5px 14px',
              borderRadius: '50px',
              fontSize: '12px',
              fontWeight: 'bold',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '20px'
            }}>
              Founder & CEO
            </span>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 5.5vw, 70px)',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: '#fff',
              lineHeight: 1.05,
              marginBottom: '16px'
            }}>
              Hi, I'm <span style={{ color: 'var(--color-primary)' }}>Mr K</span>
            </h1>

            <h2 style={{
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              color: '#ddd',
              fontWeight: '500',
              marginBottom: '24px',
              lineHeight: 1.35
            }}>
              I Build AI Companies That Create Real Impact.
            </h2>

            <p style={{
              fontSize: '16px',
              color: '#888',
              lineHeight: '1.75',
              marginBottom: '16px',
              maxWidth: '520px'
            }}>
              To build AI-powered companies and ecosystems that solve real-world problems with elegance, scalability, and measurable impact.
            </p>

            <p style={{
              fontSize: '14px',
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '40px',
              maxWidth: '480px',
              fontStyle: 'italic'
            }}>
              Founder of Mr K AI Ecosystem — mentoring the next generation of builders and speaking on the future of AI-driven entrepreneurship.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#speaking" className="btn-primary" style={{ textDecoration: 'none', padding: '14px 30px', fontSize: '14px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Book Me for Speaking
              </a>
              <a href="#contact" className="btn-outline" style={{ textDecoration: 'none', padding: '14px 30px', fontSize: '14px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Contact Me
              </a>
            </div>

            {/* Social Links Row */}
            <div style={{ display: 'flex', gap: '20px', marginTop: '30px', alignItems: 'center' }}>
              <a href="https://github.com/Mani-02nev" target="_blank" rel="noopener noreferrer" style={{ color: '#555', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseOut={(e) => (e.currentTarget.style.color = '#555')}>GitHub ↗</a>
              <a href="https://www.linkedin.com/in/karuppasamy-m-b39995377/" target="_blank" rel="noopener noreferrer" style={{ color: '#555', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseOut={(e) => (e.currentTarget.style.color = '#555')}>LinkedIn ↗</a>
              <a href="mailto:karuppasamy.murugesan02@gmail.com" style={{ color: '#555', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseOut={(e) => (e.currentTarget.style.color = '#555')}>Email ↗</a>
            </div>
          </div>

          {/* Right Column — Photo */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,209,0,0.12) 0%, transparent 70%)',
              zIndex: 0
            }} />
            <img
              src="/hero-image.png"
              alt="Karuppasamy M — Mr K, Founder & CEO"
              style={{
                width: '100%',
                maxWidth: '420px',
                height: 'auto',
                objectFit: 'contain',
                position: 'relative',
                zIndex: 1,
                filter: 'drop-shadow(0 20px 60px rgba(255,209,0,0.08))'
              }}
            />
          </div>
        </div>

        {/* Social Proof Stats Bar */}
        <div style={{
          borderTop: '1px solid #1a1a1a',
          borderBottom: '1px solid #1a1a1a',
          padding: '30px 0',
          display: 'grid',
          gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
          gap: '20px'
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '36px',
                fontWeight: 'bold',
                color: 'var(--color-primary)',
                lineHeight: 1
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: '12px', color: '#555', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
