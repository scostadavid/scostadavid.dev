'use server';

import { i18n } from '@/lib/i18n';

import { Github, Mail, ArrowRight, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SkillsGrid } from '@/components/skills-grid';
import { ProjectShowcase } from '@/components/project-showcase';
import { AWS, CSharp, Docker, DotNet, Linux, Mongodb, NodeJs, Postgres, ReactJS, Typescript } from '@/lib/icon';
import { BlogPostList } from '@/components/blog-post-list';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { LanguageSwitcher } from '@/components/language-switcher';

export default async function HomePage({ params }: { params: { locale: string } }) {
  const t = await i18n(params.locale);
    
  const skills = [
    { name: 'AWS', icon: <AWS /> },
    { name: '.NET', icon: <DotNet /> },
    { name: 'C#', icon: <CSharp /> },
    { name: 'Node.js', icon: <NodeJs /> },            
    { name: 'React Native', icon: <ReactJS /> },
    { name: 'TypeScript', icon: <Typescript /> },
    { name: 'PostgreSQL', icon: <Postgres /> },
    { name: 'MongoDB', icon: <Mongodb /> },
    { name: 'Docker', icon: <Docker /> },
    { name: 'Linux', icon: <Linux /> },
  ];
  
  const contacts = [
    {
      id: 1,
      icon: Mail,
      title: 'Email',
      handle: 'me@scostadavid.dev',
      href: 'mailto:me@scostadavid.dev',
      target: '_self',
      rel: '',
      buttonText: 'Enviar email'
    },
    {
      id: 2,
      icon: Linkedin,
      title: 'LinkedIn',
      handle: '/in/scostadavid',
      href: 'https://linkedin.com/in/scostadavid',
      target: '_blank',
      rel: 'noopener noreferrer',
      buttonText: 'Conectar no LinkedIn'
    },
    {
      id: 3,
      icon: Github,
      title: 'GitHub',
      handle: '/scostadavid',
      href: 'https://github.com/scostadavid',
      target: '_blank',
      rel: 'noopener noreferrer',
      buttonText: 'Ver projetos'
    },
    {
      id: 4,
      icon: Twitter,
      title: 'Twitter',
      handle: '/scostadavid',
      href: 'https://x.com/scostadavid',
      target: '_blank',
      rel: 'noopener noreferrer',
      buttonText: 'Seguir no Twitter'
    }
  ];

  const projects = [
    {
      id: 1,
      title: '📦 Byte Kit',
      description: 'Everyday developer tools to make your programming easier',
      image: '/bk.webp',
      demoUrl: 'https://bytekit.xyz',
      featured: true,
    },
  ]

  return (
    <div className='min-h-screen bg-black text-white'>

      <div className='relative z-10 mx-auto max-w-5xl px-6 sm:px-8 pt-8 flex justify-end'>
        <LanguageSwitcher />
      </div>


      <main className='relative z-10 mx-auto max-w-5xl px-6 py-24 sm:px-8 md:py-8'>
        {/* Hero Section */}
        <div className='mb-16 flex flex-col items-center text-center md:mb-24 md:items-start md:text-left'>
          <Badge className='mb-4 bg-blue-600 hover:bg-blue-700' variant='secondary'>
            Software Developer
          </Badge>
          <h1
              className='glitch text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter'
              data-text='DAVID COSTA'
            >
            DAVID COSTA
          </h1>
          <p className='mb-8 max-w-2xl text-lg text-zinc-400 md:text-xl'>
            {t.about.paragraph1}
          </p>
          <div className='flex flex-col md:flex-row gap-4 items-center'>
            <Button className='gap-2 bg-blue-600 hover:bg-blue-700'>
              {t.hero.cta} <ArrowRight className='h-4 w-4' />
            </Button>
            <Button
              variant='outline'
              className='gap-2 border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white'
            >
              {t.projects.title}
            </Button>
          </div>
        </div>

        <section className='mb-16 md:mb-24'>
          <h2 className='mb-8 text-2xl font-bold md:text-3xl'>{t.skills.title}</h2>
          <SkillsGrid skills={skills} />
        </section>

        {/* Featured Projects */}
        <section className='mb-16 md:mb-24'>
          <h2 className='mb-8 text-2xl font-bold md:text-3xl'>{t.projects.title}</h2>
          <ProjectShowcase projects={projects} />
        </section>

        {/* Blog Section */}
        <section className='mb-16 md:mb-24'>
          <h2 className='mb-8 text-2xl font-bold md:text-3xl'>Blog</h2>
          <BlogPostList limit={3} locale={params.locale} />

          <div className='mt-12'>
            <Link href={`${params.locale}/blog`} className='group'>
              <Button variant='ghost' className='text-white/70 hover:text-white rounded-style'>
                {t.blog.viewAll}
                <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
              </Button>
            </Link>
          </div>

        </section>

        {/* Contact Section */}
        <section>
          <h2 className='mb-8 text-2xl font-bold md:text-3xl'>{t.contact.title}</h2>
          <div className='flex flex-wrap gap-4'>
            {contacts.map((contact, index) => (
              <Link key={'ci' + index} href={contact.href} target={contact.target} rel={contact.rel}>
                <Button 
                  variant='outline'
                  className='gap-2 border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white'
                >                  
                  <contact.icon /> {contact.title}
                </Button>
              </Link>
            ))}
          </div>
        </section>

        <Footer t={t} />
      </main>
    </div>
  )
}