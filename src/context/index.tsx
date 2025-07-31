import { type ReactNode } from 'react'
import { LanguageContextProvider } from './languagensContext'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <LanguageContextProvider>{children}</LanguageContextProvider>
  )
}