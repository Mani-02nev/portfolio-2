import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const milestones = [
  { year: '2022', title: 'Started Programming', desc: 'Dived deep into Computer Engineering fundamentals, learning algorithms, data structures, and systems design from first principles.', tag: 'Learning' },
  { year: '2023', title: 'First Internship — Novi Tech', desc: 'Data Analytics internship building interactive BI dashboards and applying data workflows.', tag: 'Internship' },
  { year: '2023', title: 'Started Mentoring', desc: 'Began sharing knowledge with peers through code reviews, campus tech clubs, and peer-to-peer learning sessions.', tag: 'Mentorship' },
  { year: '2024', title: 'AI & ML Engineering', desc: 'Joined VDart Inc. for AI/ML internship — deployed ML models, built NLP pipelines, and automated microservices.', tag: 'AI / ML' },
  { year: '2024', title: 'First AI Products', desc: 'Shipped 5+ AI products including Law Agent, HR Management System, and AI Sales Intelligence — all production-grade.', tag: 'Products' },
  { year: '2025', title: 'Founded Mr K AI Ecosystem', desc: 'Launched the AI Ecosystem — a founder-led studio building SaaS products. Shipped CV Builder and Agent K.', tag: 'Founding' },
  { year: '2026', title: 'Google Campus Ambassador', desc: 'Selected as Google Campus Ambassador — leading developer events, AI workshops, and community programs.', tag: 'Google' },
  { year: '2026', title: 'Building India\'s AI Future', desc: 'Scaling the ecosystem. Mentoring 50+ developers. Inspiring 200+ students. Speaking at events across India.', tag: 'Now' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }
}

const getIcon = (tag: string) => {
  switch (tag.toLowerCase()) {
    case 'learning':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
      )
    case 'internship':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
      )
    case 'mentorship':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      )
    case 'ai / ml':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" x2="9" y1="1" y2="4"></line><line x1="15" x2="15" y1="1" y2="4"></line><line x1="9" x2="9" y1="20" y2="23"></line><line x1="15" x2="15" y1="20" y2="23"></line><line x1="20" x2="23" y1="9" y2="9"></line><line x1="20" x2="23" y1="15" y2="15"></line><line x1="1" x2="4" y1="9" y2="9"></line><line x1="1" x2="4" y1="15" y2="15"></line></svg>
      )
    case 'products':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      )
    case 'founding':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5"></path><path d="M14 2 2 14v4h4L18 6l-4-4Z"></path><path d="M12.5 5.5 16 9"></path><circle cx="9" cy="15" r="1"></circle></svg>
      )
    case 'google':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
      )
    default:
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
      )
  }
}

