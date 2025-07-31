// ApoioMultissetorial.tsx
import { Contacts } from "@/components"
import { About, Banner } from "./components"
import Image from "@/assets/img5.jpg"

const apoioData = {
  banner: {
    pt: {
      title: "Apoio Multissetorial",
      description: "Nossos Serviços",
      img: Image,
    },
    en: {
      title: "Multisectoral Support",
      description: "Our Services",
      img: Image,
    },
  },
  about: {
    pt: {
      title: "Apoio Multissetorial",
      description:
        "Nosso suporte se estende aos setores internos da sua empresa para garantir a continuidade das operações:",
      img: Image,
      listServices: [
        "Interface com compras, QSMS e manutenção;",
        "Apoio técnico para contratação de serviços portuários;",
        "Atendimento a demandas emergenciais com fornecimento de materiais e equipamentos.",
      ],
    },
    en: {
      title: "Multisectoral Support",
      description:
        "Our support extends to your company's internal sectors to ensure continuity of operations:",
      img: Image,
      listServices: [
        "Interface with procurement, QHSE, and maintenance;",
        "Technical support for contracting port services;",
        "Support for emergency demands with supply of materials and equipment.",
      ],
    },
  },
}

export const ApoioMultissetorial = () => {
  const language = "pt" // ou "en" de acordo com o controle do idioma

  return (
    <main className="w-full min-h-svh h-auto">
      <Banner {...apoioData.banner[language]} />
      <About {...apoioData.about[language]} />
      <Contacts />
    </main>
  )
}
