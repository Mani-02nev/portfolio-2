import { useState, useEffect } from 'react'

const titles = ["ENTREPRENEUR", "FOUNDER & CEO", "AI BUILDER", "MENTOR", "SPEAKER"]

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '100px' }}>
      {/* Background Animated Text */}
      <h1 key={index} className="animated-bg-text" style={{ userSelect: 'none', pointerEvents: 'none' }}>
        {titles[index]}
      </h1>

      <div className="container" style={{ width: '100%', zIndex: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          
          <span style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-black)', padding: '6px 16px', borderRadius: '50px', fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Founder & CEO
          </span>

          <h2 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontFamily: 'var(--font-heading)', fontWeight: 'bold', textTransform: 'uppercase', color: '#fff', margin: '0 0 15px 0', lineHeight: 1.1 }}>
            Hi, I'm <span style={{ color: 'var(--color-primary)' }}>Mr K</span>
          </h2>
          
          <h3 style={{ fontSize: 'clamp(20px, 3vw, 36px)', color: '#eaeaea', fontWeight: '600', marginBottom: '25px', maxWidth: '800px' }}>
            I Build AI Companies That Create Real Impact.
          </h3>

          <p style={{ fontSize: '18px', color: '#bbb', maxWidth: '750px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
            Founder of Mr K AI Ecosystem — building intelligent systems, mentoring the next generation of builders, and speaking on the future of AI-driven entrepreneurship.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
            <a href="#products" className="btn-primary">
              View Work &rarr;
            </a>
            <a href="#contact" className="btn-outline">
              Let's Talk
            </a>
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '500px', display: 'flex', justifyContent: 'center' }}>
            <img src="/hero-image.png" alt="Mr K" style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'contain', display: 'block' }} />
          </div>

        </div>
      </div>
    </section>
  )
}
