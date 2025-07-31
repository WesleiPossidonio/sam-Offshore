import { LanguageContext } from '@/context/languagensContext'
import { useContext } from 'react'

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  return context
}