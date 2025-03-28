"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// English translations
const en = {
  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    blog: "Blog",
    contact: "Contact",
  },
  hero: {
    subtitle: "Software Developer",
    cta: "Let's Work Together",
  },
  about: {
    title: "Hello, World!",
    paragraph1:
      "Software developer with 4 years of experience in web development, specialized in building robust products and systems.",
    paragraph2:
      "Proficient in modern web technologies with focus on clean code, TDD and scalable software architectures. Full stack experience with monoliths, microservices, CI/CD pipelines and Linux."
  },
  projects: {
    title: "Featured Work",
    description:
      "Some of the things i have been developing.",
    viewAll: "View more",
    liveDemo: "Access",
    code: "Code",
  },
  skills: {
    title: "Tech Stack",
    description:
      "The technologies and tools i use at problem solving. I'm constantly learning and expanding my skillset.",
  },
  blog: {
    title: "Blog",
    description: "Sharing my knowledge, experiences, and insights about software development and technology.",
    viewAll: "View All Posts",
    readMore: "Read More",
    backToBlog: "Back to Blog",
    backToHome: "Back to Home",
  },
  contact: {
    title: "Let's Connect",
    description:
      "Have a project in mind? I'd love to hear about it. Let's discuss how we can work together to bring your ideas to life.",
    email: "Email",
    sendEmail: "Send Email",
    connectLinkedin: "Connect on LinkedIn",
    viewProjects: "View Projects",
    followTwitter: "Follow on Twitter",
  },
  footer: {
    rights: "All rights reserved.",
    experience:
      "Computer Science graduate from São Paulo State University with over 4 years of problem solving experience",
  },
  share: {
    title: "Share this post",
    twitter: "Share on Twitter",
    facebook: "Share on Facebook",
    linkedin: "Share on LinkedIn",
    copyLink: "Copy Link",
    linkCopied: "Link copied to clipboard!",
  },
}

// Portuguese translations
const pt = {
  nav: {
    about: "Sobre",
    projects: "Projetos",
    skills: "Habilidades",
    blog: "Blog",
    contact: "Contato",
  },
  hero: {
    subtitle: "Desenvolvedor de Software",
    cta: "Vamos Trabalhar Juntos",
  },
  about: {
    title: "Olá, Mundo!",
    paragraph1:
      "Desenvolvedor de software com 4 anos de experiência em desenvolvimento web, especializado na construção de produtos e sistemas robustos.",
    paragraph2:
      "Domínio de tecnologias web modernas com foco em clean code, TDD e arquiteturas de software escaláveis. Experiência full stack com monolitos, micro serviços, pipelines de CI/CD e Linux."
  },
  projects: {
    title: "Projetos",
    description:
      "No que eu venho trabalhando no meu tempo livre.",
    viewAll: "Ver mais",
    liveDemo: "Acesse",
    code: "Repositório",
  },
  skills: {
    title: "Minhas tecnologias",
    description:
      "As tecnologias e ferramentas que uso na solução de problemas. Estou constantemente aprendendo e expandindo minhas habilidades.",
  },
  blog: {
    title: "Blog",
    description:
      "Compartilhando meu conhecimento, experiências e insights sobre desenvolvimento de software e tecnologia.",
    viewAll: "Ver Todos os Posts",
    readMore: "Ler Mais",
    backToBlog: "Voltar para o Blog",
    backToHome: "Voltar para o Início",
  },
  contact: {
    title: "Vamos Conectar",
    description:
      "Tem um projeto em mente? Adoraria ouvir sobre ele. Vamos discutir como podemos trabalhar juntos para dar vida às suas ideias.",
    email: "Email",
    sendEmail: "Enviar Email",
    connectLinkedin: "Conectar no LinkedIn",
    viewProjects: "Ver Projetos",
    followTwitter: "Seguir no Twitter",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    experience:
      "Formado em Ciência da Computação pela Universidade Estadual de São Paulo (UNESP) com mais de 4 anos de experiência em resolução de problemas",
  },
  share: {
    title: "Compartilhar este post",
    twitter: "Compartilhar no Twitter",
    facebook: "Compartilhar no Facebook",
    linkedin: "Compartilhar no LinkedIn",
    copyLink: "Copiar Link",
    linkCopied: "Link copiado para a área de transferência!",
  },
}

type Language = "en" | "pt"
type Translations = typeof en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [translations, setTranslations] = useState<Translations>(en)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage) {
        setLanguageState(savedLanguage)
      } else {
        const browserLang = navigator.language.split("-")[0]
        if (browserLang === "pt") {
          setLanguageState("pt")
        }
      }
    }
  }, [])

  useEffect(() => {
    setTranslations(language === "en" ? en : pt)

    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

