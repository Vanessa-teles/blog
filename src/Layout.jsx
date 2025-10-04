import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Search, Menu, X, Star, Clock, Users, ChevronUp, Mail, CheckCircle } from 'lucide-react'
import heroImage from './assets/hero-woman.jpg'
import fitnessImage from './assets/fitness-woman.jpg'
import wellnessImage from './assets/wellness-woman.jpg'
import './App.css'

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
      
      // Update active section based on scroll position
      const sections = ['home', 'search', 'articles']
      const scrollPosition = window.scrollY + 100
      
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold text-emerald-600">VitaWell</Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-gray-900 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
                  Início
                </Link>
                <Link to="/saude" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
                  Saúde
                </Link>
                <Link to="/fitness" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
                  Fitness
                </Link>
                <Link to="/bem-estar" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
                  Bem-estar
                </Link>
                <Link to="/sobre" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
                  Sobre
                </Link>
                <Link to="/contato">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Contato
                  </Button>
                </Link>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-900 block px-3 py-2 text-base font-medium hover:bg-emerald-50 rounded-lg transition-colors">Início</Link>
              <Link to="/saude" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium hover:bg-emerald-50 rounded-lg transition-colors">Saúde</Link>
              <Link to="/fitness" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium hover:bg-emerald-50 rounded-lg transition-colors">Fitness</Link>
              <Link to="/bem-estar" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium hover:bg-emerald-50 rounded-lg transition-colors">Bem-estar</Link>
              <Link to="/sobre" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium hover:bg-emerald-50 rounded-lg transition-colors">Sobre</Link>
              <Link to="/contato">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white ml-3 mt-2">
                  Contato
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content - Renderiza o conteúdo da rota atual */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4">VitaWell</h3>
              <p className="text-gray-400 text-sm">
                Seu guia completo para uma vida mais saudável e feliz. Descubra artigos, dicas e recursos para transformar seu bem-estar.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-emerald-400 transition-colors">Início</Link></li>
                <li><Link to="/saude" className="text-gray-400 hover:text-emerald-400 transition-colors">Saúde</Link></li>
                <li><Link to="/fitness" className="text-gray-400 hover:text-emerald-400 transition-colors">Fitness</Link></li>
                <li><Link to="/bem-estar" className="text-gray-400 hover:text-emerald-400 transition-colors">Bem-estar</Link></li>
                <li><Link to="/sobre" className="text-gray-400 hover:text-emerald-400 transition-colors">Sobre</Link></li>
                <li><Link to="/contato" className="text-gray-400 hover:text-emerald-400 transition-colors">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Fique Conectado</h3>
              <p className="text-gray-400 text-sm mb-4">
                Receba as últimas novidades e dicas diretamente na sua caixa de entrada.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Inscrever-se
                </Button>
                {isSubscribed && (
                  <p className="text-emerald-400 text-sm mt-2 flex items-center gap-1">
                    <CheckCircle size={16} /> Inscrito com sucesso!
                  </p>
                )}
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} VitaWell. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-colors duration-300 focus:outline-none"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  )
}

export default Layout

