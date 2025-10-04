import { Button } from '@/components/ui/button.jsx'
import { Heart, Target, Users, Award, BookOpen, TrendingUp, Mail } from 'lucide-react'
import heroImage from './assets/hero-woman.jpg'
import fitnessImage from './assets/fitness-woman.jpg'
import wellnessImage from './assets/wellness-woman.jpg'

function Sobre() {
  const values = [
    {
      icon: Heart,
      title: "Saúde em Primeiro Lugar",
      description: "Acreditamos que a saúde é o bem mais precioso e deve ser acessível a todos através de informação de qualidade."
    },
    {
      icon: BookOpen,
      title: "Educação Baseada em Ciência",
      description: "Todo nosso conteúdo é revisado por especialistas e baseado em pesquisas científicas atualizadas."
    },
    {
      icon: Users,
      title: "Comunidade Engajada",
      description: "Construímos uma comunidade de pessoas comprometidas com transformação e apoio mútuo."
    },
    {
      icon: Target,
      title: "Resultados Sustentáveis",
      description: "Focamos em mudanças graduais e sustentáveis, não em soluções milagrosas de curto prazo."
    }
  ]

  const stats = [
    { number: "500+", label: "Artigos Publicados" },
    { number: "50k+", label: "Leitores Mensais" },
    { number: "4.9", label: "Avaliação Média" },
    { number: "100+", label: "Especialistas" }
  ]

  const team = [
    {
      name: "Dra. Ana Paula Silva",
      role: "Editora-Chefe e Nutricionista",
      image: heroImage,
      description: "Especialista em nutrição funcional com mais de 15 anos de experiência."
    },
    {
      name: "Prof. Marcos Oliveira",
      role: "Editor de Fitness",
      image: fitnessImage,
      description: "Educador físico e personal trainer certificado, atleta de alto rendimento."
    },
    {
      name: "Psic. Laura Mendes",
      role: "Editora de Bem-estar",
      image: wellnessImage,
      description: "Psicóloga clínica especializada em mindfulness e terapia cognitivo-comportamental."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-50 to-teal-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Sobre o <span className="text-emerald-600">VitaWell</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Somos uma plataforma dedicada a democratizar o acesso a informações de qualidade sobre saúde, fitness e bem-estar. Nossa missão é inspirar e capacitar pessoas a viverem vidas mais saudáveis e felizes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Fundado em 2020, o VitaWell nasceu da necessidade de criar um espaço onde informação confiável sobre saúde e bem-estar fosse acessível a todos. Cansados de ver desinformação e promessas vazias, reunimos uma equipe de especialistas comprometidos com a verdade científica.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Acreditamos que cada pessoa merece ter acesso a conhecimento que pode transformar sua vida. Por isso, trabalhamos incansavelmente para produzir conteúdo de alta qualidade, revisado por profissionais e baseado nas mais recentes pesquisas científicas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nosso compromisso é com você: fornecer ferramentas, conhecimento e inspiração para que você possa tomar decisões informadas sobre sua saúde e bem-estar.
              </p>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Equipe VitaWell"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam cada artigo, cada decisão e cada interação com nossa comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nosso Impacto</h2>
            <p className="text-xl text-emerald-100">
              Números que refletem nosso compromisso com excelência e comunidade
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-emerald-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe Editorial</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profissionais qualificados e apaixonados por compartilhar conhecimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
          <h2 className="text-3xl font-bold mb-4">
            Junte-se à Nossa Comunidade
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Receba conteúdo exclusivo, dicas práticas e seja parte de uma comunidade comprometida com transformação
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Seu melhor email"
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <Button type="submit" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold">
              Inscrever-se Grátis
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Sobre
