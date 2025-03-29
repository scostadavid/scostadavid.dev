    "use client";

    import { useState } from "react";
import { Menu, X } from "lucide-react";

                    // import { BlogPreview } from "@/components/blog-preview"
    import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/context/language-context";
import { useIsMobile } from "@/hooks/use-mobile";

    export function Navbar() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useIsMobile();

    return (
        <nav className="fixed top-8 w-full z-50">
        <div className="container mx-auto px-4">
            {/* Container principal alinhado */}
            <div className="flex justify-between items-center">
            {/* Espaço vazio para balancear com o botão mobile */}
            <div className="md:hidden w-6"></div>

            {/* Nav Desktop - Centralizado */}
            <div className="hidden md:flex justify-center flex-1">
                <div className="flex items-center gap-6 bg-black/30 backdrop-blur-lg p-4 rounded-style border border-white/20 shadow-lg">
                <a href="#about" className="text-white hover:text-primary transition-colors">
                    {t.nav.about}
                </a>
                <a href="#projects" className="text-white hover:text-primary transition-colors">
                    {t.nav.projects}
                </a>
                <a href="#skills" className="text-white hover:text-primary transition-colors">
                    {t.nav.skills}
                </a>
                <a href="#blog" className="text-white hover:text-primary transition-colors">
                    {t.nav.blog}
                </a>
                <a href="#contact" className="text-white hover:text-primary transition-colors">
                    {t.nav.contact}
                </a>
                <LanguageSwitcher />
                </div>
            </div>

            {/* Mobile Button - Alinhado à direita */}
            {isMobile && (
                <div className="ml-auto">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white bg-black/30 backdrop-blur-lg p-2 rounded-lg border border-white/20 shadow-lg"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                </div>
            )}
            </div>

            {/* Mobile Menu Overlay */}
            {isMobile && isOpen && (
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90vw] bg-black/80 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl flex flex-col items-center gap-4">
                <a onClick={() => setIsOpen(false)} href="#about" className="text-white hover:text-primary transition-colors">
                {t.nav.about}
                </a>
                <a onClick={() => setIsOpen(false)} href="#projects" className="text-white hover:text-primary transition-colors">
                {t.nav.projects}
                </a>
                <a onClick={() => setIsOpen(false)} href="#skills" className="text-white hover:text-primary transition-colors">
                {t.nav.skills}
                </a>
                <a onClick={() => setIsOpen(false)} href="#blog" className="text-white hover:text-primary transition-colors">
                {t.nav.blog}
                </a>
                <a onClick={() => setIsOpen(false)} href="#contact" className="text-white hover:text-primary transition-colors">
                {t.nav.contact}
                </a>
                <LanguageSwitcher />
            </div>
            )}
        </div>
        </nav>
    );
    }
