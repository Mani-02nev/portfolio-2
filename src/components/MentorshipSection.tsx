export default function MentorshipSection() {
  const guides = [
    { title: "CEO Mindset", desc: "Understanding the shift from coding to product validation, market research, and business models." },
    { title: "Entrepreneurship Guide", desc: "A practical framework for student developers looking to build and launch SaaS applications." },
    { title: "Career Guidance", desc: "Selecting specialization tracks, mastering algorithms, and preparing for high-impact roles." },
    { title: "Dream Job Roadmap", desc: "Perfecting portfolio layout, optimizing resume formats, and crushing technical design interviews." }
  ]

  const curriculum = [
    { area: "Programming & Core", skills: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript"] },
    { area: "Web Frameworks", skills: ["React.js", "Next.js", "Django", "Tailwind CSS", "Vite"] },
    { area: "App Frameworks", skills: ["Flutter", "React Native"] },
    { area: "AI & Machine Learning", skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "Scikit-learn"] },
    { area: "DevOps & Tools", skills: ["Linux", "Unix", "DevOps", "Git", "GitHub", "Vercel"] }
  ]

  const communities = [
    { name: "Google Developer Student Community", role: "Campus Ambassador Program leader, conducting Google Cloud and AI study jams." },
    { name: "Mr K AI Builder Community", role: "A peer-to-peer developer workspace focused on code reviews, UX reviews, and SaaS deployments." },
    { name: "Campus Tech Clubs", role: "Supporting local campus groups in organizing hackathons, study workshops, and coding jams." }
  ]

  return (
    <section id="mentorship" className="mentorship-section bg-black" style={{ padding: '80px 0', borderTop: '1px solid #111' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="section-title primary" style={{ fontSize: '40px', marginBottom: '15px' }}>
            Mentorship Section
          </h2>
          <p style={{ color: '#aaa', fontSize: '15.5px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
            Delivering high-value resources, career pathways, and technical curriculum to empower the next generation of engineers and founders.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px' }}>
          
          {/* Guides & Communities */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--color-primary)', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Educational Resources & Guides
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '40px' }}>
              {guides.map((g, idx) => (
                <div key={idx} style={{ background: '#080808', border: '1px solid #222', padding: '20px', borderRadius: '6px' }}>
                  <h4 style={{ color: 'var(--color-primary)', fontSize: '16px', fontWeight: 'bold', marginBottom: '6px' }}>
                    📖 {g.title}
                  </h4>
                  <p style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.5' }}>
                    {g.desc}
                  </p>
                </div>
              ))}
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--color-primary)', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Communities I Lead
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {communities.map((c, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '10px', fontSize: '13.5px', color: '#ccc' }}>
                  <span style={{ color: 'var(--color-primary)', fontSize: '16px' }}>•</span>
                  <div>
                    <strong style={{ color: '#fff' }}>{c.name}:</strong>
                    <span style={{ color: '#aaa', marginLeft: '5px' }}>{c.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Curriculum */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--color-primary)', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Training Curriculum (Technical Skills)
            </h3>
            <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px' }}>
              Through local study jams and community workshops, I guide peer developers through a modern software engineering syllabus:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {curriculum.map((c, idx) => (
                <div key={idx}>
                  <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>
                    {c.area}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {c.skills.map((s, sIdx) => (
                      <span 
                        key={sIdx} 
                        style={{ 
                          background: 'rgba(255,255,255,0.03)', 
                          color: '#ccc', 
                          border: '1px solid #333', 
                          padding: '6px 12px', 
                          borderRadius: '4px',
                          fontSize: '12.5px'
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
