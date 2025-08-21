"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones } from "lucide-react"
import { Card } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import AnimatedPage from "@/components/animated-page"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: " contato@liptech.com.br",
    description: "Resposta em até 2 horas úteis",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "(21) 99258-3999",
    description: "Atendimento de segunda a sexta",
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Rio de Janeiro, RJ",
    description: "Atendimento presencial com agendamento",
  },
  {
    icon: Clock,
    title: "Horário",
    value: "08:00 às 18:00",
    description: "Segunda a sexta-feira",
  },
]

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Suporte técnico",
    description: "Resolva seus problemas e dúvidas técnicas com nossa equipe especializada, disponível 24/7 para ajudá-lo de forma rápida e eficaz.",
    availability: "24/7",
  },
  {
    icon: Headphones,
    title: "Consultoria",
    description: "Com nossa orientação estratégica e expertise, você terá o suporte necessário para implementar inovações que impulsionam seu negócio. Nossa equipe está à disposição no horário comercial para ajudá-lo a alcançar seus objetivos. Entre em contato e comece agora!",
    availability: "Horário comercial",
  },
]

export default function ContactSupportPage() {
  return (
    <AnimatedPage>
      
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#004D61]/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#004D61]/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
               Suporte
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para ajudar você. Entre em contato conosco e descubra como podemos ajuda-lo.
            </p>
          </motion.div>
        </div>
      </section>

      
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <ContactForm />
            </div>

           
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-white">Informações de Contato</h2>
                <p className="text-gray-400 leading-relaxed">
                  Nossa equipe está sempre disponível para atender suas necessidades. Escolha a forma de contato que
                  mais se adequa à sua situação.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                      <div className="p-6 space-y-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#004D61] to-[#004D61]/70 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-white font-semibold text-lg">{info.title}</h3>
                          <p className="text-[#004D61] font-medium">{info.value}</p>
                          <p className="text-gray-400 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">Opções de suporte</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Oferecemos diferentes tipos de suporte para atender suas necessidades específicas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                  <div className="p-8 space-y-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#004D61] to-[#004D61]/70 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <option.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-white font-bold text-xl">{option.title}</h3>
                      <p className="text-gray-400 text-start leading-relaxed">{option.description}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-[#004D61]/20 border border-[#004D61]/30 rounded-full">
                        <span className="text-[#004D61] text-sm font-medium">{option.availability}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
           
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  )
}
