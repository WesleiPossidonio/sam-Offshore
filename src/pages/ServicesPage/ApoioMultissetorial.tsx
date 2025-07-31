// ApoioMultissetorial.tsx
import { Contacts } from "@/components"
import { About, Banner } from "./components"
import Image from "@/assets/img5.jpg"
import { useLanguage } from "@/hooks/useLanguage"


const ptHero = {
  title: "Apoio Multissetorial",
  description: "Nossos Serviços",
  img: Image,
}

const enHero = {
  title: "Multisectoral Support",
  description: "Our Services",
  img: Image,
}


const ptAbout = {
  title: "Apoio Multissetorial",
  description:
    "Nosso suporte se estende aos setores internos da sua empresa para garantir a continuidade das operações:",
  img: Image,
  listServices: [
    "Interface com compras, QSMS e manutenção;",
    "Apoio técnico para contratação de serviços portuários;",
    "Atendimento a demandas emergenciais com fornecimento de materiais e equipamentos.",
  ],
}

const enAbout = {
  title: "Multisectoral Support",
  description:
    "Our support extends to your company's internal sectors to ensure continuity of operations:",
  img: Image,
  listServices: [
    "Interface with procurement, QHSE, and maintenance;",
    "Technical support for contracting port services;",
    "Support for emergency demands with supply of materials and equipment.",
  ],
}


export const ApoioMultissetorial = () => {
  const { language } = useLanguage()

  console.log(language)

  const languageHero = language === 'pt-BR' ? ptHero : enHero
  const languageAbout = language === 'pt-BR' ? ptAbout : enAbout // ou "en" de acordo com o controle do idioma

  return (
    < main className="w-full min-h-svh h-auto" >
      <Banner {...languageHero} />
      <About {...languageAbout} />
      <Contacts />
    </ main>
  )
}
