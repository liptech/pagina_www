"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, User, Mail, MessageSquare, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

interface FormData {
  nomeCompleto: string
  email: string
  assunto: string
  descricao: string
}

interface FormErrors {
  nomeCompleto?: string
  email?: string
  assunto?: string
  descricao?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nomeCompleto: "",
    email: "",
    assunto: "",
    descricao: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const maxDescriptionLength = 500

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.nomeCompleto.trim()) {
      newErrors.nomeCompleto = "Nome completo é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.assunto.trim()) {
      newErrors.assunto = "Assunto é obrigatório"
    }

    if (!formData.descricao.trim()) {
      newErrors.descricao = "Descrição é obrigatória"
    } else if (formData.descricao.length > maxDescriptionLength) {
      newErrors.descricao = `Descrição deve ter no máximo ${maxDescriptionLength} caracteres`
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
        const response = await fetch("http://localhost:3001/api/enviar-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: formData.assunto,
            body:
              `Nome: ${formData.nomeCompleto}\nEmail: ${formData.email}\nAssunto: ${formData.assunto}\nDescrição: ${formData.descricao}`,
          }),
        })
      const result = await response.json()
      if (!response.ok) {
        setErrors({ descricao: result.message || "Erro ao enviar mensagem." })
        setIsSubmitting(false)
        return
      }
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => {
        setFormData({
          nomeCompleto: "",
          email: "",
          assunto: "",
          descricao: "",
        })
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      setErrors({ descricao: "Erro de conexão com o servidor." })
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
              <Send className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Mensagem enviada!</h3>
              <p className="text-gray-400">
                Obrigado pelo contato. Nossa equipe retornará em breve através do email informado.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
        <div className="p-8">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">Entre em contato</h3>
              <p className="text-gray-400">Complete o formulário abaixo e nossa equipe entrará em contato com você rapidamente para oferecer o suporte que você precisa!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome Completo */}
              <div className="space-y-2">
                <Label htmlFor="nomeCompleto" className="text-white font-medium flex items-center space-x-2">
                  <User className="w-4 h-4 text-[#004D61]" />
                  <span>Nome completo *</span>
                </Label>
                <Input
                  id="nomeCompleto"
                  type="text"
                  value={formData.nomeCompleto}
                  onChange={(e) => handleInputChange("nomeCompleto", e.target.value)}
                  className={`bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#004D61] focus:ring-[#004D61]/20 ${
                    errors.nomeCompleto ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  placeholder="Digite seu nome completo"
                />
                {errors.nomeCompleto && <p className="text-red-400 text-sm">{errors.nomeCompleto}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#004D61]" />
                  <span>Email *</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#004D61] focus:ring-[#004D61]/20 ${
                    errors.email ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  placeholder="seu@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
              </div>

              {/* Assunto */}
              <div className="space-y-2">
                <Label htmlFor="assunto" className="text-white font-medium flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-[#004D61]" />
                  <span>Assunto *</span>
                </Label>
                <Input
                  id="assunto"
                  type="text"
                  value={formData.assunto}
                  onChange={(e) => handleInputChange("assunto", e.target.value)}
                  className={`bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#004D61] focus:ring-[#004D61]/20 ${
                    errors.assunto ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  placeholder="Qual o motivo do seu contato?"
                />
                {errors.assunto && <p className="text-red-400 text-sm">{errors.assunto}</p>}
              </div>

              {/* Descrição */}
              <div className="space-y-2">
                <Label htmlFor="descricao" className="text-white font-medium flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-[#004D61]" />
                  <span>Descrição *</span>
                </Label>
                <Textarea
                  id="descricao"
                  value={formData.descricao}
                  onChange={(e) => handleInputChange("descricao", e.target.value)}
                  className={`bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#004D61] focus:ring-[#004D61]/20 min-h-[120px] resize-none ${
                    errors.descricao ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  placeholder="Descreva detalhadamente sua necessidade ou dúvida..."
                  maxLength={maxDescriptionLength}
                />
                <div className="flex justify-between items-center">
                  {errors.descricao && <p className="text-red-400 text-sm">{errors.descricao}</p>}
                  <p
                    className={`text-sm ml-auto ${
                      formData.descricao.length > maxDescriptionLength * 0.9
                        ? "text-yellow-400"
                        : formData.descricao.length === maxDescriptionLength
                          ? "text-red-400"
                          : "text-gray-500"
                    }`}
                  >
                    {formData.descricao.length}/{maxDescriptionLength}
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#004D61] to-[#004D61]/80 hover:from-[#004D61]/90 hover:to-[#004D61] text-white border-0 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Enviar mensagem</span>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
