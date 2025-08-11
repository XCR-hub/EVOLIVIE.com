import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Evolivie - Mutuelle santé en ligne pour particuliers et TNS</title>
        <meta name="description" content="Souscrivez votre mutuelle santé en ligne en 5 minutes. Devis gratuit, tarifs transparents, garanties adaptées aux particuliers et TNS." />
      </Helmet>

      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <h1 style={{ marginBottom: '1.5rem' }}>
            Votre mutuelle santé en ligne
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Souscrivez en 5 minutes • Devis gratuit • Tarifs transparents
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/simulation" className="btn btn-primary" style={{ 
              backgroundColor: 'white', 
              color: '#3AB795',
              fontSize: '1.1rem',
              padding: '15px 30px'
            }}>
              Obtenir mon devis gratuit
            </Link>
            <Link to="/blog" className="btn btn-secondary" style={{ 
              borderColor: 'white', 
              color: 'white',
              fontSize: '1.1rem',
              padding: '15px 30px'
            }}>
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-features">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Pourquoi choisir Evolivie ?
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#3AB795', 
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                💰
              </div>
              <h3>Tarifs transparents</h3>
              <p>Pas de frais cachés, des prix clairs et compétitifs pour tous nos contrats.</p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#3AB795', 
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                🛡️
              </div>
              <h3>Garanties adaptées</h3>
              <p>Des formules sur-mesure pour particuliers et TNS, selon vos besoins réels.</p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#3AB795', 
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                ⚡
              </div>
              <h3>Souscription rapide</h3>
              <p>5 minutes suffisent pour obtenir votre devis et souscrire en ligne.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>
            Prêt à protéger votre santé ?
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
            Obtenez votre devis personnalisé en quelques clics
          </p>
          <Link to="/simulation" className="btn btn-primary" style={{ 
            fontSize: '1.1rem',
            padding: '15px 30px'
          }}>
            Commencer ma simulation
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Ils nous font confiance
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '2rem', 
              borderRadius: '12px',
              borderLeft: '4px solid #3AB795'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                "Souscription ultra-rapide et service client au top. Je recommande !"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#3AB795', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  M
                </div>
                <div>
                  <strong>Marie L.</strong>
                  <div style={{ fontSize: '0.9rem', color: '#666' }}>Freelance</div>
                </div>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '2rem', 
              borderRadius: '12px',
              borderLeft: '4px solid #3AB795'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                "Enfin une mutuelle claire et sans surprise. Parfait pour mon activité de consultant."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#3AB795', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  P
                </div>
                <div>
                  <strong>Pierre D.</strong>
                  <div style={{ fontSize: '0.9rem', color: '#666' }}>Consultant TNS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage