import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate email submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="contact-section bg-black" style={{ padding: '80px 0', borderTop: '1px solid #111' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="section-title primary" style={{ fontSize: '40px', marginBottom: '15px' }}>
            Let's Build Something Great Together
          </h2>
          <p style={{ color: '#aaa', fontSize: '15.5px', lineHeight: '1.6' }}>
            Have a project in mind, want to discuss AI technologies, or interested in recruitment opportunities? Drop a message below!
          </p>
        </div>

        {submitted ? (
          <div style={{ background: 'rgba(255, 209, 0, 0.05)', border: '1px solid var(--color-primary)', borderRadius: '8px', padding: '30px', textAlign: 'center', color: '#fff' }}>
            <h3 style={{ color: 'var(--color-primary)', fontSize: '20px', marginBottom: '10px' }}>Message Sent Successfully!</h3>
            <p style={{ color: '#ccc', fontSize: '14px' }}>Thank you for reaching out. Karuppasamy will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', textTransform: 'uppercase', color: '#888', fontWeight: 'bold', letterSpacing: '0.5px' }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. John Doe"
                  style={{
                    background: '#080808',
                    border: '1px solid #222',
                    borderRadius: '4px',
                    padding: '14px 18px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '14.5px',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#222'}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', textTransform: 'uppercase', color: '#888', fontWeight: 'bold', letterSpacing: '0.5px' }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. john@example.com"
                  style={{
                    background: '#080808',
                    border: '1px solid #222',
                    borderRadius: '4px',
                    padding: '14px 18px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '14.5px',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#222'}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '12px', textTransform: 'uppercase', color: '#888', fontWeight: 'bold', letterSpacing: '0.5px' }}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="e.g. Collaboration Proposal"
                style={{
                  background: '#080808',
                  border: '1px solid #222',
                  borderRadius: '4px',
                  padding: '14px 18px',
                  color: '#fff',
                  outline: 'none',
                  fontSize: '14.5px',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#222'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '12px', textTransform: 'uppercase', color: '#888', fontWeight: 'bold', letterSpacing: '0.5px' }}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Type your message here..."
                style={{
                  background: '#080808',
                  border: '1px solid #222',
                  borderRadius: '4px',
                  padding: '14px 18px',
                  color: '#fff',
                  outline: 'none',
                  fontSize: '14.5px',
                  transition: 'border-color 0.3s',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#222'}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{
                marginTop: '10px',
                padding: '16px 36px',
                fontSize: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: 'bold',
                alignSelf: 'center'
              }}
            >
              Send Message &rarr;
            </button>
          </form>
        )}

      </div>
    </section>
  )
}
