"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react"
import { Card } from "@/components/ui/card"
import AnimatedPage from "@/components/animated-page"

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Buscamos constantemente novas tecnologias e soluções criativas para superar desafios complexos.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalhamos em parceria com nossos clientes, construindo relacionamentos duradouros e de confiança.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Comprometemo-nos com a qualidade superior em cada projeto, superando expectativas consistentemente.",
  },
  {
    icon: Heart,
    title: "Integridade",
    description: "Mantemos os mais altos padrões éticos em todas as nossas interações e decisões empresariais.",
  },
]

export default function AboutPage() {
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
              Sobre a{" "}
              <span className="bg-gradient-to-r from-[#004D61] to-[#004D61]/70 bg-clip-text text-transparent">
                LIPTECH
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pioneiros em transformação digital, construindo o futuro da tecnologia empresarial há mais de uma década.
            </p>
          </motion.div>
        </div>
      </section>


      <section className="py-24 relative flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 text-center"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Nossa história</h2>
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  A LIPTECH é uma empresa dedicada a transformar tecnologia em valor para os negócios.
                  Atuamos como parceira estratégica de organizações que buscam modernizar sua
                  infraestrutura, aumentar sua eficiência operacional e garantir segurança em um cenário
                  cada vez mais desafiador.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  Nosso portfólio abrange soluções em infraestrutura de TI, automação, segurança digital
                  e integração de sistemas, sempre com foco em confiabilidade e resultados mensuráveis.
                  Mais do que implementar tecnologia, buscamos alinhar cada projeto às necessidades reais
                  de nossos clientes, garantindo que cada investimento se traduza em vantagem competitiva.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  Acreditamos que a solidez técnica deve caminhar junto com a visão de futuro. Por isso
                  mantemos uma equipe altamente capacitada, e em constante atualização, capaz de antecipar
                  tendências e aplicar as melhores práticas de mercado.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  Na LIPTECH, excelência, consistência e compromisso são valores inegociáveis. Nossa missão é
                  apoiar empresas de diferentes portes e segmentos a evoluir de forma segura e sustentável,
                  transformando desafios tecnológicos em oportunidades de crescimento.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#004D61] to-[#004D61]/70 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Nossa missão</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Capacitar empresas através de soluções tecnológicas inovadoras, proporcionando transformação
                      digital eficiente e sustentável que gere valor real para nossos clientes e suas comunidades.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#004D61] to-[#004D61]/70 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Nossa visão</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Ser reconhecida como a principal referência em soluções tecnológicas no Brasil, liderando a
                      revolução digital e inspirando outras empresas a abraçar o futuro da tecnologia.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
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
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#004D61] to-[#004D61]/70 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Nossa equipe</h3>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed text-justify">
                    Profissionais certificados e experientes,
                    com expertise técnica comprovada em projetos complexos de redes.
                    Nossa equipe é composta por profissionais altamente qualificados,
                    com certificações reconhecidas no mercado, incluindo Cisco (CCNA/CCNP),
                    MikroTik (MTCNA/MTCRE) e Ubiquiti. Somos capazes de planejar, implementar
                    e gerenciar soluções de rede que garantem desempenho, segurança e confiabilidade.
                    Oferecemos suporte técnico especializado, acompanhando cada etapa do projeto,
                    desde a análise de necessidades até a execução e manutenção. Nossas soluções
                    são personalizadas para atender às demandas específicas do seu negócio,
                    assegurando eficiência operacional e redução de riscos.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  )
}
