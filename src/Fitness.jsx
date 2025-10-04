import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Dumbbell, Search, Clock, User, BookOpen, Zap, Target, Trophy } from 'lucide-react'
import fitnessImage from './assets/fitness-woman.jpg'

function Fitness() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      alert(`Buscando artigos de fitness: "${searchQuery}"`)
    }
  }

  const fitnessArticles = [
    {
      title: "10 Hábitos Fitness que Vão Transformar Sua Saúde",
      excerpt: "Descubra os hábitos essenciais que atletas de alto rendimento utilizam para manter performance consistente e resultados duradouros.",
      author: "Prof. Marcos Oliveira",
      readTime: "20 min",
      date: "18 Mar 2024",
      category: "Treino",
      image: fitnessImage
    },
    {
      title: "Treino HIIT: Máximos Resultados em Menos Tempo",
      excerpt: "Aprenda a estruturar treinos de alta intensidade que queimam gordura, aumentam resistência e cabem na sua rotina corrida.",
      author: "Dra. Fernanda Lima",
      readTime: "15 min",
      date: "12 Mar 2024",
      category: "Cardio",
      image: fitnessImage
    },
    {
      title: "Musculação para Iniciantes: Guia Completo",
      excerpt: "Tudo o que você precisa saber para começar na musculação com segurança: técnicas, exercícios fundamentais e progressão de carga.",
      author: "Prof. Ricardo Santos",
      readTime: "25 min",
      date: "8 Mar 2024",
      category: "Musculação",
      image: fitnessImage
    },
    {
      title: "Nutrição Esportiva: O Que Comer Antes e Depois do Treino",
      excerpt: "Maximize seus resultados com estratégias nutricionais baseadas em ciência para otimizar performance e recuperação muscular.",
      author: "Nutri. Camila Rodrigues",
      readTime: "18 min",
      date: "3 Mar 2024",
      category: "Nutrição",
      image: fitnessImage
    },
    {
      title: "Recuperação Muscular: A Chave para o Progresso",
      excerpt: "Entenda a importância do descanso, técnicas de recuperação ativa e como evitar overtraining para ganhos consistentes.",
      author: "Fisio. André Martins",
      readTime: "16 min",
      date: "28 Fev 2024",
      category: "Recuperação",
      image: fitnessImage
    },
    {
      title: "Corrida: Do Iniciante à Primeira Maratona",
      excerpt: "Plano progressivo de treinamento, técnicas de respiração e dicas para evitar lesões na sua jornada como corredor.",
      author: "Prof. Juliana Costa",
      readTime: "22 min",
      date: "22 Fev 2024",
      category: "Corrida",
      image: fitnessImage
    }
  ]

  const fitnessCategories = [
    { name: "Treino", icon: Dumbbell, count: 52 },
    { name: "Cardio", icon: Zap, count: 38 },
    { name: "Musculação", icon: Target, count: 45 },
    { name: "Performance", icon: Trophy, count: 31 }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-amber-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <Dumbbell className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Fitness e Performance
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Treinos eficientes, técnicas comprovadas e estratégias de nutrição esportiva para você alcançar seus objetivos fitness. Do iniciante ao atleta avançado.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar artigos de fitness..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-32 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
              <Button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white rounded-full"
              >
                Buscar
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore por Categoria</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fitnessCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-orange-100 hover:border-orange-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} artigos</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Artigos Recentes</h2>
              <p className="text-gray-600">Conteúdo criado por profissionais de educação física e nutrição esportiva</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fitnessArticles.map((article, index) => (
              <article 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight hover:text-orange-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Ler Artigo
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              Carregar Mais Artigos
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Dumbbell className="w-16 h-16 mx-auto mb-6 text-orange-200" />
          <h2 className="text-3xl font-bold mb-4">
            Transforme Seu Corpo e Mente
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Receba planos de treino, dicas de nutrição esportiva e motivação direto no seu email
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Seu melhor email"
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <Button type="submit" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold">
              Começar Agora
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Fitness
