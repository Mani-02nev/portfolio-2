export default function AchievementsSection() {
  const stats = [
    { label: "Companies Founded", value: "1+" },
    { label: "Products Shipped", value: "9+" },
    { label: "Developers Mentored", value: "50+" },
    { label: "Students Inspired", value: "200+" },
    { label: "Years Building", value: "3+" },
    { label: "Git Commits", value: "3K+" },
    { label: "Model Accuracy", value: "94.8%" },
    { label: "Events Conducted", value: "15+" }
  ]

  return (
    <section id="achievements" className="achievements-section bg-black" style={{ padding: '80px 0', borderTop: '1px solid #111' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="section-title primary" style={{ fontSize: '40px', marginBottom: '15px' }}>
            Achievements & Metrics
          </h2>
          <p style={{ color: '#aaa', fontSize: '15.5px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
            A quantitative overview of code contributions, product validation, community representation, and AI accuracy.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: '#080808', 
                border: '1px solid #222', 
                borderRadius: '8px', 
                padding: '30px', 
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#222'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ 
                fontSize: '42px', 
                fontFamily: 'var(--font-heading)', 
                color: 'var(--color-primary)', 
                fontWeight: 'bold',
                marginBottom: '10px'
              }}>
                {stat.value}
              </div>
              <div style={{ 
                fontSize: '13px', 
                color: '#aaa', 
                textTransform: 'uppercase', 
                fontWeight: '600',
                letterSpacing: '0.5px' 
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
