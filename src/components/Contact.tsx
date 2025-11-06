"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Github, Linkedin, Mail, Phone, Send, Instagram, CheckCircle2, AlertCircle } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const apiUrl = import.meta.env.VITE_API_URL_PROD


      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast.success("Mensagem enviada com sucesso!", {
        description: "Obrigado! Responderei em breve.",
        duration: 5000,
        icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      })

      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast.error("Erro ao enviar mensagem", {
        description: "Ocorreu um problema. Tente novamente ou entre em contato por outro meio.",
        duration: 6000,
        icon: <AlertCircle className="h-5 w-5 text-red-500" />,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Phone, label: "WhatsApp", href: "https://wa.me/1234567890" },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">Let's discuss your next project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary border-border"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary border-border"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary border-border min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground glow transition-smooth"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="glass rounded-2xl p-8 shadow-card flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-accent/10 transition-smooth group"
                  >
                    <div className="p-3 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-smooth">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </a>
                )
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Mail className="h-5 w-5" />
                <span>contact@example.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
