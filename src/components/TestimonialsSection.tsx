export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Mr K represents the new wave of AI founders — technically brilliant, community-driven, and relentlessly focused on impact.",
      author: "Tech Community Leader",
      role: "Google Developer Programs"
    },
    {
      text: "His products aren't demos — they're production-grade systems that solve real business problems with automation.",
      author: "Industry Mentor",
      role: "VDart Inc."
    },
    {
      text: "Rare combination of deep AI expertise and the ability to inspire an entire campus to start building systems.",
      author: "Faculty Advisor",
      role: "Seshasayee Institute of Technology"
    },
    {
      text: "The Mr K AI Ecosystem is proof that student founders can compete with anyone globally in shipping SaaS tools.",
      author: "Peer Founder",
      role: "Startup Community"
    },
    {
      text: "Mr K's mentorship transformed how I approach building AI products. His clarity and technical depth are unmatched.",
      author: "Arjun S.",
      role: "Aspiring AI Engineer"
    },
    {
      text: "Working under his guidance at community events gave me the confidence to ship my first full-stack project.",
      author: "Priya R.",
      role: "Computer Science Student"
    }
  ]

  return (
    <section id="testimonials" className="testimonials-section bg-black" style={{ padding: '80px 0', borderTop: '1px solid #111' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="section-title primary" style={{ fontSize: '40px', marginBottom: '15px' }}>
            Testimonials
          </h2>
          <p style={{ color: '#aaa', fontSize: '15.5px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
            Social proof and endorsements from industry mentors, faculty members, peer startup founders, and student developers.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: '#080808', 
                border: '1px solid #222', 
                borderRadius: '8px', 
                padding: '30px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                transition: 'border-color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
              onMouseOut={(e) => e.currentTarget.style.borderColor = '#222'}
            >
              <p style={{ color: '#ccc', fontSize: '14.5px', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '20px' }}>
                "{t.text}"
              </p>
              <div style={{ borderTop: '1px solid #222', paddingTop: '15px' }}>
                <h4 style={{ color: 'var(--color-primary)', fontSize: '14.5px', fontWeight: 'bold', marginBottom: '4px' }}>
                  {t.author}
                </h4>
                <span style={{ color: '#555', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
