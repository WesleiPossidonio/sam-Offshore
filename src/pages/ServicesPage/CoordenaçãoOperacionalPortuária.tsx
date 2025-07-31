import { Contacts } from "@/components"
import { About, Banner } from "./components"

import Image from '@/assets/banner.avif'

// Definição dos textos em português
const pt = {
  title: 'Coordenação Operacional Portuária',
  description: 'Nossos Serviços',
  aboutTitle: 'Coordenação Operacional Portuária',
  aboutText: 'Prestamos apoio técnico às operações de carga e serviços logísticos:',
  listServices: [
    'Supervisão da entrada e saída de cargas;',
    'Autorizações para lançamento de barreiras (OIL SPILL);',
    'Apoio na contratação de balsas, lanchas e helicópteros;',
    'Suporte a fornecedores e operações de campo.'
  ]
}

// Definição dos textos em inglês
const en = {
  title: 'Port Operations Coordination',
  description: 'Our Services',
  aboutTitle: 'Port Operations Coordination',
  aboutText: 'We provide technical support for cargo operations and logistics services:',
  listServices: [
    'Supervision of cargo entry and exit;',
    'Authorizations for deploying barriers (OIL SPILL);',
    'Support in hiring barges, boats, and helicopters;',
    'Support for suppliers and field operations.'
  ]
}

// Flag de idioma: troque para `true` para ver a versão em inglês
const isEnglish = false

export const CoordenaçãoOperacionalPortuária = () => {
  const content = isEnglish ? en : pt

  return (
    <main className="w-full min-h-svh h-auto">
      <Banner title={content.title} description={content.description} img={Image} />
      <About
        title={content.aboutTitle}
        description={content.aboutText}
        img={Image}
        listServices={content.listServices}
      />
      <Contacts />
    </main>
  )
}
