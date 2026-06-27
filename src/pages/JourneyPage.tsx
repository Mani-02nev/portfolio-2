import { motion } from 'framer-motion'

const detailedMilestones = [
  {
    year: '2022',
    title: 'Started Programming & Engineering Craft',
    tag: 'Learning',
    period: 'Early 2022',
    desc: 'Dived deep into Computer Engineering fundamentals, learning algorithms, data structures, and systems design from first principles. Built local tools in Python and C++, establishing a solid foundation in software craft.',
    outcomes: [
      'Mastered core algorithms and data structures.',
      'Built 10+ local CLI automation scripts.',
      'Explored system architectures and OOP design principles.'
    ]
  },
  {
    year: '2023',
    title: 'First Professional Internship — Novi Tech',
    tag: 'Internship',
    period: 'Mid 2023',
    desc: 'Joined Novi Tech as a Data Analytics intern. Designed and deployed interactive Business Intelligence dashboards, automating data reporting pipelines and improving analytics efficiency for executive decision-making.',
    outcomes: [
      'Processed massive raw datasets and built BI dashboards.',
      'Automated spreadsheet workflows, saving hours of manual calculation.',
      'Acquired Google Core Python Certification to validate analytical skills.'
    ]
  },
  {
    year: '2023',
    title: 'Began Community Mentorship & Leadership',
    tag: 'Mentorship',
    period: 'Late 2023',
    desc: 'Started sharing programming knowledge and ML insights with campus students. Organised peer-to-peer coding bootcamps and helped over 50+ students debug full-stack projects.',
    outcomes: [
      'Led 15+ coding sessions and study jams.',
      'Mentored peer builders to build their first web apps.',
      'Fostered a collaborative tech culture on campus.'
    ]
  },
  {
    year: '2024',
    title: 'AI & ML Engineering — VDart Inc.',
    tag: 'AI / ML',
    period: 'Mid 2024',
    desc: 'Worked at VDart Inc. as an AI/ML engineering intern. Deployed machine learning models, optimized NLP algorithms for textual analytics, and contributed code to enterprise cloud microservices.',
    outcomes: [
      'Fine-tuned NLP models for enterprise text classification.',
      'Built and deployed containerized REST APIs for ML inference.',
      'Acquired deep understanding of cloud computing services and MLOps.'
    ]
  },
  {
    year: '2024',
    title: 'Shipped First Production AI Products',
    tag: 'Products',
    period: 'Late 2024',
    desc: 'Developed and shipped multiple functional AI SaaS solutions, including a Legal Agent, HR Management Portal, and Sales Intelligence Tool. Handled everything from frontend UX to LLM fine-tuning and hosting.',
    outcomes: [
      'Built MR K AI Law Agent resolving legal document queries.',
      'Shipped an AI Sales Intelligence dashboard with automated lead generation.',
      'Maintained 99.9% uptime on production deployments.'
    ]
  },
  {
    year: '2025',
    title: 'Founded Mr K AI Ecosystem Product Studio',
    tag: 'Founding',
    period: 'Early 2025',
    desc: 'Launched Mr K AI Ecosystem — a product studio focusing on shipping state-of-the-art AI-first micro-SaaS tools. Shipped CV Builder and the flagship Agent K autonomous workspace.',
    outcomes: [
      'Designed and launched Agent K dashboard with multi-model capability.',
      'Built a resume parser using optical character recognition and LLMs.',
      'Reached 100+ active product users within months of launch.'
    ]
  },
  {
    year: '2026',
    title: 'Google Campus Ambassador Selection',
    tag: 'Google',
    period: 'Early 2026',
    desc: 'Selected as the Google Campus Ambassador. Organized developer workshops, hackathons, and Google Cloud study jams to train students in modern web technologies and AI API integrations.',
    outcomes: [
      'Served as a liaison between Google Developer Programs and campus clubs.',
      'Coordinated the Google Cloud Study Jams program.',
      'Speaker at 5+ technology panel events.'
    ]
  },
  {
    year: '2026',
    title: 'Building India\'s AI Ecosystem Future',
    tag: 'Now',
    period: 'Present',
    desc: 'Scaling the Mr K AI Ecosystem product line. Expanding SaaS modules to cover CRM and workflow automation. Speaking at key technical colleges in Trichy and mentoring the next generation of engineers.',
    outcomes: [
      'Mentoring 50+ junior developers and tech enthusiasts.',
      'Organizing AI innovation events at SIT Trichy.',
      'Spearheading developer advocacy for autonomous agent frameworks.'
    ]
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  })
}

