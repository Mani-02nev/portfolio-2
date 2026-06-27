import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MediaPressSection from '../components/MediaPressSection'

interface Article {
  id: string
  category: 'Resume' | 'Entrepreneurship'
  title: string
  date: string
  readTime: string
  excerpt: string
  content: string[]
}

const ARTICLES: Article[] = [
  {
    id: 'ats-optimization',
    category: 'Resume',
    title: 'Mastering the ATS: How to Build Resumes That Get Seen',
    date: 'June 25, 2026',
    readTime: '5 min read',
    excerpt: 'An industry-grade guide on designing resume templates that successfully pass through Applicant Tracking System parsers.',
    content: [
      'Applicant Tracking Systems (ATS) are the gatekeepers of modern hiring. Over 95% of Fortune 500 companies use them to parse and rank resumes before a human recruiter ever sees them. Understanding how they work is the first step to landing interviews.',
      '### 1. Simplify Your Formatting',
      'ATS parsers are text-based machines. They struggle to parse complex designs, multi-column tables, graphics, and text boxes. Keep your layout single-column, clear of unnecessary dividers, and use standard section headings like "Work Experience", "Education", and "Skills".',
      '### 2. Tailor Keywords to the Job Description',
      'Match your resume keywords exactly with the skills listed in the job description. If a listing asks for "React.js" and you wrote "React", the parser might miss the match. Ensure your technical terms and credentials match standard industry labels.',
      '### 3. Use Action-Driven Metrics',
      'Recruiters look for outcomes, not just task lists. Instead of writing "Responsible for writing clean code", write "Developed responsive AI interface scaling user signups by 18% in three weeks." Quantity and validate your milestones.',
      '### 4. Choose the Right File Format',
      'While PDF is widely accepted, some older parsers struggle with text extraction. Standard PDFs created from editable documents (like Microsoft Word or ATS-compliant tools like KS AI Resume Builder) parse perfectly. Avoid uploading image-based files like JPEGs or scanned documents.'
    ]
  },
  {
    id: 'lean-ai-startups',
    category: 'Entrepreneurship',
    title: 'The Lean AI Startup: Launching SaaS on Zero Budget',
    date: 'June 18, 2026',
    readTime: '6 min read',
    excerpt: 'How to leverage modern AI tools, open APIs, and serverless hosting to build, validate, and launch functional startups.',
    content: [
      'The barrier to entry for building SaaS products has never been lower. In the AI era, you do not need millions in funding to build and deploy useful tools. You can validate your ideas with lean development cycles and minimal infrastructure costs.',
      '### 1. Build an MVP (Minimum Viable Product)',
      'Focus on solving one specific problem exceptionally well. Avoid feature creep. When bootstrapping projects like Agent K or the KS Resume Builder, target a single core pain point—such as instantly formatting resumes or automating a browser task.',
      '### 2. Maximize Serverless and Free Tiers',
      'Leverage hosting providers like Vercel, Netlify, or Firebase that offer extensive free tiers for frontends. Use serverless architectures to handle database records and backend logic only when triggered, preventing high operational overhead.',
      '### 3. Validate Before You Scale',
      'Do not spend months building in secret. Launch a simple landing page with an early-access waitlist, and share it on community hubs like LinkedIn or developer groups. Real market demand is validated by user registration, not initial engineering complexity.',
      '### 4. Solve Your Own Problems First',
      'The most successful bootstrapped products originate from the creator\'s personal bottlenecks. When you solve a workflow difficulty you understand deeply, your design choices become intuitive, and your solution fits the audience automatically.'
    ]
  },
  {
    id: 'action-verbs-resume',
    category: 'Resume',
    title: 'Resume Power Verbs: Writing Impactful Achievements',
    date: 'June 10, 2026',
    readTime: '4 min read',
    excerpt: 'Stop using weak descriptions like "responsible for." Learn how to lead with power verbs and structure achievements quantitatively.',
    content: [
      'The words you choose to start your bullet points dictate the tone of your resume. Passive descriptors like "helped with" or "member of" understate your capabilities. To stand out, you must command your experience using active power verbs.',
      '### 1. Transition from Passive to Active',
      'Instead of: "Responsible for managing the community events."\nUse: "Coordinated 15+ student technical events, inspiring over 200 builders to learn cloud technology."',
      '### 2. Categorize Your Verbs',
      'Tailor your verbs to the specific impact you made:\n- **For Creation**: Developed, Engineered, Pioneered, Authored, Launched.\n- **For Growth**: Scaled, Accelerated, Amplified, Maximized, Expanded.\n- **For Optimization**: Streamlined, Restructured, Automated, Refactored.',
      '### 3. The XYZ Formula',
      'Use Google\'s famous XYZ resume formula: "Accomplished [X] as measured by [Y], by doing [Z]."\nExample: "Streamlined data dashboard queries, reducing load times by 40% (Y) by refactoring PostgreSQL indexes and query pipelines (Z)."',
      '### 4. Keep Bullet Points Concise',
      'Avoid long, winding sentences. Recruiters scan resumes in under 7 seconds. Ensure each bullet point is no longer than 2 lines, beginning with a strong verb and ending with a quantifiable metric.'
    ]
  },
  {
    id: 'customer-discovery',
    category: 'Entrepreneurship',
    title: 'Customer Discovery: Finding What Users Actually Want',
    date: 'June 02, 2026',
    readTime: '5 min read',
    excerpt: 'The critical art of interviewing target users, asking non-biased questions, and refining product-market fit.',
    content: [
      'Many founders fail because they build something nobody wants. Customer discovery is the disciplined process of identifying your audience, understanding their daily friction, and building a product that addresses a verified necessity.',
      '### 1. Don\'t Ask "Would You Buy This?"',
      'People want to be polite and will say "yes" to support you, which creates false validation. Instead, ask about their past behavior: "How do you currently solve this problem?" or "What was the hardest part about doing X last week?"',
      '### 2. Focus on Friction, Not Features',
      'In early interviews, do not talk about your product idea. Let the user talk about their daily workflows. If they repeatedly highlight a specific bottleneck without prompting, you have found a genuine paint point worth building for.',
      '### 3. Find Where Your Users Congregate',
      'Spend time where your target audience lives. If you are building tools for developers, join Discord groups, GitHub discussions, and subreddits. Read their complaints, understand their language, and offer helpful solutions before asking them to try your product.',
      '### 4. Iterate Fast Based on Feedback',
      'Once you launch an early build, watch how users interact with it. Collect feedback immediately and deploy patches. The faster you iterate, the more engaged your early adopters will feel, creating a loyal organic referral loop.'
    ]
  },
  {
    id: 'developer-resume-layout',
    category: 'Resume',
    title: 'Crafting the Ultimate Developer Resume for 2026',
    date: 'May 28, 2026',
    readTime: '4 min read',
    excerpt: 'A clean blueprint for software engineers to highlight technical skills, project scopes, and open-source contributions.',
    content: [
      'As a developer, your resume needs to showcase technical capabilities and problem-solving competence. Avoid clutter and generic lists of programming languages. Instead, structure your profile to highlight how you apply your skills to ship products.',
      '### 1. The Tech Stack Grid',
      'Do not list 50 languages you used once. Group your core competencies cleanly:\n- **Languages**: JavaScript, TypeScript, Python, SQL.\n- **Frameworks**: React, Next.js, Node.js, Express.\n- **Tools/Databases**: PostgreSQL, Git, Docker, Firebase.',
      '### 2. Detail Your Projects Like Jobs',
      'If you lack commercial experience, treat your independent projects as roles. Describe the architecture, state the specific technologies used, and explain what the app achieves. Provide clickable links to live deployments and GitHub repositories.',
      '### 3. Showcase Open Source & Community',
      'Participating in community initiatives, hackathons, or contributing to open-source libraries demonstrates team collaboration and passion. Highlight roles like "Google Campus Ambassador" or local developer club leads to display soft skills.',
      '### 4. Highlight Clean Code Practices',
      'Mention experience with automated testing, CI/CD pipelines, containerization, or API documentation. This signals to engineering managers that your code is maintainable, readable, and ready for production pipelines.'
    ]
  },
  {
    id: 'community-led-growth',
    category: 'Entrepreneurship',
    title: 'Community-Led Growth: How to Inspire Action',
    date: 'May 14, 2026',
    readTime: '5 min read',
    excerpt: 'Strategies for developer advocates and campus leaders to build collaborative, self-sustaining networks.',
    content: [
      'In a crowded technical landscape, building a product is only half the battle. Creating a community of active developers, builders, and learners is the ultimate differentiator. Community-led growth creates trust and feedback channels.',
      '### 1. Provide Value First, Promote Second',
      'Do not pitch your projects immediately. Establish yourself as a resourceful guide. Organize free coding bootcamps, share detailed guides, and review peer code. Once you build genuine trust, the community will naturally support your launches.',
      '### 2. Decentralize and Empower Builders',
      'A community is not a one-way channel. Empower other developers to lead workshops, moderate discussions, or co-author blogs. By giving active members ownership, you transform a passive audience into a self-sustaining ecosystem.',
      '### 3. The Power of Hackathons and Study Jams',
      'Interactive, timeline-bound events spark creativity and action. Co-running study jams or developer meetups encourages builders to pair-program, share workflows, and show off MVPs, fostering healthy peer validation loops.',
      '### 4. Maintain Consistency and Transparency',
      'Communities thrive on reliable schedules. Whether it is a weekly tech discussion or a monthly newsletter, keep your pacing consistent. Share your build journey transparently—including launch failures—to humanize your founder story.'
    ]
  }
]

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<'All' | 'Resume' | 'Entrepreneurship'>('All')
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  const filteredArticles = ARTICLES.filter(art => 
    activeTab === 'All' ? true : art.category === activeTab
  )

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', background: '#050505', color: '#fff', paddingTop: '100px' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 clamp(16px, 4vw, 40px)' }}>
        
        {/* Page Title */}
        <div style={{ marginBottom: '60px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)' }}>Insights & Guides</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 72px)', textTransform: 'uppercase', letterSpacing: '-1.5px', lineHeight: 1.05, marginTop: '12px', marginBottom: '24px' }}>
            Resume Tips & <span style={{ color: 'var(--accent)' }}>Entrepreneurship</span>
          </h1>
          <p style={{ color: 'var(--secondary)', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.7, maxWidth: '750px', margin: 0 }}>
            Practical blueprints, frameworks, and strategies for software engineers, student builders, and aspiring tech founders. Written from boots-on-the-ground experience.
          </p>
        </div>

        {/* Tab Filters */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {(['All', 'Resume', 'Entrepreneurship'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? 'var(--accent)' : 'transparent',
                color: activeTab === tab ? '#000' : 'rgba(255,255,255,0.7)',
                border: activeTab === tab ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.1)',
                padding: '10px 24px',
                borderRadius: '100px',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={e => {
                if (activeTab !== tab) {
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                }
              }}
              onMouseOut={e => {
                if (activeTab !== tab) {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                }
              }}
            >
              {tab === 'All' ? 'All Guides' : tab === 'Resume' ? 'Resume Tips' : 'Entrepreneurship'}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginBottom: '100px' }}>
          {filteredArticles.map((art, i) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              onClick={() => setSelectedArticle(art)}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                padding: '32px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = 'rgba(255,212,0,0.3)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--accent)' }}>
                    {art.category === 'Resume' ? 'Resume Tip' : 'Entrepreneurship'}
                  </span>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{art.readTime}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, lineHeight: 1.25, color: '#fff', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                  {art.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
                  {art.excerpt}
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.4)' }}>{art.date}</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Read Article <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Media Clips Section */}
      <MediaPressSection />

      {/* Article Reading Overlay Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(16px)',
              zIndex: 1000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
            }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '100%',
                maxWidth: '780px',
                maxHeight: '85vh',
                background: '#0d0d0e',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: 'clamp(24px, 5vw, 56px)',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
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

              {/* Category & Read Time */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
                <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--accent)' }}>
                  {selectedArticle.category === 'Resume' ? 'Resume Tip' : 'Entrepreneurship'}
                </span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>

              {/* Title */}
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4.5vw, 44px)', textTransform: 'uppercase', letterSpacing: '-1px', lineHeight: 1.1, color: '#fff', marginBottom: '32px', paddingRight: '40px' }}>
                {selectedArticle.title}
              </h2>

              {/* Divider */}
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '32px' }} />

              {/* Article Content Body */}
              <div style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }} className="article-body">
                {selectedArticle.content.map((paragraph, idx) => {
                  // Render subheadings cleanly
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h4
                        key={idx}
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(18px, 2.5vw, 24px)',
                          color: '#fff',
                          textTransform: 'uppercase',
                          marginTop: '40px',
                          marginBottom: '16px',
                          letterSpacing: '-0.3px',
                        }}
                      >
                        {paragraph.replace('### ', '')}
                      </h4>
                    )
                  }
                  // Render paragraphs
                  return (
                    <p key={idx} style={{ marginBottom: '20px', whiteSpace: 'pre-line' }}>
                      {paragraph}
                    </p>
                  )
                })}
              </div>

              {/* Close Footer Button */}
              <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setSelectedArticle(null)}
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
        .blog-grid {
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        }
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
          .article-body {
            line-height: 1.75 !important;
          }
        }
      `}</style>
    </div>
  )
}
