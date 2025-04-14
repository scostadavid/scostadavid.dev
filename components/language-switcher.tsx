'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type Language = 'en' | 'pt'

interface LanguageOption {
  code: Language
  label: string
  flag: string
}

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [open, setOpen] = useState(false)

  const currentLocale = params.locale as Language

  const languages: LanguageOption[] = [
    {
      code: 'en',
      label: 'English',
      flag: '🇺🇸'
    },
    {
      code: 'pt',
      label: 'Português',
      flag: '🇧🇷'
    }
  ]

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  const switchLanguage = (newLang: Language) => {
    const segments = pathname.split('/')
    segments[1] = newLang
    const newPath = segments.join('/')
    router.push(newPath)
    setOpen(false)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className='border-white/20 bg-black/20 backdrop-blur-lg hover:bg-white/10 rounded-style gap-1'
        >
          <span className='text-lg'>{currentLanguage.flag}</span>
          <span className='text-sm font-medium'>{currentLanguage.code.toUpperCase()}</span>
          <ChevronDown className='h-4 w-4 text-white/70 transition-transform duration-200' />
          <span className='sr-only'>Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align='end' 
        className='bg-zinc-900 border border-white/10 rounded-style min-w-[180px]'
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className='flex items-center justify-between cursor-pointer hover:bg-white/10 px-3 py-2'
            onClick={() => switchLanguage(lang.code)}
          >
            <div className='flex items-center gap-3 text-white'>
              <span className='text-lg'>{lang.flag}</span>
              <div className='flex flex-col'>
                <span className='text-sm font-medium'>{lang.code.toUpperCase()}</span>
                <span className='text-xs text-white/60'>{lang.label}</span>
              </div>
            </div>
            {currentLocale === lang.code && (
              <Check className='h-4 w-4 text-primary ml-4' />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
