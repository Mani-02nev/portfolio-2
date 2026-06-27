import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PressItem {
  publication: string
  title: string
  desc: string
  logoText: string
  logoBg: string
  date: string
  readTime: string
  content: string[]
}

export default function MediaPressSection() {
  const [selectedPress, setSelectedPress] = useState<PressItem | null>(null)

  const mediaItems: PressItem[] = [
    {
      publication: "Google Developers Blog",
      title: "Google Campus Ambassadors Leading AI Workshops in India",
      desc: "An in-depth spotlight on student leaders who are driving local technical workshops, cloud learning programs, and community-centric AI study jams.",
      logoText: "G",
      logoBg: "#4285F4",
      date: "March 12, 2026",
      readTime: "4 min read",
      content: [
        "Google's Developer Relations team has officially recognized the outstanding impact made by the 2026 Campus Ambassadors in India, showcasing community-focused learning and hands-on workshops.",
        "### Leading from the Grassroots",
        "Across campuses in India, selected student ambassadors are organizing technical meetups, cloud study jams, and generative AI workshops. Karuppasamy M (Mr K) is highlighted as one of the key contributors driving peer-to-peer enablement at the Seshasayee Institute of Technology.",
        "### Fostering Practical AI Skills",
        "Under his guidance, the campus developer group successfully completed the Google Cloud Study Jams program. Over 200 builders learned how to utilize Vertex AI APIs, design web frameworks, and configure secure databases, bridging the gap between theoretical computer engineering courses and actual software production.",
        "### Google Campus Ambassador Vision",
        "The program aims to establish student leaders who represent Google Developer Programs, driving local technological innovation, sharing resources, and preparing peers for global cloud opportunities."
      ]
    },
    {
      publication: "VDart Tech News",
      title: "Innovating Staffing Automation: Inside the AI & ML Intern Showcase",
      desc: "A feature discussing VDart's summer internship projects, highlighting Mr K's machine learning pipelines that automate recruiting and CV screening workflows.",
      logoText: "V",
      logoBg: "#0f172a",
      date: "August 28, 2024",
      readTime: "5 min read",
      content: [
        "VDart Inc. recently hosted its annual technical showcase, featuring enterprise-grade automation solutions designed by summer engineering interns.",
        "### Automating the Recruiter Pipeline",
        "During his internship at VDart, Karuppasamy M designed and deployed machine learning pipelines to automate resume parsing and screening workflows. His solutions replaced legacy keyword indexing with semantic NLP search, allowing recruiters to match candidate CV profiles directly against complex job criteria.",
        "### Core Tech Architecture",
        "The automation engine utilizes OCR libraries, custom Python parsers, and fine-tuned LLM embeddings. This backend was containerized with Docker and linked via REST APIs to a responsive React management interface, proving capable of processing thousands of applications with zero human overhead.",
        "### Business Impact",
        "By automating the screening phase, VDart recruiters saw a 50% decrease in manual evaluation times, showing how student founders build production-grade, business-critical systems."
      ]
    },
    {
      publication: "Novi Tech Spotlight",
      title: "Designing Data Stories: Interactive Dashboards for Tomorrow",
      desc: "Novi Tech's review of modern developer interns who successfully integrated Python predictive intelligence and React UI components to deliver business insights.",
      logoText: "N",
      logoBg: "#ea580c",
      date: "May 15, 2023",
      readTime: "4 min read",
      content: [
        "Novi Tech's monthly technical review features student software engineers who successfully apply data science and modern frontend development to solve business intelligence problems.",
        "### Data-Driven Storytelling",
        "Karuppasamy M developed interactive predictive analytics dashboards during his internship at Novi Tech. By refactoring query pipelines and caching PostgreSQL indexes, he reduced dashboard rendering times by over 40%, optimizing data visualization streams.",
        "### React & Python Orchestration",
        "The dashboards were built on top of a React structure, powered by a Python backend leveraging analytics libraries to extract actionable data points from raw relational databases.",
        "### Engineering Excellence",
        "Novi Tech's leadership recognized his focus on clean code structure, maintainable API design, and intuitive user experiences, establishing a solid record in web systems development."
      ]
    },
    {
      publication: "SIT Campus Bulletin",
      title: "Student Founder Launches Mr K AI Ecosystem",
      desc: "Seshasayee Institute of Technology's feature story on how Karuppasamy M is balancing computer engineering academics with bootstrapping SaaS products.",
      logoText: "S",
      logoBg: "#16a34a",
      date: "January 10, 2025",
      readTime: "5 min read",
      content: [
        "SIT's Campus Bulletin has featured computer engineering student Karuppasamy M, celebrating the official launch of the Mr K AI Ecosystem product studio.",
        "### The Student Entrepreneur Mindset",
        "Balancing academic requirements with software development is a major hurdle. The bulletin outlines how Karuppasamy managed his class schedule while building, launching, and hosting SaaS tools—including Agent K and CV parsers.",
        "### The Mr K AI Ecosystem",
        "The product studio aims to ship specialized, AI-first micro-SaaS utilities. The bulletin highlights the flagship Agent K autonomous browser workspace, which reached 100+ active users shortly after deployment.",
        "### Inspiring Local Builders",
        "By sharing his validation cycles and technical blueprints openly, Karuppasamy has inspired a wave of student developers in Trichy to build applications in public, validate early, and bootstrap their own software companies."
      ]
    }
  ]

  return (
    <section id="media" className="media-section bg-black" style={{ padding: '80px 0', borderTop: '1px solid #111' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)' }}>Press Coverage</span>
          <h2 className="section-title primary" style={{ fontSize: '40px', marginBottom: '15px', marginTop: '8px' }}>
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
              onClick={() => setSelectedPress(item)}
              className="press-card"
              style={{ 
                background: '#080808', 
                border: '1px solid #222', 
                borderRadius: '12px', 
                padding: '30px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = '#222'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
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
                    fontSize: '18px',
                    flexShrink: 0
                  }}>
                    {item.logoText}
                  </div>
                  <span style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {item.publication}
                  </span>
                </div>

                <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: '600', marginBottom: '15px', lineHeight: '1.4' }} className="press-card-title">
                  {item.title}
                </h3>
                <p style={{ color: '#aaa', fontSize: '13.5px', lineHeight: '1.6', marginBottom: '25px' }} className="press-card-desc">
                  {item.desc}
                </p>
              </div>

              <div 
                className="btn-outline" 
                style={{ 
                  padding: '10px 20px', 
                  fontSize: '13px', 
                  textAlign: 'center',
                  display: 'block',
                  borderRadius: '6px',
                  border: '1px solid #333',
                  color: '#fff',
                  fontWeight: 600,
                  transition: 'background 0.2s'
                }}
              >
                Read Article &rarr;
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Press Article Reading Modal Overlay */}
      <AnimatePresence>
        {selectedPress && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(16px)',
              zIndex: 2000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
            }}
            onClick={() => setSelectedPress(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="press-modal-content"
              style={{
                width: '100%',
                maxWidth: '740px',
                maxHeight: '85vh',
                background: '#0d0d0e',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: 'clamp(24px, 5vw, 48px)',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPress(null)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#fff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'all 0.2s',
                  zIndex: 10,
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = 'rgba(255,212,0,0.1)'
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = '#fff'
                }}
              >
                ✕
              </button>

              {/* Publication Header Badge */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
                <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--accent)' }}>
                  {selectedPress.publication}
                </span>
                <span>•</span>
                <span>{selectedPress.readTime}</span>
                <span>•</span>
                <span>{selectedPress.date}</span>
              </div>

              {/* Title */}
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', textTransform: 'uppercase', letterSpacing: '-0.8px', lineHeight: 1.15, color: '#fff', marginBottom: '30px', paddingRight: '40px' }}>
                {selectedPress.title}
              </h2>

              {/* Divider */}
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '30px' }} />

              {/* Article Content Body */}
              <div style={{ fontSize: 'clamp(14.5px, 1.8vw, 16px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75 }}>
                {selectedPress.content.map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h4
                        key={idx}
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(18px, 2.5vw, 22px)',
                          color: '#fff',
                          textTransform: 'uppercase',
                          marginTop: '36px',
                          marginBottom: '16px',
                          letterSpacing: '-0.2px',
                        }}
                      >
                        {paragraph.replace('### ', '')}
                      </h4>
                    )
                  }
                  return (
                    <p key={idx} style={{ marginBottom: '18px' }}>
                      {paragraph}
                    </p>
                  )
                })}
              </div>

              {/* Footer Done Button */}
              <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setSelectedPress(null)}
                  className="btn btn-yellow"
                  style={{ fontSize: '13px', padding: '12px 28px' }}
                >
                  Done Reading
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (max-width: 768px) {
          .press-card {
            padding: 22px 18px !important;
          }
          .press-card-title {
            font-size: 15.5px !important;
            margin-bottom: 10px !important;
          }
          .press-card-desc {
            font-size: 13px !important;
            margin-bottom: 18px !important;
            line-height: 1.55 !important;
          }
          .press-modal-content {
            padding: 28px 20px !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
