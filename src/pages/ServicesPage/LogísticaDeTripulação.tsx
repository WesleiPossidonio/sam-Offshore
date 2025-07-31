import { Contacts } from "@/components"
import { About, Banner } from "./components"

import Image from '@/assets/img4.jpg'

const pt = {
  title: 'Logística De Tripulação',
  description: 'Nossos Serviços',
  aboutTitle: 'Logística De Tripulação',
  aboutText: 'Atuamos com total suporte à movimentação de pessoal nos terminais e portos, assegurando fluidez e segurança:',
  listServices: [
    'Liberação de tripulantes e técnicos;',
    'Apoio na troca de turnos com hospedagem e transporte;',
    'Autorização para acesso aos terminais;',
    'Acompanhamento médico em casos de emergência.'
  ]
}

const en = {
  title: 'Crew Logistics',
  description: 'Our Services',
  aboutTitle: 'Crew Logistics',
  aboutText: 'We provide full support for personnel movement in terminals and ports, ensuring fluidity and safety:',
  listServices: [
    'Crew and technician clearance;',
    'Support for shift changes with lodging and transportation;',
    'Authorization for terminal access;',
    'Medical monitoring in emergency cases.'
  ]
}

// Altere para true para ativar inglês
const isEnglish = false

export const LogisticaDeTripulacao = () => {
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
