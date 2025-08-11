import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import HomePage from './pages/HomePage'
import SimulationPage from './pages/SimulationPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import ArticlePage from './pages/ArticlePage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Evolivie - Mutuelle santé en ligne pour particuliers et TNS</title>
        <meta name="description" content="Souscrivez votre mutuelle santé en ligne en 5 minutes. Devis gratuit, tarifs transparents, garanties adaptées aux particuliers et TNS. Evolivie, votre partenaire santé." />
        <meta name="theme-color" content="#3AB795" />
      </Helmet>
      
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/simulation" element={<SimulationPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App