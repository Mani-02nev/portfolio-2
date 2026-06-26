export default function SpeakingSection() {
  const topics = [
    { title: "Building AI Companies from Zero to One", desc: "How to conceptualize, bootstrap, and ship AI-native products with rapid speed and minimal overhead." },
    { title: "The Future of Autonomous AI Agents", desc: "A technical deep dive into multi-model orchestration, browser agents, and scalable SaaS agent architectures." },
    { title: "From Student to Founder — A Builder's Journey", desc: "Practical strategies for students to bridge the gap between academic theory and shipping production-grade applications." },
    { title: "Google Developer Ecosystem & Community Leadership", desc: "How building local student chapters accelerates community learning and creates global developer relations opportunities." },
    { title: "Engineering Excellence in the Age of AI", desc: "Why combining systems foundations, strong DevOps pipelines, and high-end UI styling separates world-class developers." }
  ]

  const featuredTalks = [
    {
      title: "Building the Mr K AI Ecosystem",
      venue: "Seshasayee Institute of Technology",
      date: "2025",
      desc: "Keynote lecture sharing lessons on bootstrapping product studios while managing college studies, with key insights on early-stage tech stacks."
    },
    {
      title: "AI Agents — The Next Frontier",
      venue: "Google Developer Event",
      date: "2026",
      desc: "Architectural overview on building autonomous web agents, highlighting model fine-tuning, latency optimization, and developer workflow patterns."
    }
  ]

  const events = [
    "Google Campus Ambassador Launch — 2026",
    "AI Innovation Summit — SIT Trichy",
    "Developer Meetup — Trichy Tech Community"
  ]

  const targetAudiences = ["Universities", "Tech Conferences", "AI Startups", "Hackathons"]

  return (
    <section id="speaking" className="speaking-section bg-black" style={{ padding: '80px 0', borderTop: '1px solid #111' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="section-title primary" style={{ fontSize: '40px', marginBottom: '15px' }}>
            Speaking Section
          </h2>
          <p style={{ color: '#aaa', fontSize: '15.5px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
            Evangelizing autonomous AI engineering and bootstrapping ecosystems. Available for workshops, panel discussions, and keynotes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px' }}>
          
          {/* Topics & Target Audience */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--color-primary)', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Speaking Topics
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              {topics.map((t, idx) => (
                <div key={idx} style={{ background: '#080808', borderLeft: '3px solid var(--color-primary)', padding: '15px 20px', borderRadius: '0 6px 6px 0' }}>
                  <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 'bold', marginBottom: '5px' }}>
                    {t.title}
                  </h4>
                  <p style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.5' }}>
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

            <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold', marginBottom: '15px' }}>
              Target Audiences
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
              {targetAudiences.map((audience, i) => (
                <span key={i} style={{ background: 'rgba(255, 209, 0, 0.05)', color: 'var(--color-primary)', border: '1px solid rgba(255, 209, 0, 0.2)', padding: '6px 16px', borderRadius: '50px', fontSize: '13px', fontWeight: 'bold' }}>
                  {audience}
                </span>
              ))}
            </div>

            <div style={{ background: '#080808', border: '1px solid #222', padding: '20px', borderRadius: '8px' }}>
              <h5 style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>
                📅 Booking Information
              </h5>
              <p style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.5' }}>
                Open for booking requests for tech meetups, hackathons, and guest lectures. Use the contact form below or email <a href="mailto:karuppasamy.murugesan02@gmail.com" style={{ color: 'var(--color-primary)' }}>karuppasamy.murugesan02@gmail.com</a>.
              </p>
            </div>
          </div>

          {/* Featured Talks & Demos */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--color-primary)', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Featured Talks & Events
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              {featuredTalks.map((talk, idx) => (
                <div key={idx} style={{ background: '#080808', border: '1px solid #222', padding: '24px', borderRadius: '8px' }} className="youtube-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                    <span>📍 {talk.venue}</span>
                    <span>{talk.date}</span>
                  </div>
                  <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
                    {talk.title}
                  </h4>
                  <p style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.5' }}>
                    {talk.desc}
                  </p>
                </div>
              ))}
            </div>

            <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold', marginBottom: '15px' }}>
              Recent Engagements
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
              {events.map((e, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '10px', fontSize: '13.5px', color: '#ccc' }}>
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>{e}</span>
                </div>
              ))}
            </div>

            <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold', marginBottom: '15px' }}>
              Demo Materials
            </h4>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="https://agent02.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '10px 20px', fontSize: '13px', flexGrow: 1, textAlign: 'center', textDecoration: 'none' }}>
                📺 Agent K Architecture
              </a>
              <a href="https://pickup-law-agent.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '10px 20px', fontSize: '13px', flexGrow: 1, textAlign: 'center', textDecoration: 'none' }}>
                📺 Law Agent Live Demo
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
