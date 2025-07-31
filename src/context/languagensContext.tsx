import {
  type ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react'

interface LanguageContextType {
  language: string
  // eslint-disable-next-line no-unused-vars
  handleLanguage: (lang: string) => void
}

interface LanguageContextProviderProps {
  children: ReactNode
}

export const LanguageContext = createContext({} as LanguageContextType)

export const LanguageContextProvider = ({ children }: LanguageContextProviderProps) => {
  const [language, setLanguage] = useState('pt-BR')

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language')
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
    else {
      localStorage.setItem('language', language)
    }
  }, [])

  const handleLanguage = (lang: string) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    console.log(lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        handleLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}