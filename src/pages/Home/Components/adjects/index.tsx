import Barco from '@/assets/Barco.svg'
import Leme from '@/assets/Leme.svg'
import Remo from '@/assets/Remo.svg'
import Boia from '@/assets/Boia.svg'
import { useLanguage } from '@/hooks/useLanguage'
import { adjectsTexts } from '@/utils/texts'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const icons = [Barco, Leme, Remo, Boia]

export const Adjects = () => {
  const { language } = useLanguage()
  const content = adjectsTexts[language as 'pt-BR' | 'en']

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className="w-full min-h-[20rem] h-auto bg-blue-950 flex items-center justify-center">
      <div className="container px-8 py-14 grid grid-cols-4 gap-8" >
        {content.map((item, index) => (
          <div
            key={index}
            className={`col-span-4 md:col-span-1 md:min-h-[21rem] h-auto border-2 border-neutral-100 rounded-md p-6 space-y-4 hover:scale-105 transition-transform duration-300 ${index === 3 ? '' : ''
              }`}
            data-aos="zoom-in" data-aos-duration="2500"
          >
            <img src={icons[index]} className="w-18 md:w-20" alt="" />
            <div className="space-y-2">
              <h1 className="text-white text-2xl font-semibold">{item.title}</h1>
              <p className="text-sm md:text-md text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
