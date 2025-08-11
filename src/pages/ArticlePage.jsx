import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const ArticlePage = () => {
  const { slug } = useParams()

  // Contenu des articles (en production, ceci viendrait d'une API ou CMS)
  const articles = {
    'mutuelle-sante-independants-garanties': {
      title: 'Mutuelle santé pour indépendants : quelles garanties choisir ?',
      date: '15 janvier 2024',
      readTime: '5 min',
      content: `
        <p>En tant que travailleur indépendant, choisir sa mutuelle santé est crucial pour votre protection et celle de votre famille. Contrairement aux salariés qui bénéficient souvent d'une mutuelle d'entreprise, vous devez sélectionner votre complémentaire santé en toute autonomie.</p>
        
        <h2>Les garanties essentielles pour un indépendant</h2>
        
        <h3>1. Hospitalisation et chirurgie</h3>
        <p>Privilégiez une couverture à 100% des frais d'hospitalisation, incluant le forfait journalier et les dépassements d'honoraires. En cas d'arrêt de travail prolongé, cette garantie est vitale.</p>
        
        <h3>2. Soins courants</h3>
        <p>Optez pour un remboursement optimal des consultations médicales, analyses et médicaments. Un taux de 150% à 200% de la base Sécurité sociale est recommandé.</p>
        
        <h3>3. Optique et dentaire</h3>
        <p>Ces postes représentent souvent des dépenses importantes. Choisissez des forfaits annuels adaptés à vos besoins (300€ à 800€ pour l'optique, 500€ à 1500€ pour le dentaire).</p>
        
        <h2>Spécificités pour les TNS</h2>
        
        <p>En tant que Travailleur Non Salarié, vous pouvez déduire vos cotisations mutuelle de vos revenus imposables dans certaines conditions. Cette déductibilité fiscale peut représenter une économie substantielle.</p>
        
        <h2>Nos conseils pour bien choisir</h2>
        
        <ul>
          <li>Évaluez vos besoins réels selon votre âge et situation familiale</li>
          <li>Comparez les tarifs mais aussi les services (tiers payant, réseau de soins)</li>
          <li>Vérifiez les délais de carence et exclusions</li>
          <li>Privilégiez la flexibilité pour adapter votre contrat selon l'évolution de votre activité</li>
        </ul>
        
        <p>Chez Evolivie, nous proposons des formules spécialement conçues pour les indépendants, avec des garanties modulables et des tarifs transparents.</p>
      `
    },
    'souscrire-mutuelle-en-ligne-5-minutes': {
      title: 'Comment souscrire une mutuelle en ligne en 5 minutes ?',
      date: '12 janvier 2024',
      readTime: '3 min',
      content: `
        <p>Souscrire une mutuelle santé n'a jamais été aussi simple ! Grâce aux nouvelles technologies, il est désormais possible de s'assurer en quelques clics, depuis chez soi.</p>
        
        <h2>Les étapes de souscription chez Evolivie</h2>
        
        <h3>Étape 1 : Simulation personnalisée (1 minute)</h3>
        <p>Renseignez vos informations de base : âge, statut professionnel, région et budget souhaité. Notre algorithme vous propose immédiatement les formules les plus adaptées.</p>
        
        <h3>Étape 2 : Choix de votre formule (2 minutes)</h3>
        <p>Comparez les garanties, tarifs et services inclus. Chaque formule est détaillée avec des exemples concrets de remboursements.</p>
        
        <h3>Étape 3 : Finalisation du contrat (2 minutes)</h3>
        <p>Complétez vos informations personnelles, téléchargez vos justificatifs et signez électroniquement votre contrat.</p>
        
        <h2>Les avantages de la souscription en ligne</h2>
        
        <ul>
          <li><strong>Rapidité</strong> : Plus besoin de rendez-vous ou d'attendre un conseiller</li>
          <li><strong>Transparence</strong> : Tous les tarifs et conditions sont affichés clairement</li>
          <li><strong>Disponibilité</strong> : Souscrivez 24h/24, 7j/7</li>
          <li><strong>Sécurité</strong> : Vos données sont cryptées et protégées</li>
        </ul>
        
        <h2>Documents nécessaires</h2>
        
        <p>Préparez ces documents pour accélérer votre souscription :</p>
        <ul>
          <li>Pièce d'identité</li>
          <li>Relevé d'identité bancaire</li>
          <li>Attestation de résiliation de votre ancienne mutuelle (si applicable)</li>
          <li>Dernière feuille de soins pour évaluer vos besoins</li>
        </ul>
        
        <p>Avec Evolivie, votre carte de tiers payant est disponible immédiatement après souscription !</p>
      `
    }
  }

  const article = articles[slug]

  if (!article) {
    return (
      <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1>Article non trouvé</h1>
        <p>L'article que vous recherchez n'existe pas.</p>
        <Link to="/blog" className="btn btn-primary">
          Retour au blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | Blog Evolivie</title>
        <meta name="description" content={article.title} />
      </Helmet>

      <article className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <nav style={{ marginBottom: '2rem' }}>
            <Link to="/blog" style={{ color: '#3AB795', fontSize: '0.9rem' }}>
              ← Retour au blog
            </Link>
          </nav>

          <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h1 style={{ marginBottom: '1rem', fontSize: '2.2rem' }}>
              {article.title}
            </h1>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem',
              color: '#666',
              fontSize: '0.9rem'
            }}>
              <span>📅 {article.date}</span>
              <span>⏱️ {article.readTime} de lecture</span>
            </div>
          </header>

          <div 
            style={{ 
              lineHeight: '1.8',
              fontSize: '1.1rem'
            }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div style={{ 
            marginTop: '3rem', 
            padding: '2rem', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>
              Besoin d'une mutuelle adaptée ?
            </h3>
            <p style={{ marginBottom: '1.5rem', color: '#666' }}>
              Obtenez votre devis personnalisé en 2 minutes
            </p>
            <Link to="/simulation" className="btn btn-primary">
              Faire ma simulation
            </Link>
          </div>

          <nav style={{ 
            marginTop: '3rem', 
            padding: '2rem 0', 
            borderTop: '1px solid #e1e5e9',
            textAlign: 'center'
          }}>
            <Link to="/blog" className="btn btn-secondary">
              Voir tous les articles
            </Link>
          </nav>
        </div>
      </article>
    </>
  )
}

export default ArticlePage