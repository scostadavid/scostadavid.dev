"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

type Props = {
  t: any;
};

export function ContactList({t}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {contacts.map((contact, index) => (
        <motion.div
          key={contact.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="bg-zinc-900 border border-white/10 rounded-style p-6 h-full flex flex-col">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/20 p-3 rounded-style text-primary">
                <contact.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{contact.title}</h3>
                <p className="text-white/70 [overflow-wrap:anywhere]">{contact.handle}</p>
              </div>
            </div>
            
            {/* Espaço flexível para empurrar o botão para baixo */}
            <div className="flex-1"></div>
            
            <Link href={contact.href} target={contact.target} rel={contact.rel}>
              <Button className="w-full border-white/10 text-white hover:bg-white/10 rounded-style mt-4">
                {contact.buttonText}
              </Button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

const contacts = [
  {
    id: 1,
    icon: Mail,
    title: "Email",
    handle: "me@scostadavid.dev",
    href: "mailto:me@scostadavid.dev",
    target: "_self",
    rel: "",
    buttonText: "Enviar email"
  },
  {
    id: 2,
    icon: Linkedin,
    title: "LinkedIn",
    handle: "/in/scostadavid",
    href: "https://linkedin.com/in/scostadavid",
    target: "_blank",
    rel: "noopener noreferrer",
    buttonText: "Conectar no LinkedIn"
  },
  {
    id: 3,
    icon: Github,
    title: "GitHub",
    handle: "/scostadavid",
    href: "https://github.com/scostadavid",
    target: "_blank",
    rel: "noopener noreferrer",
    buttonText: "Ver projetos"
  },
  {
    id: 4,
    icon: Twitter,
    title: "Twitter",
    handle: "/scostadavid",
    href: "https://x.com/scostadavid",
    target: "_blank",
    rel: "noopener noreferrer",
    buttonText: "Seguir no Twitter"
  }
]