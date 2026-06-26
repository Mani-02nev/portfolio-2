import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Journey', to: '/journey' },
  { label: 'Companies', to: '/companies' },
  { label: 'Products', to: '/products' },
  { label: 'Speaking', to: '/speaking' },
  { label: 'Mentorship', to: '/mentorship' },
  { label: 'Blog', to: '/blog' },
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
      transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        height: 'var(--nav-h)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        background: scrolled ? 'rgba(5,5,5,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(30px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(30px)' : 'none',
        transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
      }}
    >
      <div style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        padding: '0 var(--pad-desktop)',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
      }}>

        {/* Logo */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <motion.img
            src="/logo.png"
            alt="Mr K Logo"
            whileHover={{ scale: 1.05 }}
            style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
          />
        </NavLink>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="desktop-nav">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              style={({ isActive }) => ({
                position: 'relative',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.2px',
                color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                background: 'transparent',
                transition: 'color 0.2s',
              })}
              onMouseOver={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseOut={(e) => {
                const isActive = e.currentTarget.getAttribute('aria-current') === 'page'
                e.currentTarget.style.color = isActive ? '#fff' : 'rgba(255,255,255,0.5)'
              }}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      style={{
                        position: 'absolute',
                        bottom: '2px', left: '14px', right: '14px',
                        height: '2px',
                        background: 'var(--accent)',
                        borderRadius: '2px',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right — socials + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: '12px' }} className="social-row">
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/mr_k.inc/', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
              { label: 'GitHub', href: 'https://github.com/Mani-02nev', path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karuppasamy-m-b39995377/', path: 'M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' },
            ].map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                whileHover={{ scale: 1.15, color: 'var(--accent)' }}
                style={{ color: 'rgba(255,255,255,0.35)', display: 'flex', transition: 'color 0.2s' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </motion.a>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <NavLink
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--accent)',
                color: '#000',
                padding: '9px 20px',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.3px',
                transition: 'box-shadow 0.3s',
              }}
              onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(255,212,0,0.4)' }}
              onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
            >
              Contact Me →
            </NavLink>
          </motion.div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="hamburger"
            aria-label="Toggle menu"
            style={{
              display: 'none', flexDirection: 'column', gap: '5px',
              padding: '4px', background: 'none', border: 'none', cursor: 'pointer',
            }}
          >
            {[0,1,2].map(i => (
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
              <NavLink key={link.to} to={link.to} end={link.to === '/'}
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
        }
        @media (max-width: 1200px) {
          header > div { padding: 0 var(--pad-tablet) !important; }
        }
      `}</style>
    </motion.header>
  )
}
