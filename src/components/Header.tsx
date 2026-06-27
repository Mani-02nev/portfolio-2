import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Booking', to: '/contact' },
  { label: 'Journey', to: '/journey' },
  { label: 'Mentorship', to: '/mentorship' },
  { label: 'Products', to: '/products' },
  { label: 'Media', to: '/speaking' },
  { label: 'Blogs', to: '/blog' },
  { label: 'Careers', to: '/companies', hasDropdown: true },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location])
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        height: 'var(--nav-h)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        background: scrolled ? '#000000' : 'rgba(0,0,0,0.85)',
        backdropFilter: scrolled ? 'blur(30px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(30px)' : 'none',
        transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
      }}
    >
      <div className="container" style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
      }}>

        {/* Logo */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <motion.img
            src="/logo.webp"
            alt="Mr K Logo"
            whileHover={{ scale: 1.05 }}
            style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
          />
        </NavLink>

        {/* Centered Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2px', justifyContent: 'center', flexGrow: 1 }} className="desktop-nav">
          {navLinks.map(link => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              style={({ isActive }) => ({
                padding: '9px 16px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0.2px',
                color: isActive ? 'var(--accent)' : 'rgba(255,255,255,0.7)',
                background: 'transparent',
                transition: 'color 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
              })}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseOut={(e) => {
                const isActive = e.currentTarget.getAttribute('aria-current') === 'page'
                e.currentTarget.style.color = isActive ? 'var(--accent)' : 'rgba(255,255,255,0.7)'
              }}
            >
              {link.label}
              {link.hasDropdown && (
                <span style={{ fontSize: '8px', marginLeft: '5px', opacity: 0.8, verticalAlign: 'middle' }}>▼</span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Centered Mobile Socials (Mockup style) */}
        <div className="mobile-socials-row" style={{ display: 'none', gap: '16px', alignItems: 'center', justifyContent: 'center' }}>
          {[
            { label: 'Instagram', href: 'https://www.instagram.com/mr_k.inc/', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karuppasamy-m-b39995377/', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
            { label: 'YouTube', href: 'https://youtube.com/', path: 'M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' }
          ].map(s => (
            <a
              key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ color: '#fff', display: 'inline-flex', opacity: 0.85 }}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

        {/* Right — Social Icons (No Contact Button in this style) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: '16px' }} className="social-row">
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/mr_k.inc/', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
              { label: 'Facebook', href: 'https://facebook.com/', path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karuppasamy-m-b39995377/', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
            ].map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                whileHover={{ scale: 1.12, color: 'var(--accent)' }}
                style={{ color: '#ffffff', display: 'flex', transition: 'color 0.2s' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </motion.a>
            ))}
          </div>

          {/* Hamburger (Mobile only) */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="hamburger"
            aria-label="Toggle menu"
            style={{
              display: 'none', flexDirection: 'column', gap: '5px',
              padding: '4px', background: 'none', border: 'none', cursor: 'pointer',
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '2px',
                background: '#fff', borderRadius: '2px', transition: '0.3s',
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 'var(--nav-h)', left: 0, right: 0,
              background: 'rgba(5,5,5,0.96)',
              backdropFilter: 'blur(30px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              padding: '16px 24px 24px',
              display: 'flex', flexDirection: 'column', gap: '2px',
              zIndex: 999,
            }}
          >
            {navLinks.map(link => (
              <NavLink key={link.label} to={link.to} end={link.to === '/'}
                style={({ isActive }) => ({
                  padding: '13px 16px', borderRadius: '8px',
                  fontSize: '15px', fontWeight: 500,
                  color: isActive ? 'var(--accent)' : 'rgba(255,255,255,0.7)',
                  background: isActive ? 'rgba(255,212,0,0.06)' : 'transparent',
                })}
              >{link.label}</NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .social-row { display: none !important; }
          .mobile-socials-row { display: flex !important; }
        }
      `}</style>
    </motion.header>
  )
}
