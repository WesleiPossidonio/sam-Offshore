import ImageOne from '@/assets/ImageService.avif'
import ImageTwo from '@/assets/port-de-barcelona-industrial.jpg'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/useLanguage'
import { sectionServiceContent } from '@/utils/texts'
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export const SectionService = () => {
  const [allServices, setAllServices] = useState(false)
  const { language } = useLanguage()
  const content = sectionServiceContent[language as 'pt-BR' | "en"]

  useEffect(() => {
    AOS.init()
  }, [])

  const handleAllServices = () => {
    setAllServices((prev) => !prev)
  }

  const images = [ImageOne, ImageTwo]

  const renderCard = (service: { title: string; description: string }, index: number) => (
    <div
      key={index}
      className="col-span-8 md:col-span-4 grid grid-cols-3 gap-4 p-6 relative w-full h-[23rem] md:h-[30rem] bg-center bg-cover 
        bg-no-repeat rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
      style={{ backgroundImage: `url(${images[index % images.length]})` }}
      data-aos="zoom-in" data-aos-duration="2500"
    >
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/80 to-transparent" />

      <div className="col-span-3 z-10 flex flex-col items-start justify-end gap-2 h-full text-white">
        <h1 className="text-3xl font-bold">{service.title}</h1>
        <p className="w-full md:w-2/3">{service.description}</p>
      </div>

      <div className="absolute top-4 md:bottom-4 right-6 z-20">
        <button
          aria-label={`Ver mais sobre ${service.title}`}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-blue-900 shadow-md transition"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )

  return (
    <section className="w-full min-h-[40rem] h-auto flex items-end justify-center">
      <div className="container px-8 grid grid-cols-8 gap-4 py-14">
        <div className="col-span-8 flex items-center justify-between mb-11">
          <div className="flex flex-col gap-4">
            <h2 className="w-24 text-sm text-center text-neutral-500 px-3 py-1 border border-neutral-500 rounded-3xl">
              {content.tag}
            </h2>

            <div className="space-y-2">
              <h1 className="text-4xl text-neutral-700 font-bold">{content.title}</h1>
              <p className="text-neutral-600">{content.description}</p>
            </div>
          </div>
        </div>

        {content.services.slice(0, 2).map(renderCard)}

        {!allServices && (
          <div className="col-span-8 flex items-center justify-center mt-6">
            <Button className="w-46 py-5 bg-blue-950 font-semibold" onClick={handleAllServices}>
              {content.seeMore}
            </Button>
          </div>
        )}

        {allServices && (
          <>
            {content.services.map(renderCard)}
            <div className="col-span-8 flex items-center justify-center mt-6">
              <Button className="w-46 py-5 bg-blue-950 font-semibold" onClick={handleAllServices}>
                {content.seeLess}
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
