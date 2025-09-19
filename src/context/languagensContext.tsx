import {
  type ReactNode,
  useEffect,
  useState,
} from 'react'
import { LanguageContext } from './languageContext'

interface LanguageContextProviderProps {
  children: ReactNode
}

export const LanguageContextProvider = ({ children }: LanguageContextProviderProps) => {
  const [language, setLanguage] = useState('pt-BR')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language')
      if (storedLanguage) {
        setLanguage(storedLanguage)
      } else {
        localStorage.setItem('language', language)
      }
    }
  }, [])

  const handleLanguage = (lang: string) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
