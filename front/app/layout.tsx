import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "LIPTECH - Soluções Tecnológicas Inovadoras",
  description:
    "Prestação de serviços e soluções tecnológicas na área de TI com foco em inovação e qualidade.",
  icons: {
    icon: [
      { url: "/favicon/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#0A0A0A] flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <ScrollToTop />
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
            scroll-behavior: smooth;
          }
        `}</style>
      </body>
    </html>
  )
}
