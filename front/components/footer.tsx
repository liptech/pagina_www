"use client"

import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-sm border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <img src="/logos/LOGO-CLARA.png" alt="Logo" className="w-7 h-7 object-contain" />
            
            <span className="text-white font-bold text-xl">LIPTECH</span>
             
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Soluções tecnológicas inovadoras para impulsionar seu negócio no futuro digital. Transformamos desafios em
              oportunidades através da tecnologia.
            </p>
            {/* <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-[#004D61] transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-[#004D61] transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-[#004D61] transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Links rápidos</h3>
            <div className="space-y-2">
              <Link href="/sobre" className="block text-gray-400 hover:text-[#004D61] transition-colors text-sm">
                Sobre a empresa
              </Link>
              <Link href="/sistemas" className="block text-gray-400 hover:text-[#004D61] transition-colors text-sm">
                Sistemas oferecidos
              </Link>
              <Link
                href="/contato-suporte"
                className="block text-gray-400 hover:text-[#004D61] transition-colors text-sm"
              >
                Contato e suporte
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#004D61]" />
                <span>contato@liptech.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#004D61]" />
                <span>(21) 99258-3999</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#004D61]" />
                <span>Rio de Janeiro, RJ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} LIPTECH. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