function MilestoneCard({ milestone, isTop }: { milestone: any; isTop: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: isTop ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: isTop ? -8 : 8, scale: 1.02 }}
      className="timeline-card"
      style={{
        background: 'rgba(255, 255, 255, 0.015)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderTop: isTop ? '3px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: !isTop ? '3px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '24px',
        padding: '32px 28px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'left',
        width: '100%',
        boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
        transition: 'border-color 0.4s var(--ease-smooth), background-color 0.4s var(--ease-smooth), box-shadow 0.4s var(--ease-smooth)'
      }}
    >
      {/* Watermark Year */}
      <div style={{
        position: 'absolute',
        top: '12px',
        right: '16px',
        fontFamily: 'var(--font-display)',
        fontSize: '72px',
        background: 'linear-gradient(135deg, rgba(255,212,0,0.06) 0%, transparent 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 900,
        pointerEvents: 'none',
        lineHeight: 1,
        userSelect: 'none'
      }}>{milestone.year}</div>

      {/* Tag Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <div style={{
          width: '28px', height: '28px', borderRadius: '6px',
          background: 'rgba(255,212,0,0.04)',
          border: '1px solid rgba(255,212,0,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--accent)'
        }}>
          {getIcon(milestone.tag)}
        </div>
        <span style={{
          fontSize: '9.5px', fontWeight: 800, letterSpacing: '1px',
          textTransform: 'uppercase', color: 'var(--accent)'
        }}>
          {milestone.tag}
        </span>
      </div>

      <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
        {milestone.title}
      </h3>
      <p style={{ fontSize: '13.5px', color: 'var(--secondary)', lineHeight: 1.6 }}>
        {milestone.desc}
      </p>
    </motion.div>
  )
}

export default function JourneySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let animationFrameId: number
    const speed = 0.45 // Elegant, readable autoscroll pace (approx 27px/sec at 60fps)
    let accumulatedScroll = container.scrollLeft

    const scroll = () => {
      if (!isHovered) {
        accumulatedScroll += speed
        container.scrollLeft = Math.round(accumulatedScroll)
        
        // Reset to start if reached the end
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
          accumulatedScroll = 0
          container.scrollLeft = 0
        }
      } else {
        // Sync float tracker with user's manual mouse drag scroll
        accumulatedScroll = container.scrollLeft
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovered])

  return (
    <section id="journey" style={{ background: '#050505', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Grids */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.012) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.4,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header Flex Layout */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            style={{ maxWidth: '650px' }}
          >
            <span className="section-label">Timeline Roadmap</span>
            <h2 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(40px, 5vw, 72px)', 
              textTransform: 'uppercase', 
              letterSpacing: '-1px', 
              lineHeight: 1, 
              color: '#fff', 
              marginTop: '8px',
              marginBottom: '24px'
            }}>
              My <span style={{ color: 'var(--accent)' }}>Roadmap</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--secondary)', lineHeight: 1.75 }}>
              A horizontal landscape roadmap showing product launches, coding milestones, and Google community events.
            </p>
          </motion.div>

          {/* Swipe Indicator Badge */}
          <div className="swipe-indicator" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: 'var(--accent)', fontSize: '11px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '1px',
            background: 'rgba(255,212,0,0.06)', border: '1px solid rgba(255,212,0,0.15)',
            padding: '6px 14px', borderRadius: '100px',
            marginBottom: '10px'
          }}>
            Swipe to Explore
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </div>

        {/* Horizontal Landscape Scroll Container */}
        <div 
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="roadmap-scroll-container" 
          style={{ overflowX: 'auto', width: '100%', position: 'relative', paddingBottom: '10px', cursor: 'grab' }}
        >
          
          <div style={{ display: 'flex', flexDirection: 'row', gap: '60px', position: 'relative', width: 'max-content', padding: '40px 40px 40px 0' }}>
            
            {/* Horizontal Wavy Track Line */}
            <div style={{
              position: 'absolute',
              left: '40px',
              right: '200px',
              top: '50%',
              height: '2px',
              background: 'linear-gradient(to right, var(--accent) 0%, rgba(255,212,0,0.15) 100%)',
              transform: 'translateY(-50%)',
              zIndex: 1
            }} />

            {milestones.map((m, i) => {
              const isTop = i % 2 === 0
              return (
                <div key={i} style={{
                  position: 'relative',
                  width: '280px',
                  height: '460px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {/* Central Dot */}
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: i === milestones.length - 1 ? 'var(--accent)' : '#222',
                    border: i === milestones.length - 1 ? '2px solid var(--accent)' : '2px solid rgba(255,255,255,0.15)',
                    boxShadow: i === milestones.length - 1 ? '0 0 16px rgba(255,212,0,0.5)' : 'none',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 3
                  }} />

                  {/* Vertical branch line from central track to card */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    width: '1px',
                    height: '60px',
                    background: isTop 
                      ? 'linear-gradient(to top, rgba(255,212,0,0.35) 0%, transparent 100%)' 
                      : 'linear-gradient(to bottom, rgba(255,212,0,0.35) 0%, transparent 100%)',
                    top: isTop ? 'auto' : '50%',
                    bottom: isTop ? '50%' : 'auto',
                    zIndex: 1
                  }} />

                  {/* Position card at the top or bottom of the line */}
                  <div style={{
                    position: 'absolute',
                    top: isTop ? '0' : 'auto',
                    bottom: isTop ? 'auto' : '0',
                    width: '100%'
                  }}>
                    <MilestoneCard milestone={m} isTop={isTop} />
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>

      <style>{`
        .roadmap-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .roadmap-scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .timeline-card:hover {
          border-color: rgba(255, 212, 0, 0.25) !important;
          background: rgba(255, 255, 255, 0.03) !important;
          box-shadow: 0 30px 60px rgba(0,0,0,0.7), 0 0 30px rgba(255,212,0,0.06) !important;
        }
      `}</style>
    </section>
  )
}
