"use client"

import { useState } from "react"
import { Twitter, Facebook, Linkedin, LinkIcon, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/context/language-context"

interface ShareButtonsProps {
  title: string
  url: string
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()
  const { t } = useLanguage()

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      toast({
        title: t.share.linkCopied,
        duration: 2000,
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-semibold text-white">{t.share.title}</h3>
      <div className="flex flex-wrap gap-2">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.share.twitter}
        >
          <Button variant="outline" size="icon" className="border-white/20 bg-black/20 hover:bg-white/10 rounded-style">
            <Twitter className="h-5 w-5 text-[#1DA1F2]" />
          </Button>
        </a>
        {/* <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.share.facebook}
        >
          <Button variant="outline" size="icon" className="border-white/20 bg-black/20 hover:bg-white/10 rounded-style">
            <Facebook className="h-5 w-5 text-[#4267B2]" />
          </Button>
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.share.linkedin}
        >
          <Button variant="outline" size="icon" className="border-white/20 bg-black/20 hover:bg-white/10 rounded-style">
            <Linkedin className="h-5 w-5 text-[#0077B5]" />
          </Button>
        </a> */}
        <Button
          variant="outline"
          size="icon"
          className="border-white/20 bg-black/20 hover:bg-white/10 rounded-style"
          onClick={handleCopyLink}
          aria-label={t.share.copyLink}
        >
          {copied ? <Check className="h-5 w-5 text-green-500" /> : <LinkIcon className="h-5 w-5 text-white" />}
        </Button>
      </div>
    </div>
  )
}

