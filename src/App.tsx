import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import JourneyPage from './pages/JourneyPage'
import CompaniesPage from './pages/CompaniesPage'
import ProductsPage from './pages/ProductsPage'
import SpeakingPage from './pages/SpeakingPage'
import MentorshipPage from './pages/MentorshipPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/speaking" element={<SpeakingPage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
