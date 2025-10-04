import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Search, Star, Clock, Mail, CheckCircle } from 'lucide-react'
import heroImage from './assets/hero-woman.jpg'
import fitnessImage from './assets/fitness-woman.jpg'
import wellnessImage from './assets/wellness-woman.jpg'

function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Simulate search functionality
      alert(`Buscando por: "${searchQuery}"`)
    }
  }

  const popularArticles = [
    {
      title: "Alimentação anti-inflamatória",
      readTime: "15 min",
      category: "Saúde"
    },
    {
      title: "10 hábitos fitness que vão transformar sua saúde",
      readTime: "20 min", 
      category: "Fitness"
    },
    {
      title: "Série de qualidade 7: Estratégias Cientificamente",
      readTime: "15 min",
      category: "Bem-estar"
    }
  ]

  const featuredArticles = [
    {
      title: "Top Design Trends of 2024",
      excerpt: "Optimizing your fitness facility's design, layout, and functionality is the key to keeping up with trends in the new year. Let's dive into the top trends for...",
      image: fitnessImage,
      category: "Fitness"
    },
    {
      title: "9 Big Design Trends for Wellness & Beauty Brands 2024",
      excerpt: "Key 2024 trends include digital-first experiences, minimalist aesthetics, natural elements, emotive photography, and interactive packaging.",
      image: wellnessImage,
      category: "Bem-estar"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-emerald-50 to-teal-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transforme sua vida com{' '}
                  <span className="text-emerald-600">saúde e bem-estar</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Descubra dicas práticas, receitas saudáveis e exercícios que vão revolucionar sua rotina. Junte-se à milhares de pessoas que já transformaram suas vidas.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                  Começar Jornada
                </Button>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg">
                  Saiba Mais
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Artigos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50k+</div>
                  <div className="text-sm text-gray-600">Leitores</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="text-3xl font-bold text-gray-900">4.9</div>
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <div className="text-sm text-gray-600 ml-1">Avaliação</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Mulher sorrindo ao ar livre representando saúde e bem-estar"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Popular Articles Widget */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-sm hidden lg:block">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-emerald-600" />
                  Mais Populares
                </h3>
                <div className="space-y-3">
                  {popularArticles.map((article, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 leading-tight">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{article.readTime}</span>
                          <span className="text-xs text-emerald-600">{article.category}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Encontre o que você procura
            </h2>
            <p className="text-gray-600">
              Pesquise entre centenas de artigos sobre saúde, fitness e bem-estar
            </p>
          </div>
          
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <Button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700"
            >
              Buscar
            </Button>
          </form>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="articles" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Artigos em Destaque
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conteúdos selecionados especialmente para você começar sua jornada de transformação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Ler Artigo
                  </Button>
                </div>
              </article>
            ))}

            {/* Newsletter Card */}
            <div className="newsletter-card">
              <div className="text-center space-y-4">
                {isSubscribed ? (
                  <>
                    <CheckCircle className="w-12 h-12 mx-auto text-emerald-200" />
                    <h3 className="text-xl font-semibold">
                      Obrigado por se inscrever!
                    </h3>
                    <p className="text-emerald-100 text-sm">
                      Você receberá nossas melhores dicas em breve.
                    </p>
                  </>
                ) : (
                  <>
                    <Mail className="w-12 h-12 mx-auto text-emerald-200" />
                    <h3 className="text-xl font-semibold">
                      Junte-se à nossa comunidade
                    </h3>
                    <p className="text-emerald-100 text-sm">
                      Receba dicas exclusivas e conteúdos especiais diretamente no seu email
                    </p>
                    <form onSubmit={handleSubscribe} className="space-y-3">
                      <input
                        type="email"
                        placeholder="Seu melhor email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                      />
                      <Button 
                        type="submit"
                        className="w-full bg-white text-emerald-600 hover:bg-gray-100 transition-all duration-200"
                      >
                        Inscrever-se
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

