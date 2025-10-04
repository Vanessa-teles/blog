import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Heart, Search, Clock, User, BookOpen, TrendingUp, Apple, Activity } from 'lucide-react'
import heroImage from './assets/hero-woman.jpg'

function Saude() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      alert(`Buscando artigos de saúde: "${searchQuery}"`)
    }
  }

  const healthArticles = [
    {
      title: "Alimentação Anti-inflamatória: Guia Completo",
      excerpt: "Descubra como uma dieta anti-inflamatória pode reduzir dores crônicas, melhorar a digestão e aumentar sua energia. Inclui lista de alimentos e receitas práticas.",
      author: "Dr. Carlos Silva",
      readTime: "15 min",
      date: "15 Mar 2024",
      category: "Nutrição",
      image: heroImage
    },
    {
      title: "Como Fortalecer o Sistema Imunológico Naturalmente",
      excerpt: "Aprenda estratégias baseadas em ciência para fortalecer suas defesas naturais através de alimentação, suplementação e hábitos de vida saudáveis.",
      author: "Dra. Ana Paula",
      readTime: "12 min",
      date: "10 Mar 2024",
      category: "Imunidade",
      image: heroImage
    },
    {
      title: "Saúde Mental: Estratégias para o Dia a Dia",
      excerpt: "Técnicas práticas de mindfulness, gestão de estresse e autocuidado que você pode implementar hoje mesmo para melhorar sua saúde mental.",
      author: "Psic. Marina Costa",
      readTime: "18 min",
      date: "5 Mar 2024",
      category: "Saúde Mental",
      image: heroImage
    },
    {
      title: "Prevenção de Doenças Cardiovasculares",
      excerpt: "Entenda os principais fatores de risco e como prevenir doenças do coração através de mudanças simples no estilo de vida e alimentação.",
      author: "Dr. Roberto Alves",
      readTime: "20 min",
      date: "1 Mar 2024",
      category: "Cardiologia",
      image: heroImage
    },
    {
      title: "Sono de Qualidade: A Base da Saúde",
      excerpt: "Descubra a importância do sono para recuperação, memória e saúde geral. Inclui protocolo completo para melhorar a qualidade do seu sono.",
      author: "Dra. Juliana Mendes",
      readTime: "14 min",
      date: "25 Fev 2024",
      category: "Sono",
      image: heroImage
    },
    {
      title: "Hidratação: Muito Além da Água",
      excerpt: "Entenda a ciência da hidratação, quanto você realmente precisa beber e como diferentes bebidas afetam seu corpo de formas distintas.",
      author: "Nutri. Pedro Santos",
      readTime: "10 min",
      date: "20 Fev 2024",
      category: "Nutrição",
      image: heroImage
    }
  ]

  const healthCategories = [
    { name: "Nutrição", icon: Apple, count: 45 },
    { name: "Imunidade", icon: Activity, count: 32 },
    { name: "Saúde Mental", icon: Heart, count: 28 },
    { name: "Prevenção", icon: TrendingUp, count: 38 }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-50 to-pink-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Saúde em Primeiro Lugar
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Informações confiáveis e baseadas em ciência para você cuidar da sua saúde de forma integral. Descubra artigos sobre nutrição, prevenção, saúde mental e muito mais.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar artigos de saúde..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-32 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
              <Button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full"
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
            {healthCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-red-100 hover:border-red-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-red-600" />
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
              <p className="text-gray-600">Conteúdo atualizado e revisado por especialistas</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthArticles.map((article, index) => (
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
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight hover:text-red-600 transition-colors">
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
                  <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Ler Artigo
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              Carregar Mais Artigos
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-red-200" />
          <h2 className="text-3xl font-bold mb-4">
            Receba Dicas de Saúde Semanalmente
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Cadastre-se e receba conteúdos exclusivos sobre saúde, nutrição e prevenção diretamente no seu email
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Seu melhor email"
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <Button type="submit" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold">
              Inscrever-se Grátis
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Saude
