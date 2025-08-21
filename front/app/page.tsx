"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Database, Cloud, Code, Cpu, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import AnimatedPage from "@/components/animated-page"
import Link from "next/link"

const services = [
  {
    icon: Shield,
    title: "Segurança Digital",
    description: "Proteção avançada contra ameaças cibernéticas com monitoramento 24/7 e sistemas de backup.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Migração e gerenciamento de infraestrutura em nuvem para máxima eficiência e escalabilidade.",
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    description: "Criação de sistemas personalizados e aplicações web modernas com tecnologias de ponta.",
  },
  {
    icon: Database,
    title: "Gestão de Dados",
    description: "Organização, análise e proteção de dados empresariais com soluções inteligentes.",
  },
  {
    icon: Cpu,
    title: "Automação",
    description: "Otimização de processos através de automação inteligente e integração de sistemas.",
  },
  {
    icon: Globe,
    title: "Consultoria TI",
    description: "Estratégias tecnológicas personalizadas para transformação digital do seu negócio.",
  },
]

export default function HomePage() {
  return (
    <AnimatedPage>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#004D61]/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#004D61]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#004D61]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
           
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Transforme o seu
                <span className="block bg-gradient-to-r from-[#004D61] to-[#004D61]/70 bg-clip-text text-transparent">
                  futuro digital
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                Soluções tecnológicas inovadoras que impulsionam seu negócio para o próximo nível. Especialistas em TI
                com foco em resultados e excelência.
              </motion.p>
            </div>

           
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contato-suporte">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-[#004D61] to-[#004D61]/80 hover:from-[#004D61]/90 hover:to-[#004D61] text-white border-0 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#004D61]/25"
                >
                  Começar Agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>

              <Link href="/sobre">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 hover:border-[#004D61]/50 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Saiba Mais
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[#0A0A0A]/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">Nossos serviços</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Oferecemos soluções completas em tecnologia da informação para empresas de todos os portes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16 pt-16 border-t border-white/10"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Pronto para revolucionar sua TI?</h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos transformar seus desafios tecnológicos em oportunidades
                de crescimento.
              </p>
              <Link href="/contato-suporte">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#004D61] to-[#004D61]/80 hover:from-[#004D61]/90 hover:to-[#004D61] text-white border-0 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Fale conosco
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  )
}
