import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ContactCTASection() {
  return (
    <section style={{ background: '#050505', padding: '160px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Giant background text */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-display)', fontSize: 'clamp(60px, 14vw, 200px)',
        color: 'rgba(255,255,255,0.025)', fontWeight: 900, textTransform: 'uppercase',
        letterSpacing: '-8px', whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none', lineHeight: 1,
      }}>CONNECT</div>

      {/* Gold glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '300px', background: 'radial-gradient(ellipse, rgba(255,212,0,0.06) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>

        {/* Animated accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          style={{ width: '60px', height: '3px', background: 'var(--accent)', margin: '0 auto 48px', transformOrigin: 'center' }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 8vw, 120px)',
            textTransform: 'uppercase',
            letterSpacing: '-3px',
            lineHeight: 0.95,
            color: '#fff',
            marginBottom: '16px',
          }}
        >
          Ready to Build
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16,1,0.3,1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 8vw, 120px)',
            textTransform: 'uppercase',
            letterSpacing: '-3px',
            lineHeight: 0.95,
            color: 'var(--accent)',
            marginBottom: '40px',
          }}
        >
          Something Meaningful?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{ fontSize: '18px', color: 'var(--secondary)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 56px' }}
        >
          Whether you want to collaborate on a product, invite me for a talk, explore mentorship, or just talk AI — I'm always open to meaningful conversations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="/contact" className="btn btn-yellow" style={{ fontSize: '15px', padding: '16px 40px' }}>
            Let's Work Together →
          </Link>
          <a href="mailto:karuppasamy.murugesan02@gmail.com"
            className="btn btn-outline"
            style={{ fontSize: '15px', padding: '16px 40px' }}>
            Email Directly
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{ display: 'flex', gap: '32px', justifyContent: 'center', marginTop: '56px' }}
        >
          {[
            { label: 'Instagram', href: 'https://www.instagram.com/mr_k.inc/' },
            { label: 'GitHub', href: 'https://github.com/Mani-02nev' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karuppasamy-m-b39995377/' },
            { label: 'Company', href: 'https://mrk02.vercel.app/' },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.5px', transition: 'color 0.2s' }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
            >{s.label} ↗</a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
