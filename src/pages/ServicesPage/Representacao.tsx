import { Contacts } from "@/components"
import { About, Banner } from "./components"

import Image from '@/assets/banner.avif'
import { useLanguage } from "@/hooks/useLanguage"

// Definição dos textos em português
// Definição dos textos em português
const pt = {
  title: 'Representação local perante órgãos fiscalizadores',
  description: 'Nossos Serviços',
  aboutTitle: 'Representação local perante órgãos fiscalizadores',
  aboutText: 'Atuamos como representantes locais junto aos órgãos fiscalizadores, assegurando conformidade legal, transparência e tranquilidade para os armadores:',
  listServices: [
    'Interlocução direta com órgãos reguladores e autoridades locais;',
    'Acompanhamento de inspeções, fiscalizações e processos administrativos;',
    'Emissão e gestão de licenças, autorizações e documentos oficiais;',
    'Suporte contínuo para garantir a regularidade das operações portuárias.'
  ]
}

const en = {
  title: 'Local Representation before Regulatory Authorities',
  description: 'Our Services',
  aboutTitle: 'Local Representation before Regulatory Authorities',
  aboutText: 'We act as local representatives before regulatory bodies, ensuring legal compliance, transparency, and peace of mind for shipowners:',
  listServices: [
    'Direct liaison with regulatory bodies and local authorities;',
    'Follow-up on inspections, audits, and administrative procedures;',
    'Issuance and management of licenses, permits, and official documents;',
    'Ongoing support to ensure regularity of port operations.'
  ]
}


export const Representação = () => {
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
