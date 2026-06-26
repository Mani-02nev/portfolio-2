export default function BlogSection() {
  const blogPosts = [
    {
      title: "Building AI Startups as a Student Founder",
      category: "Entrepreneurship",
      date: "May 12, 2026",
      desc: "Balancing academic timelines with bootstrapping a product studio. Lessons learned on shipping fast, identifying product-market fit, and building developer-focused communities.",
      readTime: "5 min read"
    },
    {
      title: "The Rise of Autonomous AI Agents: Agent K Architecture",
      category: "AI & Technology",
      date: "April 28, 2026",
      desc: "An architectural review of how Agent K handles browser orchestration, multi-model fallback routines, and flat-file memory logs to run complex tasks in real-time.",
      readTime: "7 min read"
    },
    {
      title: "Engineering Maturity: Moving Beyond Simple Frontends",
      category: "Software Career",
      date: "March 15, 2026",
      desc: "Why clean component hierarchy, DevOps automation, robust error-boundaries, and premium user interface styling separates standard coders from high-velocity engineers.",
      readTime: "4 min read"
    },
    {
      title: "Fostering Student Developer Communities through Google Programs",
      category: "Community & Leadership",
      date: "Feb 10, 2026",
      desc: "How leading Cloud and Machine Learning Study Jams at SIT Trichy bridges the gap between student ambition and developer career tracks.",
      readTime: "6 min read"
    }
  ]

  return (
    <section id="blog" className="blog-section bg-black" style={{ padding: '80px 0', borderTop: '1px solid #111' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="section-title primary" style={{ fontSize: '40px', marginBottom: '15px' }}>
            Latest Blog Articles
          </h2>
          <p style={{ color: '#aaa', fontSize: '15.5px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
            Sharing insights on startup advice, autonomous agent architecture, developer relations, and engineering maturity.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {blogPosts.map((post, idx) => (
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
                transition: 'all 0.3s ease'
              }}
              className="youtube-card"
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', fontSize: '12px' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {post.category}
                  </span>
                  <span style={{ color: '#555' }}>
                    {post.date}
                  </span>
                </div>
                
                <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: '600', marginBottom: '15px', lineHeight: '1.4' }}>
                  {post.title}
                </h3>
                <p style={{ color: '#aaa', fontSize: '13.5px', lineHeight: '1.6', marginBottom: '25px' }}>
                  {post.desc}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #222', paddingTop: '15px', fontSize: '13px' }}>
                <span style={{ color: '#555' }}>{post.readTime}</span>
                <span style={{ color: 'var(--color-primary)', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => alert("Articles will be available soon!")}>Read Article &rarr;</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
