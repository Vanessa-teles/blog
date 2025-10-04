import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, Clock, HelpCircle } from 'lucide-react'

function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@vitawell.com.br",
      description: "Respondemos em até 24 horas"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 9999-9999",
      description: "Seg a Sex, 9h às 18h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP - Brasil",
      description: "Atendimento online"
    }
  ]

  const faqItems = [
    {
      question: "Como posso contribuir com artigos?",
      answer: "Adoramos receber contribuições! Entre em contato através do formulário explicando sua área de expertise e envie uma amostra do seu trabalho."
    },
    {
      question: "Vocês oferecem consultoria individual?",
      answer: "Não oferecemos consultoria direta, mas podemos indicar profissionais qualificados da nossa rede de especialistas."
    },
    {
      question: "Como faço para anunciar no VitaWell?",
      answer: "Para oportunidades de parceria e publicidade, envie um email para parcerias@vitawell.com.br com sua proposta."
    },
    {
      question: "Posso republicar conteúdo do VitaWell?",
      answer: "Todo nosso conteúdo é protegido por direitos autorais. Para republicação, entre em contato solicitando autorização."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-50 to-teal-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <MessageSquare className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tem dúvidas, sugestões ou quer fazer parte da nossa equipe? Estamos aqui para ouvir você. Preencha o formulário abaixo e retornaremos em breve.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-emerald-100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-emerald-600 font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 mx-auto text-emerald-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mensagem Enviada com Sucesso!
                </h3>
                <p className="text-gray-600 text-lg">
                  Obrigado por entrar em contato. Retornaremos em breve.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Envie sua Mensagem</h2>
                  <p className="text-gray-600">
                    Preencha o formulário abaixo e entraremos em contato o mais breve possível
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="duvida">Dúvida Geral</option>
                      <option value="sugestao">Sugestão de Conteúdo</option>
                      <option value="parceria">Parceria/Publicidade</option>
                      <option value="contribuicao">Quero Contribuir</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      placeholder="Escreva sua mensagem aqui..."
                    ></textarea>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
              <HelpCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600">
              Respostas rápidas para as dúvidas mais comuns
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">Q:</span>
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-7">
                  <span className="text-emerald-600 font-bold">R:</span> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
          <h2 className="text-3xl font-bold mb-4">
            Tempo de Resposta
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Respondemos todas as mensagens em até 24 horas úteis. Para questões urgentes, entre em contato por telefone durante nosso horário de atendimento.
          </p>
        </div>
      </section>
    </>
  )
}

export default Contato
