import { useState, useRef, useEffect } from 'react'

interface Message {
  sender: 'user' | 'bot'
  text: string
  isHtml?: boolean
}

export default function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hi! I'm the Mr K Analytics Engine. How can I help you explore Karuppasamy's career metrics today?" }
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const suggestedQueries = [
    "Show last 6 months performance",
    "What is your technology stack?",
    "What is your background & experience?",
    "How to contact Karuppasamy?"
  ]

  const handleQueryClick = (query: string) => {
    // Add user message
    const userMsg: Message = { sender: 'user', text: query }
    
    // Determine bot response
    let botMsgText = ""
    if (query === "Show last 6 months performance") {
      botMsgText = `
        <strong>Karuppasamy's Performance Metrics:</strong><br/>
        <ul>
          <li>📈 Learning Velocity: <strong>+142%</strong></li>
          <li>🎯 Model Accuracy: <strong>94.8%</strong></li>
          <li>💻 Git Commits: <strong>240+</strong></li>
          <li>🚀 SaaS Deployments: <strong>5</strong></li>
          <li>📅 Weekly Avg Commits: <strong>60 commits/wk</strong></li>
          <li>⏱️ Daily Avg Coding Hours: <strong>7.3 hrs/day</strong></li>
        </ul>
      `
    } else if (query === "What is your technology stack?") {
      botMsgText = `
        <strong>Engineering Stack & Domain Proficiency:</strong><br/>
        <ul>
          <li><strong>AI & ML (95%):</strong> Python, TensorFlow, PyTorch, Scikit-learn, NLP, Computer Vision, FastAPI</li>
          <li><strong>Full-Stack React/Next.js (90%):</strong> React, TypeScript, Next.js, Tailwind CSS, Vite, HTML5, CSS3, JavaScript</li>
          <li><strong>Data Engineering & SQL (85%):</strong> SQL, Tableaux, Excel, Data Pipelines</li>
          <li><strong>Cloud & DevOps (80%):</strong> Linux, DevOps, Git, GitHub, Vercel deployments</li>
          <li><strong>App Dev:</strong> Flutter, React Native, PHP, Django</li>
        </ul>
      `
    } else if (query === "What is your background & experience?") {
      botMsgText = `
        <strong>Education & Professional Internships:</strong><br/>
        <ul>
          <li>🎓 <strong>Computer Engineering</strong> student at SIT Trichy (2025 - 2027)</li>
          <li>🌐 <strong>Google Campus Ambassador (2026 - Present):</strong> Leading community events and Google developer platforms.</li>
          <li>🤖 <strong>AI & ML Engineering Intern at VDart (2025):</strong> Developed automation pipelines, computer vision, and NLP integration.</li>
          <li>💻 <strong>AI/ML & Data Intern at Novi Tech (2023 - 2024):</strong> Formulated ML analytics dashboards and UX monitoring systems.</li>
        </ul>
      `
    } else if (query === "How to contact Karuppasamy?") {
      botMsgText = `
        <strong>Get in touch directly:</strong><br/>
        <ul>
          <li>✉️ Email: <a href="mailto:karuppasamy.murugesan02@gmail.com" style="color:var(--color-primary)">karuppasamy.murugesan02@gmail.com</a></li>
          <li>🔗 LinkedIn: <a href="https://www.linkedin.com/in/karuppasamy-m-b39995377/" target="_blank" style="color:var(--color-primary)">Profile Link</a></li>
          <li>🐙 GitHub: <a href="https://github.com/Mani-02nev" target="_blank" style="color:var(--color-primary)">github.com/Mani-02nev</a></li>
          <li>📍 Location: Trichy, India</li>
        </ul>
      `
    }

    setMessages(prev => [...prev, userMsg, { sender: 'bot', text: botMsgText, isHtml: true }])
  }

  const handleSendText = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const query = inputValue.trim()
    const userMsg: Message = { sender: 'user', text: query }
    setInputValue("")

    const lowerQuery = query.toLowerCase()
    let botMsgText = ""

    if (lowerQuery.includes("performance") || lowerQuery.includes("metrics") || lowerQuery.includes("commits") || lowerQuery.includes("stat")) {
      botMsgText = `
        <strong>Mr K Analytics Engine Metrics:</strong><br/>
        <ul>
          <li>📈 Learning Velocity (6 months): <strong>+142%</strong></li>
          <li>🎯 Model Accuracy: <strong>94.8%</strong></li>
          <li>💻 Git Commits: <strong>240+</strong></li>
          <li>🚀 SaaS Deployments: <strong>5</strong></li>
        </ul>
      `
    } else if (lowerQuery.includes("tech") || lowerQuery.includes("stack") || lowerQuery.includes("languages") || lowerQuery.includes("python") || lowerQuery.includes("react")) {
      botMsgText = `
        <strong>Primary Engineering Technologies:</strong><br/>
        Java, Python, C, C++, HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Django, Tailwind CSS, Flutter, React Native, TensorFlow, PyTorch, Git, GitHub.
      `
    } else if (lowerQuery.includes("background") || lowerQuery.includes("experience") || lowerQuery.includes("education") || lowerQuery.includes("study") || lowerQuery.includes("intern")) {
      botMsgText = `
        <strong>Career Background Overview:</strong><br/>
        Karuppasamy is a Computer Engineering student (SIT Trichy) and has completed multiple technical internships, including <strong>VDart Inc.</strong> (AI & ML) and <strong>Novi Tech Company</strong> (Data & AI). He is also currently serving as a <strong>Google Campus Ambassador</strong>.
      `
    } else if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("linkedin") || lowerQuery.includes("reach")) {
      botMsgText = `
        <strong>Contact Channels:</strong><br/>
        Email: <a href="mailto:karuppasamy.murugesan02@gmail.com" style="color:var(--color-primary)">karuppasamy.murugesan02@gmail.com</a><br/>
        LinkedIn: <a href="https://www.linkedin.com/in/karuppasamy-m-b39995377/" target="_blank" style="color:var(--color-primary)">Profile Link</a>
      `
    } else if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey")) {
      botMsgText = "Hello! I am the Mr K Analytics Engine. Feel free to click any of the suggested queries below, or ask me about Karuppasamy's projects, stack, or experience!"
    } else {
      botMsgText = `
        <strong>Mr K Value Proposition:</strong><br/>
        Karuppasamy M (Mr K) combines solid systems foundations (Diploma in Computer Engineering) with practical AI/ML model deployment (VDart, Novi Tech) and community representation (Google Campus Ambassador). He works with high accuracy, fast turnaround, and values premium UX/UI styling.
      `
    }

    setMessages(prev => [...prev, userMsg, { sender: 'bot', text: botMsgText, isHtml: true }])
  }

  // Scroll to bottom whenever messages list changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isOpen])

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 10000 }}>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-black)',
          border: 'none',
          boxShadow: '0 8px 32px rgba(255, 209, 0, 0.3)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08) rotate(10deg)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '0',
            width: '380px',
            maxWidth: 'calc(100vw - 60px)',
            height: '500px',
            backgroundColor: 'rgba(10, 10, 10, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 209, 0, 0.2)',
            borderRadius: '16px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeInUp 0.3s ease'
          }}
        >
          {/* Header */}
          <div style={{ background: 'linear-gradient(90deg, #111 0%, #1a1a1a 100%)', padding: '18px 20px', borderBottom: '1px solid rgba(255, 259, 0, 0.1)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
            <div>
              <div style={{ color: '#fff', fontSize: '15px', fontWeight: 'bold', fontFamily: 'var(--font-heading)', letterSpacing: '0.5px' }}>
                MR K ANALYTICS ENGINE
              </div>
              <div style={{ color: '#888', fontSize: '11px' }}>AI-Powered Portfolio Assistant</div>
            </div>
          </div>

          {/* Messages Container */}
          <div style={{ flexGrow: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  background: msg.sender === 'user' ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.05)',
                  color: msg.sender === 'user' ? 'var(--color-black)' : '#fff',
                  border: msg.sender === 'user' ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '12px 16px',
                  borderRadius: msg.sender === 'user' ? '12px 12px 0 12px' : '12px 12px 12px 0',
                  fontSize: '13.5px',
                  lineHeight: '1.5'
                }}
              >
                {msg.isHtml ? (
                  <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                ) : (
                  msg.text
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions pills */}
          <div style={{ padding: '0 20px 10px 20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '10.5px', color: '#555', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Suggested Queries</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {suggestedQueries.map((query, i) => (
                <button
                  key={i}
                  onClick={() => handleQueryClick(query)}
                  style={{
                    background: 'rgba(255, 209, 0, 0.04)',
                    color: '#ccc',
                    border: '1px solid rgba(255, 209, 0, 0.15)',
                    borderRadius: '50px',
                    padding: '5px 12px',
                    fontSize: '11px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 209, 0, 0.15)';
                    e.currentTarget.style.color = '#ccc';
                  }}
                >
                  {query}
                </button>
              ))}
            </div>
          </div>

          {/* Text Input Form */}
          <form onSubmit={handleSendText} style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', background: '#0b0b0b' }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me something..."
              style={{
                flexGrow: 1,
                background: 'transparent',
                border: 'none',
                color: '#fff',
                padding: '16px 20px',
                fontSize: '13.5px',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--color-primary)',
                padding: '0 20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              SEND
            </button>
          </form>

        </div>
      )}
    </div>
  )
}
