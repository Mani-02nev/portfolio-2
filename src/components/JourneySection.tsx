export default function JourneySection() {
  const experiences = [
    {
      company: "Google",
      role: "Google Campus Ambassador",
      period: "2026 - Present",
      location: "India",
      type: "Ambassador",
      url: "https://developers.google.com/",
      desc: "Selected as a Google Campus Ambassador for 2026, representing the Google Developer ecosystem on campus, driving tech awareness and community engagement across the institution.",
      achievements: [
        "Represent Google products, programs, and developer tools at the campus level.",
        "Organize and host developer events, workshops, and study jams for students.",
        "Drive awareness of Google Cloud, Android, and AI/ML platforms among peers.",
        "Bridge students with Google developer resources and career opportunities."
      ],
      techs: ["Google Cloud", "Android", "AI/ML", "Community Leadership", "Developer Relations"]
    },
    {
      company: "VDart Inc.",
      role: "AI & ML Engineering Intern",
      period: "2025",
      location: "Onsite / Tiruchirappalli",
      type: "Internship",
      url: "https://www.vdart.com/",
      desc: "Intensive AI & ML internship at VDart, a global staffing and technology solutions company, working on real-world machine learning and AI-driven automation projects.",
      achievements: [
        "Developed and deployed machine learning models for enterprise automation workflows.",
        "Built AI pipelines integrating NLP and computer vision capabilities.",
        "Collaborated with senior engineers on data preprocessing and model optimization.",
        "Contributed to production-grade AI microservices and REST API integrations."
      ],
      techs: ["Python", "Machine Learning", "NLP", "Computer Vision", "FastAPI", "TensorFlow"]
    },
    {
      company: "Novi Tech Company",
      role: "AI & ML Engineering Intern",
      period: "Summer 2024",
      location: "Remote / Coimbatore",
      type: "Internship",
      url: "https://novitechrd.com/",
      desc: "Led development of intelligent systems and interactive user interfaces for AI-driven analytics tools at Novi Tech.",
      achievements: [
        "Architected a real-time data visualization dashboard using React for AI performance monitoring.",
        "Implemented machine learning models for predictive analysis, integrating them into the frontend layer.",
        "Collaborated on designing high-end UX for complex data storytelling and AI interactions.",
        "Optimized system efficiency and frontend responsiveness for large-scale datasets."
      ],
      techs: ["AI/ML", "React", "Python", "Tailwind CSS", "Chart.js"]
    },
    {
      company: "Novi Tech Company",
      role: "Data Analytics Intern",
      period: "Dec 2023 – Jan 2024",
      location: "Remote",
      type: "Internship",
      url: "https://novitechrd.com/",
      desc: "One-month intensive internship focused on data exploration, statistical analysis, and dashboard development.",
      achievements: [
        "Performed comprehensive data cleaning and exploratory data analysis on diverse datasets.",
        "Designed and implemented interactive data dashboards for business intelligence.",
        "Applied statistical techniques to identify trends and patterns in complex numerical data.",
        "Generated detailed reports and presentations for technical and non-technical stakeholders."
      ],
      techs: ["Data Analytics", "Excel", "Tableau", "Statistics", "SQL"]
    },
    {
      company: "Seshasayee Institute of Technology",
      role: "Computer Engineering Student",
      period: "2025 - 2027",
      location: "Tiruchirappalli",
      type: "Education",
      url: "https://www.sittrichy.in/",
      desc: "Pursuing a comprehensive curriculum in Computer Engineering, with a focus on modern software systems and emerging technologies.",
      achievements: [
        "Major in Computer Engineering with specialization in AI & Systems.",
        "Engaged in advanced technical studies and practical lab work.",
        "Building strong fundamentals in algorithms and system architecture.",
        "Active participant in hackathons, coding competitions, and tech clubs."
      ],
      techs: ["Computer Science", "Algorithms", "Systems Design", "Engineering"]
    }
  ]

  return (
    <section id="journey" className="journey-section bg-black" style={{ padding: '80px 0', borderTop: '1px solid #111' }}>
      <div className="container">
        
        <h2 className="section-title primary" style={{ fontSize: '40px', textAlign: 'center', marginBottom: '50px' }}>
          My Journey
        </h2>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '20px 0' }}>
          
          {/* Vertical Line */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', backgroundColor: '#333', transform: 'translateX(-50%)' }} className="timeline-line"></div>

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  justifyContent: isEven ? 'flex-start' : 'flex-end', 
                  alignItems: 'center', 
                  position: 'relative',
                  margin: '30px 0',
                  width: '100%'
                }}
                className="timeline-item"
              >
                {/* Timeline Dot */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    width: '16px', 
                    height: '16px', 
                    borderRadius: '50%', 
                    backgroundColor: exp.type === 'Education' ? '#3b82f6' : 'var(--color-primary)', 
                    border: '4px solid #000',
                    zIndex: 2 
                  }}
                ></div>

                {/* Card Container */}
                <div 
                  style={{ 
                    width: '45%', 
                    background: '#080808', 
                    border: '1px solid #222', 
                    borderRadius: '8px', 
                    padding: '25px', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)' 
                  }}
                  className="timeline-card"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '5px', marginBottom: '10px' }}>
                    <span style={{ color: exp.type === 'Education' ? '#3b82f6' : 'var(--color-primary)', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }}>
                      {exp.type}
                    </span>
                    <span style={{ color: '#888', fontSize: '13px' }}>
                      {exp.period}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '5px', fontWeight: 'bold' }}>
                    {exp.role}
                  </h3>

                  <a 
                    href={exp.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: '#aaa', fontSize: '14px', fontWeight: '500', textDecoration: 'none', display: 'inline-block', marginBottom: '15px' }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#aaa'}
                  >
                    🏢 {exp.company} &bull; <span style={{ fontSize: '12px' }}>{exp.location}</span>
                  </a>

                  <p style={{ color: '#ccc', fontSize: '13.5px', lineHeight: '1.6', marginBottom: '15px' }}>
                    {exp.desc}
                  </p>

                  <div style={{ marginBottom: '15px' }}>
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#aaa', marginBottom: '6px', lineHeight: '1.4' }}>
                        <span>•</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.techs.map((tech, tIdx) => (
                      <span key={tIdx} style={{ fontSize: '11px', background: '#111', color: '#888', padding: '2px 8px', borderRadius: '4px', border: '1px solid #222' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}
