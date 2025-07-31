import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import ImageLogo from '@/assets/sam_offshore_transparente.png'
import { useLanguage } from '@/hooks/useLanguage'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const { language, handleLanguage } = useLanguage()
  const isPT = language === 'pt-BR'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = isPT
    ? ['Home', 'Sobre Nós', 'Serviços', 'Contatos']
    : ['Home', 'About Us', 'Services', 'Contact']

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 md:px-16 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/">
          <img src={ImageLogo} className="w-28 md:w-36" alt="Logo" />
        </a>

        {/* Menu desktop */}
        <nav className={`hidden md:flex gap-6 items-center`}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`font-semibold text-lg ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Idioma */}
        <div className="hidden md:block">
          <Select onValueChange={handleLanguage}>
            <SelectTrigger className={`font-semibold text-lg ${isScrolled ? 'text-black' : 'text-white'}`}>
              <SelectValue placeholder={isPT ? 'Brasil 🇧🇷' : 'USA 🇺🇸'} />
            </SelectTrigger>
            <SelectContent className="text-neutral-900">
              <SelectItem value="pt-BR">Brasil 🇧🇷</SelectItem>
              <SelectItem value="en">EUA 🇺🇸</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <Menu className={`${isScrolled ? 'text-black' : 'text-white'}`} />
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <a key={index} href="#" className="text-black font-semibold text-lg">
                {item}
              </a>
            ))}
            <Select onValueChange={handleLanguage}>
              <SelectTrigger className="font-semibold text-lg text-black">
                <SelectValue placeholder={isPT ? 'Brasil 🇧🇷' : 'USA 🇺🇸'} />
              </SelectTrigger>
              <SelectContent className="text-neutral-900">
                <SelectItem value="pt-BR">Brasil 🇧🇷</SelectItem>
                <SelectItem value="en">EUA 🇺🇸</SelectItem>
              </SelectContent>
            </Select>
          </nav>
        </div>
      )}
    </header>
  )
}
