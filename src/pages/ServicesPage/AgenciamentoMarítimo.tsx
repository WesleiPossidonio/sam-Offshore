import { Contacts } from "@/components"
import { About, Banner } from "./components"

import Image from '@/assets/banner.avif'
import { useLanguage } from "@/hooks/useLanguage"
import { Adjects } from "../Home/Components"

const pt = {
  title: 'Serviço de Agenciamento Marítimo',
  description: 'Nossos Serviços',
  aboutTitle: 'Agilidade e Confiabilidade em Cada Escala',
  aboutText: 'Oferecemos gestão completa das obrigações legais e operacionais perante as autoridades competentes, garantindo conformidade, agilidade e suporte 24/7 para cada embarcação atendida:',
  listServices: [
    'Comunicação direta com Polícia Federal, Marinha (Capitania e Agência), Anvisa e Autoridades Portuárias;',
    'Emissão e acompanhamento de autorizações, inspeções, certificados e Avisos aos Navegantes;',
    'Nomeação e registro da embarcação no sistema PMIS (Porto do Açu);',
    'Gerenciamento de DUVs com todas as anuências necessárias.'
  ]
}

const en = {
  title: 'Maritime Agency Services',
  description: 'Our Services',
  aboutTitle: 'Agility and Reliability at Every Call',
  aboutText: 'We provide comprehensive management of all legal and operational requirements before the competent authorities, ensuring compliance, efficiency, and 24/7 support for every vessel assisted:',
  listServices: [
    'Direct communication with Federal Police, Navy (Captaincy and Agency), Anvisa, and Port Authorities;',
    'Issuance and follow-up of authorizations, inspections, certificates, and Notices to Mariners;',
    'Vessel nomination and registration in the PMIS system (Port of Açu);',
    'Management of DUVs with all required approvals.'
  ]
}



export const AgenciamentoMarítimo = () => {
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
      <Adjects />
      <Contacts />
    </main>
  )
}
