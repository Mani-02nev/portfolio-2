export default function MentorshipSpeakingSection() {
  const mentorshipStats = [
    { label: "Students Mentored", value: "50+" },
    { label: "Sessions", value: "100+" },
    { label: "Communities Led", value: "3+" },
    { label: "Events Organized", value: "15+" }
  ]

  const testimonials = [
    { text: "Mr K's mentorship transformed how I approach building AI products. His clarity and technical depth are unmatched.", author: "Arjun S.", role: "Aspiring AI Engineer" },
    { text: "Working under his guidance at community events gave me the confidence to ship my first full-stack project.", author: "Priya R.", role: "Computer Science Student" },
    { text: "A true founder mindset — he doesn't just teach code, he teaches how to think like a builder.", author: "Rahul M.", role: "Junior Developer" }
  ]

  const talks = [
    {
      title: "Building the Mr K AI Ecosystem",
      venue: "Seshasayee Institute of Technology",
      date: "2025",
      desc: "Keynote on founding an AI product ecosystem while still in college — lessons on shipping, scaling, and staying focused."
    },
    {
      title: "AI Agents — The Next Frontier",
      venue: "Google Developer Event",
      date: "2026",
      desc: "Deep dive into autonomous AI agents, multi-model orchestration, and the Agent K platform architecture."
    }
  ]

  return (
    <section id="impact" className="mentorship-speaking-section bg-black" style={{ padding: '80px 0', borderTop: '1px solid #111' }}>
      <div className="container">
        
        <h2 className="section-title primary" style={{ fontSize: '40px', textAlign: 'center', marginBottom: '50px' }}>
          Mentorship & Speaking
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px' }}>
          
          {/* Mentorship Column */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-primary)', marginBottom: '20px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Community & Mentorship
            </h3>
            <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px' }}>
              Passionate about mentoring developers, students, and aspiring founders through hands-on guidance, community leadership, and real-world project experience.
            </p>

            {/* Mentorship Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginBottom: '35px' }}>
              {mentorshipStats.map((stat, i) => (
                <div key={i} style={{ background: '#080808', border: '1px solid #222', borderRadius: '6px', padding: '15px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontFamily: 'var(--font-heading)', color: '#fff', fontWeight: 'bold' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', marginTop: '5px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold', marginBottom: '15px' }}>
              What Mentees Say
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {testimonials.map((t, idx) => (
                <div key={idx} style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '15px', fontStyle: 'italic', color: '#aaa', fontSize: '13.5px', lineHeight: '1.5' }}>
                  <p>"{t.text}"</p>
                  <span style={{ fontSize: '11px', color: 'var(--color-primary)', fontWeight: 'bold', display: 'block', marginTop: '5px', fontStyle: 'normal' }}>
                    &mdash; {t.author}, {t.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Speaking & Talks Column */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-primary)', marginBottom: '20px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Speaking & Evangelism
            </h3>
            <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6', marginBottom: '25px' }}>
              Motivational speaker and tech evangelist sharing insights on AI entrepreneurship, product building, and the future of intelligent systems.
            </p>
            
            <div style={{ fontStyle: 'italic', background: 'rgba(255, 209, 0, 0.04)', border: '1px dashed rgba(255, 209, 0, 0.2)', padding: '15px', borderRadius: '6px', fontSize: '13.5px', color: '#ccc', marginBottom: '30px' }}>
              "Speak to inspire action. Every talk should leave the audience with one clear idea they can implement immediately."
            </div>

            <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold', marginBottom: '15px' }}>
              Featured Talks
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {talks.map((talk, idx) => (
                <div key={idx} style={{ background: '#080808', border: '1px solid #222', padding: '20px', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                    <span>{talk.venue}</span>
                    <span>{talk.date}</span>
                  </div>
                  <h5 style={{ color: '#fff', fontSize: '15px', fontWeight: 'bold', marginBottom: '8px' }}>
                    {talk.title}
                  </h5>
                  <p style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.5' }}>
                    {talk.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Video/Demos */}
            <div style={{ marginTop: '25px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="https://agent02.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '8px 16px', fontSize: '12px', flexGrow: 1, textAlign: 'center', textDecoration: 'none' }}>
                📺 Agent K Demo
              </a>
              <a href="https://pickup-law-agent.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '8px 16px', fontSize: '12px', flexGrow: 1, textAlign: 'center', textDecoration: 'none' }}>
                📺 Law Agent Demo
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
