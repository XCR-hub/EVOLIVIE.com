import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const SimulationPage = () => {
  const [formData, setFormData] = useState({
    age: '',
    statut: '',
    region: '',
    budget: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici vous pourriez intégrer l'API Neoliane
    alert('Simulation en cours... (intégration API à venir)')
  }

  return (
    <>
      <Helmet>
        <title>Simulation mutuelle santé - Devis gratuit en ligne | Evolivie</title>
        <meta name="description" content="Obtenez votre devis mutuelle santé personnalisé en 2 minutes. Simulation gratuite, tarifs transparents pour particuliers et TNS." />
      </Helmet>

      <section className="section" style={{ backgroundColor: '#f8f9fa', minHeight: '80vh' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Simulation mutuelle santé
            </h1>
            <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666' }}>
              Obtenez votre devis personnalisé en quelques clics
            </p>

            <form onSubmit={handleSubmit} style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Votre âge
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Ex: 35"
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

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Votre statut
                </label>
                <select
                  name="statut"
                  value={formData.statut}
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
                  <option value="">Sélectionnez votre statut</option>
                  <option value="salarie">Salarié</option>
                  <option value="tns">TNS / Indépendant</option>
                  <option value="freelance">Freelance</option>
                  <option value="retraite">Retraité</option>
                  <option value="etudiant">Étudiant</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Votre région
                </label>
                <select
                  name="region"
                  value={formData.region}
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
                  <option value="">Sélectionnez votre région</option>
                  <option value="ile-de-france">Île-de-France</option>
                  <option value="auvergne-rhone-alpes">Auvergne-Rhône-Alpes</option>
                  <option value="nouvelle-aquitaine">Nouvelle-Aquitaine</option>
                  <option value="occitanie">Occitanie</option>
                  <option value="hauts-de-france">Hauts-de-France</option>
                  <option value="grand-est">Grand Est</option>
                  <option value="provence-alpes-cote-azur">Provence-Alpes-Côte d'Azur</option>
                  <option value="pays-de-la-loire">Pays de la Loire</option>
                  <option value="bretagne">Bretagne</option>
                  <option value="normandie">Normandie</option>
                  <option value="bourgogne-franche-comte">Bourgogne-Franche-Comté</option>
                  <option value="centre-val-de-loire">Centre-Val de Loire</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Budget mensuel souhaité
                </label>
                <select
                  name="budget"
                  value={formData.budget}
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
                  <option value="">Sélectionnez votre budget</option>
                  <option value="0-30">Moins de 30€/mois</option>
                  <option value="30-50">30€ - 50€/mois</option>
                  <option value="50-80">50€ - 80€/mois</option>
                  <option value="80-120">80€ - 120€/mois</option>
                  <option value="120+">Plus de 120€/mois</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  fontSize: '1.1rem',
                  padding: '15px'
                }}
              >
                Obtenir mon devis gratuit
              </button>

              <p style={{ 
                textAlign: 'center', 
                marginTop: '1rem', 
                fontSize: '0.9rem', 
                color: '#666' 
              }}>
                🔒 Vos données sont sécurisées et ne seront jamais partagées
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SimulationPage