import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ROLES = ['Founder & CEO', 'AI Builder', 'Entrepreneur', 'Public Speaker']
const HERO_TITLES = ['KARUPPASAMY', 'POSITIVE TRIBE']

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/mr_k.inc/', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karuppasamy-m-b39995377/', path: 'M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' },
  { label: 'GitHub', href: 'https://github.com/Mani-02nev', path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
]

const BANNER_TEXT = 'Karuppasamy M (Mr K) · Founder & CEO — Mr K AI Ecosystem · Google Campus Ambassador 2026 · AI Builder · Mentor · Speaker · Building India\'s AI Future'
const BANNER_H = 52

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [titleIdx, setTitleIdx] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 3000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setTitleIdx(i => (i + 1) % HERO_TITLES.length), 4000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(id)
  }, [])

  const fade = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  })

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '600px',
      overflow: 'hidden',
      background: '#050505',
      paddingTop: 'var(--nav-h)',
    }}>

      {/* ── FULL-WIDTH NAME — KARUPPASAMY fills like SIDD AHMED / POSITIVE TRIBE ── */}
      <div className="hero-title-container" style={{
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 2,
        pointerEvents: 'none',
        userSelect: 'none',
        overflow: 'hidden',
        ...fade(0.04)
      }}>
        <div
          key={titleIdx}
          className="animate-title hero-title"
        >
          {HERO_TITLES[titleIdx]}
        </div>
      </div>

      {/* ── FOUNDER PHOTO ── */}
      <div className="hero-photo-container" style={{
        position: 'absolute',
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: 6,
        pointerEvents: 'none',
        ...fade(0.1),
      }}>
        {/* Gold glow beneath */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(255,209,0,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }} />
        <img
          src="/hero-image.png"
          alt="Karuppasamy M — Mr K, Founder & CEO"
          loading="eager"
        />
      </div>

      {/* ── LEFT BLOCK — CTA + stats ── */}
      <div className="hero-left-block" style={{
        position: 'absolute',
        zIndex: 10,
        ...fade(0.24),
      }}>
        {/* Role badge */}
        <div className="hero-role-badge" style={{
          display: 'inline-block',
          border: '1px solid rgba(255,209,0,0.35)',
          color: '#FFD100',
          fontSize: '11px', fontWeight: 800,
          letterSpacing: '2.2px', textTransform: 'uppercase',
          padding: '5px 16px', borderRadius: '999px',
          marginBottom: '18px',
        }}>
          {ROLES[roleIdx]}
        </div>

        {/* Yellow CTA */}
        <div className="hero-cta-btn" style={{ marginBottom: '32px' }}>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#FFD100', color: '#000',
            fontWeight: 800, fontSize: '15.5px',
            padding: '0 32px', height: '55px', borderRadius: '999px',
            transition: 'box-shadow 0.25s, transform 0.2s',
          }}
            onMouseOver={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 36px rgba(255,209,0,0.5)'
                ; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                ; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
            }}
          >
            Let's Build Together →
          </Link>
        </div>

        {/* Stats + social icons */}
        <div className="hero-stats-row" style={{ display: 'flex', gap: '32px' }}>
          {[
            { num: '2.2K', social: SOCIALS[0] },
            { num: '500+', social: SOCIALS[1] },
            { num: '5K+', social: SOCIALS[2] },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }} className="hero-stat-col">
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '44px', color: '#fff',
                letterSpacing: '-1px', lineHeight: 1,
              }} className="hero-stat-num">{s.num}</div>
              <a
                href={s.social.href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', marginTop: '8px', color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
                onMouseOver={e => (e.currentTarget.style.color = '#FFD100')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hero-stat-icon">
                  <path d={s.social.path} />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>



      {/* ── YELLOW BOTTOM BANNER — marquee ── */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: `${BANNER_H}px`,
        background: '#FFD100',
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          animation: 'marquee 30s linear infinite',
          whiteSpace: 'nowrap',
          willChange: 'transform',
        }}>
          {[...Array(4)].map((_, i) => (
            <span key={i} style={{
              fontSize: '13px', fontWeight: 700,
              color: '#000', paddingRight: '80px',
              letterSpacing: '0.3px',
            }}>
              {BANNER_TEXT} &nbsp;&nbsp;·&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes titleAnimation {
          0% {
            opacity: 0;
            transform: translateY(-40px);
            filter: blur(8px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: translateY(40px);
            filter: blur(8px);
          }
        }
        .animate-title {
          animation: titleAnimation 4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        .hero-title-container {
          top: calc(var(--nav-h) + 8px);
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(80px, 15vw, 220px);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -3.5px;
          line-height: 0.88;
          color: #FFD100;
          text-align: center;
          padding: 0 24px;
          white-space: nowrap;
        }
        .hero-photo-container {
          top: var(--nav-h);
          bottom: 52px; /* BANNER_H */
        }
        .hero-photo-container img {
          height: 100%;
          width: auto;
          max-width: 54vw;
          object-fit: contain;
          object-position: bottom center;
          display: block;
          position: relative;
          z-index: 1;
          filter: grayscale(100%) contrast(1.1) brightness(0.95);
          transform: scale(1.1);
          transform-origin: bottom center;
        }
        .hero-left-block {
          left: 84px;
          top: 52%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        @media (max-width: 768px) {
          .hero-title-container {
            top: calc(var(--nav-h) + 16px);
          }
          .hero-title {
            font-size: clamp(48px, 12vw, 84px);
            letter-spacing: -1.5px;
          }
          .hero-photo-container {
            top: calc(var(--nav-h) + 60px);
            bottom: 110px;
          }
          .hero-photo-container img {
            max-width: 90vw;
          }
          .hero-role-badge, .hero-cta-btn {
            display: none !important;
          }
          .hero-left-block {
            left: 0;
            right: 0;
            top: auto;
            bottom: 24px;
            transform: none;
            align-items: center;
            padding: 0 16px;
          }
          .hero-stats-row {
            width: 100% !important;
            justify-content: space-around !important;
            gap: 0 !important;
          }
          .hero-stat-num {
            font-size: 32px !important;
          }
          .hero-stat-icon {
            width: 18px !important;
            height: 18px !important;
          }
        }
      `}</style>
    </section>
  )
}
