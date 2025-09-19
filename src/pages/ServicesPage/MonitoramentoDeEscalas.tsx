// ApoioMultissetorial.tsx
import { Contacts } from "@/components"
import { About, Banner } from "./components"
import Image from "@/assets/img5.jpg"
import { useLanguage } from "@/hooks/useLanguage"


const ptHero = {
  title: "Monitoramento de escalas e comunicação com autoridades",
  description: "Nossos Serviços",
  img: Image,
}

const enHero = {
  title: "Schedule Monitoring and Communication with Authorities",
  description: "Our Services",
  img: Image,
}

const ptAbout = {
  title: "Monitoramento de escalas e comunicação com autoridades",
  description:
    "Realizamos acompanhamento contínuo das operações e interface direta com as autoridades portuárias, garantindo transparência, regularidade e suporte dedicado 24/7:",
  img: Image,
  listServices: [
    "Monitoramento de escalas operacionais em tempo real;",
    "Comunicação direta com Capitania dos Portos, Polícia Federal, Anvisa e Autoridades Portuárias;",
    "Atualização e reporte constante sobre movimentações e prazos às partes envolvidas.",
  ],
}

const enAbout = {
  title: "Schedule Monitoring and Communication with Authorities",
  description:
    "We provide continuous oversight of operations and direct liaison with port authorities, ensuring transparency, regularity, and dedicated 24/7 support:",
  img: Image,
  listServices: [
    "Real-time monitoring of operational schedules;",
    "Direct communication with the Port Captaincy, Federal Police, Anvisa, and Port Authorities;",
    "Ongoing updates and reporting on movements and deadlines to all stakeholders.",
  ],
}



export const MonitoramentoDeEscalas = () => {
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
