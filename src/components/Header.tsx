import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={isScrolled ? 'sticky' : ''}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" className="logo" style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 'bold', color: 'var(--color-primary)', letterSpacing: '1px' }}>
          MR K
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#media">Media</a>
          <a href="#speaking">Speaking</a>
          <a href="#mentorship">Mentorship</a>
          <a href="#blog">Blog</a>
          <a href="#achievements">Achievements</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="social-links">
          <a href="https://github.com/Mani-02nev" target="_blank" rel="noopener noreferrer" title="GitHub">GitHub</a>
          <a href="https://www.linkedin.com/in/karuppasamy-m-b39995377/" target="_blank" rel="noopener noreferrer" title="LinkedIn">LinkedIn</a>
        </div>
      </div>
    </header>
  )
}
