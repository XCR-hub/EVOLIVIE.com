import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header style={{ 
      backgroundColor: 'white', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '1rem'
      }}>
        <Link to="/" style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#3AB795',
          fontFamily: 'Poppins'
        }}>
          Evolivie
        </Link>
        
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#333', fontWeight: '500' }}>
            Accueil
          </Link>
          <Link to="/simulation" style={{ color: '#333', fontWeight: '500' }}>
            Simulation
          </Link>
          <Link to="/blog" style={{ color: '#333', fontWeight: '500' }}>
            Blog
          </Link>
          <Link to="/contact" style={{ color: '#333', fontWeight: '500' }}>
            Contact
          </Link>
          <Link to="/simulation" className="btn btn-primary">
            Devis gratuit
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header