import { Link } from 'react-router-dom'

export default function Footer() {
  const cols: {
    heading: string
    links: { label: string; to: string; external?: boolean }[]
  }[] = [
    {
      heading: 'Navigate',
      links: [
        { label: 'Home', to: '/' },
        { label: 'Moments', to: '/moments' },
        { label: 'Companies', to: '/companies' },
        { label: 'Products', to: '/products' },
      ],
    },
    {
      heading: 'Engage',
      links: [
        { label: 'Speaking', to: '/speaking' },
        { label: 'Mentorship', to: '/mentorship' },
        { label: 'Blog / Media', to: '/blog' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'Company Site ↗', to: 'https://mrk02.vercel.app/', external: true },
        { label: 'Instagram ↗', to: 'https://www.instagram.com/mr_k.inc/', external: true },
        { label: 'GitHub ↗', to: 'https://github.com/Mani-02nev', external: true },
        { label: 'LinkedIn ↗', to: 'https://www.linkedin.com/in/karuppasamy-m-b39995377/', external: true },
        { label: 'Email ↗', to: 'mailto:karuppasamy.murugesan02@gmail.com', external: true },
      ],
    },
  ]

  return (
    <footer style={{ background: '#050505', borderTop: '1px solid var(--border)' }}>
      {/* Top — CTA */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '60px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 56px)', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1 }}>
              Let's Build <span style={{ color: 'var(--yellow)' }}>Together</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '10px' }}>Ready to create something that matters?</p>
          </div>
          <Link to="/contact" className="btn btn-yellow" style={{ fontSize: '14px', padding: '15px 34px' }}>
            Start a Conversation →
          </Link>
        </div>
      </div>

      {/* Middle — Links */}
      <div style={{ padding: '50px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px' }}>
          {/* Brand col */}
          <div>
            <img src="/logo.png" alt="Mr K Logo" style={{ height: '44px', width: 'auto', objectFit: 'contain', marginBottom: '14px' }} />
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '200px' }}>
              Founder & CEO of Mr K AI Ecosystem. Building intelligent companies from India.
            </p>
          </div>
          {cols.map((col, i) => (
            <div key={i}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '18px' }}>{col.heading}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((l, j) => (
                  l.external
                    ? <a key={j} href={l.to} target="_blank" rel="noopener noreferrer" className="footer-link">{l.label}</a>
                    : <Link key={j} to={l.to} className="footer-link">{l.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--border)', padding: '20px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>© 2026 Mr K. All rights reserved.</span>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Made with passion in India 🇮🇳</span>
        </div>
      </div>
    </footer>
  )
}