export default function JourneyPage() {
  return (
    <div className="page-wrapper" style={{ background: '#000000', color: '#ffffff', minHeight: '100vh', padding: '160px 0 100px 0' }}>
      
      {/* Background radial glow */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '600px',
        background: 'radial-gradient(ellipse at top, rgba(255,212,0,0.03) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Page Header */}
        <div style={{ maxWidth: '800px', marginBottom: '100px' }}>
          <span className="section-label">Detailed Timeline</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(46px, 6vw, 84px)', margin: '16px 0 24px 0' }}>
            A Founder's <span>Journey</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '18px', color: 'var(--secondary)', lineHeight: 1.8 }}>
            An in-depth chronological breakdown of milestones, core engineering roles, SaaS products, and community initiatives that define my track record.
          </p>
        </div>

        {/* Detailed Timeline Layout */}
        <div style={{ position: 'relative', paddingLeft: '40px' }}>
          
          {/* Vertical Connecting Track */}
          <div style={{
            position: 'absolute',
            left: '6px',
            top: '12px',
            bottom: '24px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent) 0%, rgba(255,212,0,0.15) 85%, transparent 100%)',
            zIndex: 1
          }} />

          {/* Milestones list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {detailedMilestones.map((m, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                custom={i}
                variants={fadeUp}
                style={{ position: 'relative' }}
              >
                {/* Connector Dot */}
                <div style={{
                  position: 'absolute',
                  left: '-40px',
                  top: '12px',
                  transform: 'translateX(-50%)',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: i === detailedMilestones.length - 1 ? 'var(--accent)' : '#222',
                  border: i === detailedMilestones.length - 1 ? '2px solid var(--accent)' : '2px solid rgba(255,255,255,0.15)',
                  boxShadow: i === detailedMilestones.length - 1 ? '0 0 16px rgba(255,212,0,0.5)' : 'none',
                  zIndex: 3
                }} />

                {/* Milestone Block */}
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px', alignItems: 'start' }} className="journey-block">
                  
                  {/* Left Column: Period / Year */}
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '38px', color: 'var(--accent)', lineHeight: 1, letterSpacing: '-0.5px' }}>
                      {m.year}
                    </div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)', marginTop: '6px', fontWeight: 600 }}>
                      {m.period}
                    </div>
                  </div>

                  {/* Right Column: Card Details */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '24px',
                    padding: '40px',
                    position: 'relative',
                    overflow: 'hidden'
                  }} className="journey-card">
                    
                    {/* Badge */}
                    <div style={{
                      display: 'inline-flex',
                      padding: '4px 12px',
                      borderRadius: '50px',
                      background: 'rgba(255,212,0,0.06)',
                      border: '1px solid rgba(255,212,0,0.15)',
                      fontSize: '10px',
                      fontWeight: 800,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      marginBottom: '20px'
                    }}>
                      {m.tag}
                    </div>

                    {/* Title */}
                    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '16px', lineHeight: 1.3 }}>
                      {m.title}
                    </h3>

                    {/* Paragraph */}
                    <p style={{ fontSize: '15.5px', color: 'var(--secondary)', lineHeight: 1.8, marginBottom: '28px' }}>
                      {m.desc}
                    </p>

                    {/* Key Outcomes */}
                    <div>
                      <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '14px' }}>
                        Key Outcomes
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {m.outcomes.map((out, j) => (
                          <div key={j} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '4px', flexShrink: 0 }}>
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span style={{ fontSize: '14px', color: 'var(--secondary)', lineHeight: 1.5 }}>
                              {out}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .journey-block {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .journey-card {
            padding: 24px !important;
          }
        }
      `}</style>
    </div>
  )
}
