export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-gray-dark)', borderTop: '1px solid #222', padding: '60px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--color-primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Mr K AI Ecosystem
          </div>
          <p style={{ color: '#888', fontSize: '15px', maxWidth: '500px', textAlign: 'center', lineHeight: '1.6' }}>
            Building AI-powered companies and ecosystems that solve real-world problems with elegance, scalability, and measurable impact.
          </p>
          <div style={{ display: 'flex', gap: '30px' }}>
            <a href="mailto:karuppasamy.murugesan02@gmail.com" style={{ color: '#fff', fontSize: '15px', transition: 'color 0.2s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseOut={(e) => (e.currentTarget.style.color = '#fff')}>
              Email
            </a>
            <a href="https://github.com/Mani-02nev" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '15px', transition: 'color 0.2s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseOut={(e) => (e.currentTarget.style.color = '#fff')}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/karuppasamy-m-b39995377/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '15px', transition: 'color 0.2s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseOut={(e) => (e.currentTarget.style.color = '#fff')}>
              LinkedIn
            </a>
          </div>
          <div style={{ color: '#555', fontSize: '14px', marginTop: '20px', borderTop: '1px solid #222', paddingTop: '20px', width: '100%', textAlign: 'center' }}>
            &copy; 2026 Mr K. All rights reserved. | Made with passion.
          </div>
        </div>
      </div>
    </footer>
  )
}
