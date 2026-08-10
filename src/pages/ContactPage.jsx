import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('sending')
    setSubmitError('')

    try {
      const body = new URLSearchParams({ 'form-name': 'contact', ...formData })
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      })

      if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`)

      setSubmitStatus('success')
      setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' })
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire', error)
      setSubmitStatus('error')
      setSubmitError('Le message n\'a pas pu être envoyé. Vous pouvez nous écrire à team@evolivie.com.')
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact - Evolivie mutuelle santé</title>
        <meta name="description" content="Contactez nos experts en mutuelle santé. Conseil personnalisé, devis gratuit. Réponse rapide garantie." />
      </Helmet>

      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h1 style={{ marginBottom: '1rem' }}>
                Contactez-nous
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#666' }}>
                Une question ? Besoin d'un conseil ? Notre équipe est là pour vous accompagner.
              </p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              <div style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: '2rem', 
                  marginBottom: '1rem' 
                }}>
                  📞
                </div>
                <h3>Téléphone</h3>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                  Du lundi au vendredi
                </p>
                <p style={{ color: '#666', marginBottom: '1rem' }}>
                  9h - 18h
                </p>
                <a href="tel:0123456789" style={{ 
                  color: '#3AB795', 
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>
                  01 23 45 67 89
                </a>
              </div>

              <div style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: '2rem', 
                  marginBottom: '1rem' 
                }}>
                  ✉️
                </div>
                <h3>Email</h3>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                  Réponse sous 24h
                </p>
                <p style={{ color: '#666', marginBottom: '1rem' }}>
                  7j/7
                </p>
                <a href="mailto:team@evolivie.com" style={{
                  color: '#3AB795', 
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>
                  team@evolivie.com
                </a>
              </div>

              <div style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: '2rem', 
                  marginBottom: '1rem' 
                }}>
                  💬
                </div>
                <h3>Chat en ligne</h3>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                  Assistance immédiate
                </p>
                <p style={{ color: '#666', marginBottom: '1rem' }}>
                  9h - 18h
                </p>
                <button className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                  Démarrer le chat
                </button>
              </div>
            </div>

            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} style={{
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>Ne pas remplir : <input name="bot-field" /></label>
              </p>
              <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                Envoyez-nous un message
              </h2>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Sujet *
                  </label>
                  <select
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                    required
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="souscription">Aide à la souscription</option>
                    <option value="sinistre">Déclaration de sinistre</option>
                    <option value="resiliation">Résiliation</option>
                    <option value="autre">Autre question</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre demande..."
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'sending'}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  fontSize: '1.1rem',
                  padding: '15px'
                }}
              >
                {submitStatus === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
              </button>

              {submitStatus === 'success' && (
                <p role="status" style={{ textAlign: 'center', marginTop: '1rem', color: '#18794e', fontWeight: '600' }}>
                  Message envoyé ! Notre équipe vous répondra dans les plus brefs délais.
                </p>
              )}
              {submitStatus === 'error' && (
                <p role="alert" style={{ textAlign: 'center', marginTop: '1rem', color: '#b42318', fontWeight: '600' }}>
                  {submitError}
                </p>
              )}

              <p style={{ 
                textAlign: 'center', 
                marginTop: '1rem', 
                fontSize: '0.9rem', 
                color: '#666' 
              }}>
                * Champs obligatoires
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
