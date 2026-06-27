import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Mr K represents the new wave of AI founders — technically brilliant, community-driven, and relentlessly focused on impact.",
    name: "Tech Community Leader",
    role: "Google Developer Programs",
    initial: "G",
  },
  {
    quote: "His products aren't demos — they're production-grade systems that solve real business problems. Rare for a student founder.",
    name: "Industry Mentor",
    role: "VDart Inc.",
    initial: "V",
  },
  {
    quote: "Rare combination of deep AI expertise and the ability to inspire an entire campus to start building.",
    name: "Faculty Advisor",
    role: "Teack Stackers",
    initial: "T",
  },
  {
    quote: "Mr K's mentorship transformed how I approach building AI products. His clarity and technical depth are unmatched.",
    name: "Arjun S.",
    role: "Aspiring AI Engineer",
    initial: "A",
  },
  {
    quote: "Karuppasamy's cloud study jams gave me the confidence to build my first full-stack React app. His guidance is hands-on and practical.",
    name: "Devika R.",
    role: "SIT Computer Science Student",
    initial: "D",
  },
  {
    quote: "Being part of the Mr K AI Builder workspace helped me find beta users for my project and completely changed how I think about UX validation.",
    name: "Kavin K.",
    role: "SaaS Builder Community Member",
    initial: "K",
  },
  {
    quote: "The Git and GitHub workshop conducted by Karuppasamy demystified version control. I went from staging errors to clean branching pipelines.",
    name: "Sanjay T.",
    role: "GitHub Workshop Attendee",
    initial: "S",
  },
  {
    quote: "Understood serverless hosting, API integrations, and prompt tuning within a single weekend. The study jam was structured, clear, and highly engaging.",
    name: "Meera N.",
    role: "Google Cloud Jam Participant",
    initial: "M",
  }
]

export default function TestimonialsSection() {
  return (
    <section style={{ background: '#0F0F10', padding: '140px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Ghost */}
      <div style={{
        position: 'absolute', bottom: '5%', right: '-2%',
        fontFamily: 'var(--font-display)', fontSize: 'clamp(80px, 15vw, 200px)',
        color: 'rgba(255,255,255,0.025)', fontWeight: 900, textTransform: 'uppercase',
        letterSpacing: '-6px', userSelect: 'none', pointerEvents: 'none', lineHeight: 1,
      }}>TRUST</div>

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad-desktop)', position: 'relative', zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-label">What People Say</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', textTransform: 'uppercase', letterSpacing: '-1px', lineHeight: 1, color: '#fff', marginBottom: '80px', marginTop: '8px' }}>
            Testimonials
          </h2>
        </motion.div>

        {/* Large featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="featured-testimonial-card"
          style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '24px', padding: '60px', marginBottom: '24px', position: 'relative',
          }}
        >
          {/* Quote mark */}
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '120px', lineHeight: 0.8, color: 'rgba(255,212,0,0.15)', position: 'absolute', top: '32px', left: '48px', userSelect: 'none' }}>"</div>
          <blockquote style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#fff', lineHeight: 1.65, marginBottom: '40px', paddingLeft: '0', position: 'relative', zIndex: 1 }}>
            {testimonials[0].quote}
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(255,212,0,0.15)', border: '1px solid rgba(255,212,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--accent)', flexShrink: 0 }}>{testimonials[0].initial}</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>{testimonials[0].name}</div>
              <div style={{ fontSize: '13px', color: 'var(--secondary)', marginTop: '2px' }}>{testimonials[0].role}</div>
            </div>
          </div>
        </motion.div>

        {/* Remaining Testimonials Grid */}
        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {testimonials.slice(1).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.7 }}
              whileHover={{ y: -6, borderColor: 'rgba(255,212,0,0.2)' }}
              style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px', padding: '32px', transition: 'border-color 0.3s',
              }}
            >
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '28px', fontStyle: 'italic' }}>"{t.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--accent)', flexShrink: 0 }}>{t.initial}</div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--secondary)', marginTop: '1px' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .featured-testimonial-card {
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  )
}
