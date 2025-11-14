import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/useLanguage"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { sectionServiceContent } from '@/utils/texts'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const SectionService = () => {
  const [allServices, setAllServices] = useState(false)
  const { language } = useLanguage()
  const content = sectionServiceContent[language as 'pt-BR' | 'en']
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init()
  }, [])

  const handleAllServices = () => {
    setAllServices((prev) => !prev)
  }

  const renderCard = (service: { id: number; title: string; description: string; route?: string }) => (
    <div
      key={service.id}
      className="bg-white col-span-3 lg:col-span-1 p-6 rounded-xl shadow-md border border-neutral-200 hover:shadow-lg transition duration-300 flex flex-col justify-between"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-blue-950">{service.title}</h1>
        <p className="text-neutral-700 text-sm">{service.description}</p>
      </div>

      {service.route && (
        <button
          onClick={() => navigate(service.route!)}
          className="mt-4 w-10 h-10 flex items-center justify-center rounded-full bg-blue-950 text-white hover:bg-blue-900 transition"
          aria-label={`Ver mais sobre ${service.title}`}
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      )}
    </div>
  )

  const servicesToShow = allServices ? content.services : content.services.slice(0, 3)

  return (
    <section
      className="w-full min-h-[40rem] flex items-end justify-center"
      id={language === 'pt-br' ? 'servicos' : 'services'}
    >
      <div className="container px-8 py-14">
        <div className="flex flex-col gap-4 mb-11">
          <h2 className="w-24 text-sm text-center text-neutral-500 px-3 py-1 border border-neutral-500 rounded-3xl">
            {content.tag}
          </h2>

          <div className="space-y-2">
            <h1 className="text-4xl text-neutral-700 font-bold">{content.title}</h1>
            <p className="text-neutral-600">{content.description}</p>
          </div>
        </div>

        {/* GRID DE 3 POR LINHA */}
        <div className="grid grid-cols-3 gap-6">
          {servicesToShow.map(renderCard)}
        </div>

        <div className="flex items-center justify-center mt-10">
          <Button
            className="w-46 py-5 bg-blue-950 font-semibold text-white"
            onClick={handleAllServices}
          >
            {allServices ? content.seeLess : content.seeMore}
          </Button>
        </div>
      </div>
    </section>
  )
}
