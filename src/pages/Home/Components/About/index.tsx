import ImageBarco from '@/assets/AboutImagetrhee.jpg'
import ImageBarco2 from '@/assets/AboutOne.jpg'
import ImageBarco3 from '@/assets/AboutImageTwo.jpg'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { aboutTexts } from '@/utils/texts'


export const About = () => {
  const { language } = useLanguage()
  const t = aboutTexts[language as keyof typeof aboutTexts]

  return (
    <section className="w-full min-h-[38rem] h-auto overflow-hidden" id={`${language === 'pt-BR' ? 'sobre-nos' : 'about-us'}`} >
      <div className="container mx-auto p-8 md:px-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div className="flex items-center justify-center gap-3 md:gap-6 order-2 md:order-1" data-aos="fade-left" data-aos-duration="2500">
            <div className='relative flex flex-col gap-6'>
              <img src={ImageBarco} className='w-72 h-28 md:h-[13rem] rounded-lg shadow-lg' alt="" />
              <img src={ImageBarco2} className='w-72 h-32 md:h-[18.5rem] rounded-lg shadow-lg' alt="" />
            </div>

            <div className='relative'>
              <img src={ImageBarco3} className='w-72 md:h-[27rem] rounded-lg shadow-lg' alt="" />
            </div>
          </div>

          <div className=" flex flex-col items-start justify-center gap-4" data-aos="fade-right" data-aos-duration="2500">
            <h2 className=" text-sm text-center text-neutral-500 px-3 py-1 border border-neutral-500 rounded-3xl font-semibold">
              {t.tag}
            </h2>

            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-700">
              <span className='font-semibold text-blue-900'>SAM Offshore:</span>{' '}
              {t.title.replace('SAM Offshore: ', '')}
            </h1>

            <p className="text-md text-gray-700">
              {t.paragraphOne}
            </p>

            <p className="text-md text-gray-700 mt-3">
              {t.paragraphTwo}
            </p>

            <a
              href='https://wa.me/5522998248264' target='_blank'
              className=" text-sm text-white text-center flex items-center gap-2 font-semibold px-6 py-2 mt-1
               bg-blue-900 rounded-xl hover:bg-blue-950 ease-in-out duration-100"
              rel="noopener noreferrer"
            >
              {t.button} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
