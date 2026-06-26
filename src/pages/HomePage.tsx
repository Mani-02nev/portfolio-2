import HeroSection from '../components/HeroSection'
import FounderQuoteSection from '../components/FounderQuoteSection'
import AboutSection from '../components/AboutSection'
import JourneySection from '../components/JourneySection'
import MissionSection from '../components/MissionSection'
import AchievementsSection from '../components/AchievementsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactCTASection from '../components/ContactCTASection'

export default function HomePage() {
  return (
    <>
      {/* 1. First impression */}
      <HeroSection />

      {/* 2. Founder voice */}
      <FounderQuoteSection />

      {/* 3. Who is Mr K */}
      <AboutSection />

      {/* 4. The journey */}
      <JourneySection />

      {/* 5. Mission + Core Values */}
      <MissionSection />

      {/* 6. Achievements */}
      <AchievementsSection />

      {/* 7. Social proof */}
      <TestimonialsSection />

      {/* 8. Final CTA */}
      <ContactCTASection />
    </>
  )
}
