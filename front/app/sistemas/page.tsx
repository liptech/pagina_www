"use client"

import { motion } from "framer-motion"
import {
  Shield,
  Database,
  Cloud,
  Code,
  Cpu,
  Globe,
  Server,
  Smartphone,
  BarChart3,
  Lock,
  Zap,
  Settings,
  Users,
  FileText,
  Headphones,
  Wifi,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import AnimatedPage from "@/components/animated-page"
import Link from "next/link"

const sistemas = [
  {
    title: "Configuração de servidores Proxmox",
    description: "Virtualização eficiente e segura para sua infraestrutura",
    details: "Oferecemos consultoria especializada para configuração e otimização de servidores Proxmox VE (Virtual Environment), perfeitos para empresas que desejam alta disponibilidade, backups automáticos e um gerenciamento descomplicado de VMs (máquinas virtuais) e contêineres. Reduza custos com software e licenciamentos, amplie sua flexibilidade operacional e impulsione o desempenho da sua infraestrutura tecnológica com soluções sob medida.",
  },
  {
    title: "Dispositivos: Switches, Roteadores e Wi-Fi",
    description: "Soluções Cisco para redes escaláveis e de alta performance",
    details: "Combinamos o poder das principais marcas para entregar performance, segurança e controle absolutos. Cisco: Alta performance e escalabilidade empresarial, com segurança de ponta e QoS avançado para priorizar o que é crítico em seu negócio. MikroTik: Soluções extremamente custo-eficientes com o poderoso RouterOS, ideal para roteamento avançado e controle detalhado de banda. UniFi (Ubiquiti): Gestão unificada simplificada e Wi-Fi de alta performance, com roaming contínuo para que usuários se movam entre access points sem interrupções.",
  },
  
  {
    title: "Soluções de armazenamento com Nextcloud",
    description: "Armazenamento em nuvem privada, seguro e sob seu controle",
    details: "Implementamos Nextcloud como plataforma de armazenamento corporativo, combinando a flexibilidade da nuvem com a segurança de dados local (on-premises) ou em servidores dedicados. Ideal para empresas que precisam de acesso remoto, colaboração eficiente, segurança avançada, integração com Active Directory/LDAP e backup automatizado. Alternativa corporativa ao Google Drive ou OneDrive, mas com controle total sobre seus dados.",
  },
  {
    title: "Soluções de acesso remoto",
    description: "Gestão centralizada e segura de dispositivos em qualquer lugar",
    details: "Nossa solução de acesso remoto garante controle total sobre servidores, desktops e notebooks em múltiplas plataformas, oferecendo suporte em tempo real com máxima segurança. A administração é feita de forma centralizada, permitindo gerenciar todos os dispositivos em uma única interface com autenticação multifator e comunicação criptografada. Além do acesso remoto, é possível realizar transferência de arquivos de maneira segura, manter registros completos de auditoria, executar scripts e comandos automatizados para agilizar rotinas de manutenção e aplicar correções em larga escala. O monitoramento contínuo permite acompanhar o status dos dispositivos e gerar relatórios de forma prática, tudo acessível diretamente pelo navegador, sem necessidade de softwares adicionais. Com isso, sua empresa ganha mobilidade, eficiência operacional e confiabilidade, mantendo o controle absoluto sobre seus ativos de TI.",
  },
  {
    title: "Active Directory com Web GUI personalizada",
    description: "Gerencie seu AD de forma intuitiva e segura",
    details: "Desenvolvemos interfaces web personalizadas para o gerenciamento simplificado do Active Directory, permitindo que administradores e equipes de TI realizem tarefas do dia a dia de forma ágil e com menor risco de erros. A solução possibilita o gerenciamento de usuários, grupos, permissões e políticas de acesso por meio de uma interface intuitiva, sem a complexidade das ferramentas nativas. Com controle de permissões granular, é possível delegar funções a diferentes níveis de equipe, mantendo a segurança e a conformidade. A plataforma ainda oferece registro de auditoria, integração com autenticação multifator e personalização visual para adequação à identidade da organização. Nosso objetivo é tornar a administração do Active Directory mais acessível, segura e produtiva, reduzindo o tempo gasto em tarefas repetitivas e aumentando a eficiência da operação de TI.",
  },
  {
    title: "Elaboração e implementação de infraestrutura",
    description: "Projetos sob medida para sua rede",
    details: "Desenvolvemos infraestruturas de TI completas, desde cabeamento estruturado até a implantação de servidores, redes lógicas e políticas de segurança. Garantimos escalabilidade, redundância e conformidade com melhores práticas do mercado.",
  },
  {
    title: "Diagnóstico de redes Wi-Fi com Ekahau",
    description: "Análise profissional para Wi-Fi corporativo",
    details: "Realizamos surveys avançados utilizando equipamentos homologados para Wi-Fi Enterprise, identificando interferências, áreas de cobertura insuficiente e congestionamento de canais. A partir dos dados coletados, entregamos relatórios técnicos completos acompanhados de recomendações práticas, garantindo a otimização da infraestrutura sem fio. Nossa abordagem assegura redes preparadas para alta densidade de dispositivos e alinhadas aos padrões mais recentes, incluindo Wi-Fi 6 e Wi-Fi 6E, proporcionando desempenho, estabilidade e segurança para ambientes corporativos exigentes.",
  },
  
]

const diferenciais = [
  "✔ Atendimento ágil e remoto",
  "✔ Documentação completa dos serviços realizados",
  "✔ Parceria com fornecedores para aquisição de equipamentos",
  "✔ Suporte pós-implantação",
]

export default function SystemsPage() {
  return (
    <AnimatedPage>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#004D61]/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#004D61]/10 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Soluções de sistemas
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Descubra nossos serviços especializados que transformam sua infraestrutura, redes, armazenamentos,
              acesso remoto e muito mais. Com soluções sob medida para o seu sucesso,
              incluímos também microserviços exclusivos, projetados para atender às suas necessidades específicas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sistemas.map((sistema, idx) => (
              <motion.div
                key={sistema.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:border-[#004D61]/50">
                  <div className="relative p-6 space-y-4">
                    <h3 className="text-white font-bold text-xl group-hover:text-[#004D61] transition-colors duration-300">
                      {sistema.title}
                    </h3>
                    <div className="space-y-2">
                      <p className="text-[#004D61] font-semibold">{sistema.description}</p>
                      <p className="text-gray-400 leading-relaxed text-sm whitespace-pre-line break-words">{sistema.details}</p>
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
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#004D61] to-[#004D61]/70 rounded-2xl flex items-center justify-center mx-auto">
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Precisa de uma solução personalizada?</h3>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Nossos especialistas podem desenvolver sistemas únicos e sob medida para atender às necessidades específicas do seu negócio. Entre em contato e vamos conversar sobre seu projeto.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contato-suporte">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#004D61] to-[#004D61]/80 hover:from-[#004D61]/90 hover:to-[#004D61] text-white border-0 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Solicitar orçamento
                    </Button>
                  </Link>
                  <Link href="/sobre">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/20 text-white hover:bg-white/10 hover:border-[#004D61]/50 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      Conhecer a empresa
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  )
}
