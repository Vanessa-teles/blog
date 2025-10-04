import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Sparkles, Search, Clock, User, BookOpen, Sun, Moon, Flower2 } from 'lucide-react'
import wellnessImage from './assets/wellness-woman.jpg'

function BemEstar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      alert(`Buscando artigos de bem-estar: "${searchQuery}"`)
    }
  }

  const wellnessArticles = [
    {
      title: "Mindfulness: Estratégias Cientificamente Comprovadas",
      excerpt: "Aprenda técnicas de atenção plena que reduzem ansiedade, melhoram foco e aumentam a qualidade de vida. Inclui exercícios práticos para iniciantes.",
      author: "Psic. Laura Mendes",
      readTime: "15 min",
      date: "20 Mar 2024",
      category: "Mindfulness",
      image: wellnessImage
    },
    {
      title: "Equilíbrio Emocional: Gestão de Emoções no Dia a Dia",
      excerpt: "Descubra ferramentas práticas para lidar com emoções difíceis, desenvolver resiliência e cultivar paz interior mesmo em tempos desafiadores.",
      author: "Terapeuta João Silva",
      readTime: "18 min",
      date: "15 Mar 2024",
      category: "Emoções",
      image: wellnessImage
    },
    {
      title: "Rotina Matinal que Transforma Seu Dia",
      excerpt: "Crie uma rotina matinal poderosa que aumenta produtividade, energia e bem-estar. Baseado em hábitos de pessoas de alto desempenho.",
      author: "Coach Mariana Costa",
      readTime: "12 min",
      date: "10 Mar 2024",
      category: "Hábitos",
      image: wellnessImage
    },
    {
      title: "Meditação para Iniciantes: Guia Prático",
      excerpt: "Comece sua jornada de meditação com técnicas simples e eficazes. Aprenda diferentes estilos e encontre o que funciona melhor para você.",
      author: "Instrutor Paulo Ribeiro",
      readTime: "16 min",
      date: "5 Mar 2024",
      category: "Meditação",
      image: wellnessImage
    },
    {
      title: "Autocuidado: Muito Além do Básico",
      excerpt: "Entenda o verdadeiro significado de autocuidado e como criar práticas sustentáveis que nutrem corpo, mente e espírito.",
      author: "Dra. Beatriz Alves",
      readTime: "14 min",
      date: "1 Mar 2024",
      category: "Autocuidado",
      image: wellnessImage
    },
    {
      title: "Conexão Social e Bem-estar: A Ciência dos Relacionamentos",
      excerpt: "Descubra como relacionamentos saudáveis impactam longevidade e felicidade. Estratégias para cultivar conexões significativas.",
      author: "Psic. Rafael Santos",
      readTime: "20 min",
      date: "25 Fev 2024",
      category: "Relacionamentos",
      image: wellnessImage
    }
  ]

  const wellnessCategories = [
    { name: "Mindfulness", icon: Sparkles, count: 42 },
    { name: "Meditação", icon: Moon, count: 35 },
    { name: "Autocuidado", icon: Flower2, count: 48 },
    { name: "Equilíbrio", icon: Sun, count: 39 }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-50 to-indigo-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Bem-estar e Equilíbrio
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Cultive uma vida mais plena através de práticas de mindfulness, autocuidado e equilíbrio emocional. Descubra técnicas que transformam sua relação consigo mesmo.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar artigos de bem-estar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-32 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
              <Button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white rounded-full"
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
            {wellnessCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-purple-100 hover:border-purple-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
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
              <p className="text-gray-600">Conteúdo criado por psicólogos, terapeutas e especialistas em bem-estar</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wellnessArticles.map((article, index) => (
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
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight hover:text-purple-600 transition-colors">
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
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Ler Artigo
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              Carregar Mais Artigos
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-purple-200" />
          <h2 className="text-3xl font-bold mb-4">
            Cultive Paz Interior e Equilíbrio
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Receba práticas de mindfulness, meditações guiadas e dicas de autocuidado no seu email
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Seu melhor email"
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <Button type="submit" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold">
              Começar Jornada
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}

export default BemEstar
