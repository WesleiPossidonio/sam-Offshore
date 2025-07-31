import { Contacts } from "@/components"
import { About, Banner } from "./components"

import Image from '@/assets/banner.avif'

const pt = {
  title: 'Despacho Marítimo',
  description: 'Nossos Serviços',
  aboutTitle: 'Despacho Marítimo',
  aboutText: 'Gerenciamos todas as obrigações legais e operacionais junto aos órgãos competentes, garantindo conformidade e agilidade:',
  listServices: [
    'Comunicação com Polícia Federal, Marinha(Capitania e Agência), Anvisa e Autoridades Portuárias;',
    'Emissão de autorizações, inspeções, certificados e Aviso aos Navegantes;',
    'Nomeação da embarcação no sistema PMIS(Porto do Açu);',
    'Gerenciamento de DUVs com todas as anuências exigidas.'
  ]
}

const en = {
  title: 'Maritime Dispatch',
  description: 'Our Services',
  aboutTitle: 'Maritime Dispatch',
  aboutText: 'We manage all legal and operational obligations with the competent authorities, ensuring compliance and agility:',
  listServices: [
    'Communication with Federal Police, Navy (Captaincy and Agency), Anvisa, and Port Authorities;',
    'Issuance of authorizations, inspections, certificates, and Notices to Mariners;',
    'Vessel registration in the PMIS system (Port of Açu);',
    'Management of DUVs with all required approvals.'
  ]
}

// Troque para true para ativar inglês
const isEnglish = false

export const DespachoMaritimo = () => {
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
