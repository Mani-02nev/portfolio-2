export default function MediaPressSection() {
  const mediaItems = [
    {
      publication: "Google Developers Blog",
      title: "Google Campus Ambassadors Leading AI Workshops in India",
      desc: "An in-depth spotlight on student leaders who are driving local technical workshops, cloud learning programs, and community-centric AI study jams.",
      logoText: "G",
      logoBg: "#4285F4",
      link: "https://developers.google.com/"
    },
    {
      publication: "VDart Tech News",
      title: "Innovating Staffing Automation: Inside the AI & ML Intern Showcase",
      desc: "A feature discussing VDart's summer internship projects, highlighting Mr K's machine learning pipelines that automate recruiting and CV screening workflows.",
      logoText: "V",
      logoBg: "#0f172a",
      link: "https://www.vdart.com/"
    },
    {
      publication: "Novi Tech Spotlight",
      title: "Designing Data Stories: Interactive Dashboards for Tomorrow",
      desc: "Novi Tech's review of modern developer interns who successfully integrated Python predictive intelligence and React UI components to deliver business insights.",
      logoText: "N",
      logoBg: "#ea580c",
      link: "https://novitechrd.com/"
    },
    {
      publication: "SIT Campus Bulletin",
      title: "Student Founder Launches Mr K AI Ecosystem",
      desc: "Seshasayee Institute of Technology's feature story on how Karuppasamy M is balancing computer engineering academics with bootstrapping SaaS products.",
      logoText: "S",
      logoBg: "#16a34a",
      link: "https://www.sittrichy.in/"
    }
  ]

  return (
    <section id="media" className="media-section bg-black" style={{ padding: '80px 0', borderTop: '1px solid #111' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="section-title primary" style={{ fontSize: '40px', marginBottom: '15px' }}>
            Media & Press
          </h2>
          <p style={{ color: '#aaa', fontSize: '15.5px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
            Discover verified publications and technology showcases highlighting Karuppasamy's journey, community impact, and engineering contributions.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {mediaItems.map((item, idx) => (
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
                {/* Header Logo & Pub Name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '6px', 
                    backgroundColor: item.logoBg, 
                    color: '#fff', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    fontWeight: 'bold', 
                    fontSize: '18px' 
                  }}>
                    {item.logoText}
                  </div>
                  <span style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {item.publication}
                  </span>
                </div>

                <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: '600', marginBottom: '15px', lineHeight: '1.4' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#aaa', fontSize: '13.5px', lineHeight: '1.6', marginBottom: '25px' }}>
                  {item.desc}
                </p>
              </div>

              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline" 
                style={{ 
                  padding: '10px 20px', 
                  fontSize: '13px', 
                  textDecoration: 'none', 
                  textAlign: 'center',
                  display: 'block'
                }}
              >
                Read Article &rarr;
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
