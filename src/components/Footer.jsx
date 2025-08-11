import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#2c3e50', 
      color: 'white', 
      padding: '3rem 0 1rem' 
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ color: '#3AB795', marginBottom: '1rem' }}>Evolivie</h3>
            <p style={{ marginBottom: '1rem' }}>
              Votre mutuelle santé en ligne, simple et transparente.
            </p>
            <p>
              Souscrivez en 5 minutes, garanties adaptées aux particuliers et TNS.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/" style={{ color: '#bdc3c7' }}>Accueil</Link>
              <Link to="/simulation" style={{ color: '#bdc3c7' }}>Simulation</Link>
              <Link to="/blog" style={{ color: '#bdc3c7' }}>Blog</Link>
              <Link to="/contact" style={{ color: '#bdc3c7' }}>Contact</Link>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Légal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/mentions-legales" style={{ color: '#bdc3c7' }}>Mentions légales</Link>
              <Link to="/conditions-generales" style={{ color: '#bdc3c7' }}>CGV</Link>
              <Link to="/politique-confidentialite" style={{ color: '#bdc3c7' }}>Confidentialité</Link>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Contact</h4>
            <p style={{ color: '#bdc3c7', marginBottom: '0.5rem' }}>
              📞 01 23 45 67 89
            </p>
            <p style={{ color: '#bdc3c7', marginBottom: '0.5rem' }}>
              ✉️ contact@evolivie.com
            </p>
            <p style={{ color: '#bdc3c7' }}>
              📍 Paris, France
            </p>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #34495e', 
          paddingTop: '1rem', 
          textAlign: 'center',
          color: '#bdc3c7'
        }}>
          <p>&copy; 2024 Evolivie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer