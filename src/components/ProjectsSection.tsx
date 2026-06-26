import { useState } from 'react'

interface Project {
  title: string
  desc: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  bgGradient: string
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Mr K AI Law Agent",
      desc: "Intelligent legal assistant powered by AI that provides case law analysis, contract review, and legal document insights with multi-domain legal expertise.",
      tags: ["AI Agent", "Full Stack", "React", "NLP"],
      liveUrl: "https://pickup-law-agent.vercel.app/",
      bgGradient: "linear-gradient(135deg, #1e3a8a 0%, #0d9488 100%)"
    },
    {
      title: "Agent K",
      desc: "Browser-based autonomous AI web agent built with scalable SaaS architecture, supporting multi-model orchestration.",
      tags: ["AI Platform", "Full Stack", "React", "Python"],
      liveUrl: "https://agent02.vercel.app/",
      bgGradient: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)"
    },
    {
      title: "KS AI Resume Builder",
      desc: "AI-powered SaaS platform that generates ATS-optimized resumes instantly using structured prompt engineering.",
      tags: ["AI SaaS", "Full Stack", "React"],
      liveUrl: "https://kscv.vercel.app/",
      bgGradient: "linear-gradient(135deg, #059669 0%, #3b82f6 100%)"
    },
    {
      title: "AI HR Management System",
      desc: "AI-driven HR management platform with smart employee analytics, automated attendance tracking, leave management, and intelligent recruitment pipeline.",
      tags: ["AI Platform", "Full Stack", "Python", "Machine Learning"],
      githubUrl: "https://github.com/Mani-02nev/HRMS",
      bgGradient: "linear-gradient(135deg, #ea580c 0%, #e11d48 100%)"
    },
    {
      title: "AI Sales Intelligence",
      desc: "Smart sales analytics platform leveraging AI for lead scoring, revenue forecasting, pipeline optimization, and actionable business insights.",
      tags: ["AI Platform", "Full Stack", "Python", "Data Analytics"],
      githubUrl: "https://github.com/Mani-02nev/Ai-Sales-Inteligence",
      bgGradient: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)"
    },
    {
      title: "AI Data Analytics + Assistant",
      desc: "Comprehensive data analytics platform with an integrated AI virtual assistant for natural language queries, real-time visualization, and automated insights.",
      tags: ["AI Agent", "Data Analytics", "Python", "NLP"],
      githubUrl: "https://github.com/Mani-02nev/Va_bot",
      bgGradient: "linear-gradient(135deg, #0f766e 0%, #0369a1 100%)"
    },
    {
      title: "AI Health Analytics & Sugar Predict",
      desc: "AI-powered health analytics tool that predicts blood sugar levels, assesses diabetes risk, and provides personalized dietary recommendations using ML models.",
      tags: ["Machine Learning", "Python", "Health Tech", "Data Analytics"],
      githubUrl: "https://github.com/Mani-02nev/Suger-predect",
      bgGradient: "linear-gradient(135deg, #0d9488 0%, #16a34a 100%)"
    },
    {
      title: "UNIVAULT",
      desc: "Lightweight PHP-based e-commerce system using CSV flat-file storage instead of SQL databases for portability.",
      tags: ["E-Commerce", "PHP", "Full Stack"],
      liveUrl: "https://univalut.onrender.com/",
      bgGradient: "linear-gradient(135deg, #4b5563 0%, #111827 100%)"
    },
    {
      title: "AC Duct ERP System",
      desc: "Full-stack unified digital system for AC duct fabrication companies in Dubai, replacing manual workflows from inquiry to reporting.",
      tags: ["React", "Node.js", "PostgreSQL", "React Native", "Full Stack"],
      bgGradient: "linear-gradient(135deg, #854d0e 0%, #78350f 100%)"
    }
  ]

  const categories = ["All", "AI & ML", "Full Stack", "SaaS & E-Commerce"]
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = projects.filter(p => {
    if (activeFilter === "All") return true
    if (activeFilter === "AI & ML") {
      return p.tags.includes("AI Agent") || p.tags.includes("AI Platform") || p.tags.includes("Machine Learning") || p.tags.includes("AI SaaS")
    }
    if (activeFilter === "Full Stack") {
      return p.tags.includes("Full Stack")
    }
    if (activeFilter === "SaaS & E-Commerce") {
      return p.tags.includes("AI SaaS") || p.tags.includes("E-Commerce")
    }
    return true
  })

  return (
    <section id="products" className="youtube-section bg-black" style={{ padding: '100px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="section-title primary" style={{ fontSize: '40px', marginBottom: '15px' }}>Products & Products Studio</h2>
          <p style={{ color: '#aaa', maxWidth: '700px', fontSize: '16px', lineHeight: '1.6' }}>
            A comprehensive list of products launched under the <strong>Mr K AI Ecosystem</strong>.
          </p>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(cat)}
                style={{
                  background: activeFilter === cat ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeFilter === cat ? 'var(--color-black)' : 'var(--color-white)',
                  border: activeFilter === cat ? '1px solid var(--color-primary)' : '1px solid #333',
                  padding: '8px 24px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '40px' }}>
          {filteredProjects.map((p, idx) => (
            <div key={idx} className="youtube-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              
              {/* Visual preview header */}
              <div style={{ height: '180px', background: p.bgGradient, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', position: 'relative' }}>
                <span style={{ background: 'rgba(0,0,0,0.6)', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', color: '#fff', alignSelf: 'flex-start', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {p.tags[0]}
                </span>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 'bold', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                  {p.title}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '25px', background: '#080808', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                    {p.desc}
                  </p>
                  
                  {/* Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                    {p.tags.map((tag, tIdx) => (
                      <span key={tIdx} style={{ fontSize: '11px', background: 'rgba(255, 209, 0, 0.08)', color: 'var(--color-primary)', border: '1px solid rgba(255, 209, 0, 0.2)', padding: '2px 8px', borderRadius: '4px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: '15px' }}>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ padding: '10px 20px', fontSize: '13px', textDecoration: 'none', textAlign: 'center', flexGrow: 1 }}
                    >
                      Live Demo
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      style={{ padding: '8px 20px', fontSize: '13px', textDecoration: 'none', textAlign: 'center', flexGrow: 1 }}
                    >
                      GitHub
                    </a>
                  )}
                  {!p.liveUrl && !p.githubUrl && (
                    <span style={{ fontSize: '13px', color: '#666', fontStyle: 'italic', padding: '10px 0' }}>
                      Proprietary Enterprise App
                    </span>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
