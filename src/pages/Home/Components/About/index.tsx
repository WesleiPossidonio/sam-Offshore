import ImageBarco from '@/assets/ImgBarcos.jpg'
import ImageBarco2 from '@/assets/ImgBarco2.jpg'
import ImageBarco3 from '@/assets/ImgBarco3.jpg'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { aboutTexts } from '@/utils/texts'


export const About = () => {
  const { language } = useLanguage()
  const t = aboutTexts[language as keyof typeof aboutTexts]

  return (
    <section className="w-full min-h-[38rem] h-auto overflow-hidden" id={`${language === 'pt-br' ? 'sobre-ns' : 'about-us'}`} >
      <div className="container mx-auto p-8 md:px-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div className="flex items-center justify-center gap-3 md:gap-6 order-2 md:order-1" data-aos="fade-left" data-aos-duration="2500">
            <div className='relative flex flex-col gap-6'>
              <span className=" absolute -left-4 -top-5 flex flex-col items-center justify-center p-4 bg-neutral-100 rounded-lg shadow">
                <strong className="text-2xl md:text-4xl self-start text-blue-900">300+</strong>
                <p className="text-sm md:text-md text-center font-semibold text-neutral-600">
                  {t.metricClients}
                </p>
              </span>

              <img src={ImageBarco} className='w-72 md:h-[18rem] rounded-lg shadow-lg' alt="" />
              <img src={ImageBarco2} className='w-72 md:h-[10.5rem] rounded-lg shadow-lg' alt="" />
            </div>

            <div className='relative'>
              <img src={ImageBarco3} className='w-72 md:h-[25rem] rounded-lg shadow-lg' alt="" />
              <span className=" absolute left-12 -bottom-15 flex flex-col items-center 
                justify-center text-center p-2 md:p-4 bg-neutral-100 rounded-lg shadow">
                <strong className="text-2xl md:text-4xl text-blue-900">200+</strong>
                <p className="text-sm md:text-md font-semibold text-neutral-500">
                  {t.metricTransports}
                </p>
              </span>
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
              {t.paragraph}
            </p>

            <a
              href="#"
              target="_blank"
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
