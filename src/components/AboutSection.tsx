import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ROLES = ['FOUNDER', 'CEO', 'AI DEVELOPER', 'ENTREPRENEUR']

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } })
}

export default function AboutSection() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx(prev => (prev + 1) % ROLES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" style={{ background: '#000000', padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">

        {/* 2-column layout to match Sidd Ahmed style */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '80px', alignItems: 'center' }}>

          {/* Left — Large Grayscale Photo */}
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="about-img-wrapper"
            style={{ position: 'relative' }}
          >
            <img
              src="/about.png"
              alt="Karuppasamy M — Founder"
              style={{
                width: '100%', height: 'auto',
                borderRadius: '16px',
                filter: 'grayscale(100%) contrast(1.1) brightness(0.95)',
                display: 'block',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </motion.div>

          {/* Right — Sidd Ahmed Style Content */}
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            custom={1} 
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            {/* Meet */}
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(20px, 3.5vw, 42px)',
              color: 'var(--accent)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              lineHeight: 1,
              marginBottom: '10px'
            }}>
              Meet
            </span>

            {/* Name */}
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 7vw, 96px)',
              color: 'var(--accent)',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              lineHeight: 0.9,
              margin: 0
            }}>
              KARUPPASAMY
            </h2>

            {/* Role Subtitle with Animation */}
            <div style={{ height: 'calc(clamp(36px, 7vw, 96px) * 0.95)', marginBottom: '40px', overflow: 'hidden', position: 'relative' }}>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={ROLES[roleIdx]}
                  initial={{ opacity: 0, y: -30, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(36px, 7vw, 96px)',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    letterSpacing: '-1px',
                    lineHeight: 0.9,
                    margin: 0,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {ROLES[roleIdx]}
                </motion.h3>
              </AnimatePresence>
            </div>

            {/* Paragraph 1 */}
            <p style={{ 
              fontSize: '17px', 
              lineHeight: 1.8, 
              color: 'var(--secondary)', 
              marginBottom: '24px', 
              fontWeight: 400 
            }}>
              Karuppasamy's journey to building purpose-driven AI systems, leading developer communities, and empowering builders began with a vision to create scalable technological impact.
            </p>

            {/* Paragraph 2 */}
            <p style={{ 
              fontSize: '17px', 
              lineHeight: 1.8, 
              color: 'var(--secondary)', 
              marginBottom: '0px',
              fontWeight: 400 
            }}>
              Explore the products, community initiatives, and milestone moments that define his track record as a software engineer, Google Campus Ambassador, and AI ecosystem founder.
            </p>

          </motion.div>
        </div>
      </div>

      <style>{`
        .about-img-wrapper {
          position: relative;
          padding: 0;
          display: inline-block;
          width: 100%;
        }
        @media(max-width:900px){
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-img-wrapper {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </section>
  )
}
