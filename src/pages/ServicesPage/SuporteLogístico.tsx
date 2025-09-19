import { Contacts } from "@/components"
import { About, Banner } from "./components"

import Image from '@/assets/banner.avif'
import { useLanguage } from "@/hooks/useLanguage"

// Definição dos textos em português
const pt = {
  title: 'Suporte Logístico',
  description: 'Nossos Serviços',
  aboutTitle: 'Suporte Logístico',
  aboutText: 'Coordenamos soluções completas em transporte, armazenagem e serviços de apoio, garantindo eficiência e continuidade das operações:',
  listServices: [
    'Supervisão da movimentação de cargas em terminais e portos;',
    'Autorizações para instalação de barreiras de contenção (OIL SPILL);',
    'Apoio na contratação e coordenação de balsas, lanchas e helicópteros;',
    'Suporte a fornecedores e operações de campo com foco em agilidade e segurança.'
  ]
}

const en = {
  title: 'Logistical Support',
  description: 'Our Services',
  aboutTitle: 'Logistical Support',
  aboutText: 'We coordinate end-to-end solutions in transport, storage, and support services, ensuring efficiency and continuity of operations:',
  listServices: [
    'Supervision of cargo handling at terminals and ports;',
    'Authorizations for installing containment barriers (OIL SPILL);',
    'Support in hiring and coordinating barges, boats, and helicopters;',
    'Assistance to suppliers and field operations with a focus on agility and safety.'
  ]
}


// Flag de idioma: troque para `true` para ver a versão em inglês


export const SuporteLogístico = () => {
  const { language } = useLanguage()
  const content = language !== 'pt-BR' ? en : pt

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
