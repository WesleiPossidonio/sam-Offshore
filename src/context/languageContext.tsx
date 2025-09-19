import { createContext } from 'react'

export interface LanguageContextType {
  language: string
  handleLanguage: (lang: string) => void
}

export const LanguageContext = createContext({} as LanguageContextType)
