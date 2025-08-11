import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const BlogPage = () => {
  const articles = [
    {
      slug: 'mutuelle-sante-independants-garanties',
      title: 'Mutuelle santé pour indépendants : quelles garanties choisir ?',
      excerpt: 'Guide complet pour choisir la meilleure mutuelle santé adaptée aux travailleurs indépendants et TNS.',
      date: '15 janvier 2024',
      readTime: '5 min'
    },
    {
      slug: 'souscrire-mutuelle-en-ligne-5-minutes',
      title: 'Comment souscrire une mutuelle en ligne en 5 minutes ?',
      excerpt: 'Découvrez notre processus simplifié pour souscrire votre mutuelle santé rapidement et en toute sécurité.',
      date: '12 janvier 2024',
      readTime: '3 min'
    },
    {
      slug: 'comparatif-mutuelles-sans-delai-carence',
      title: 'Comparatif des mutuelles sans délai de carence',
      excerpt: 'Trouvez la mutuelle qui vous couvre immédiatement, sans période d\'attente.',
      date: '10 janvier 2024',
      readTime: '7 min'
    },
    {
      slug: 'mutuelle-tns-bien-choisir-2025',
      title: 'Mutuelle TNS : bien choisir en 2025',
      excerpt: 'Tout ce qu\'il faut savoir pour choisir sa mutuelle en tant que travailleur non salarié.',
      date: '8 janvier 2024',
      readTime: '6 min'
    },
    {
      slug: 'deduire-mutuelle-impots',
      title: 'Comment déduire sa mutuelle de ses impôts ?',
      excerpt: 'Guide fiscal pour optimiser la déduction de votre mutuelle santé.',
      date: '5 janvier 2024',
      readTime: '4 min'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Blog mutuelle santé - Conseils et guides | Evolivie</title>
        <meta name="description" content="Découvrez nos conseils d'experts sur les mutuelles santé : guides, comparatifs, astuces pour bien choisir votre complémentaire santé." />
      </Helmet>

      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ marginBottom: '1rem' }}>
              Blog Evolivie
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Conseils d'experts, guides pratiques et actualités pour bien choisir votre mutuelle santé
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {articles.map((article, index) => (
              <article key={index} style={{ 
                backgroundColor: 'white', 
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ 
                  height: '200px', 
                  background: `linear-gradient(135deg, #3AB795 0%, #2d8a6b 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  📝
                </div>
                
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    color: '#666'
                  }}>
                    <span>{article.date}</span>
                    <span>{article.readTime} de lecture</span>
                  </div>
                  
                  <h3 style={{ 
                    marginBottom: '1rem',
                    fontSize: '1.2rem',
                    lineHeight: '1.4'
                  }}>
                    <Link 
                      to={`/article/${article.slug}`}
                      style={{ 
                        color: '#333',
                        textDecoration: 'none'
                      }}
                    >
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p style={{ 
                    color: '#666', 
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>
                    {article.excerpt}
                  </p>
                  
                  <Link 
                    to={`/article/${article.slug}`}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.9rem' }}
                  >
                    Lire l'article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage