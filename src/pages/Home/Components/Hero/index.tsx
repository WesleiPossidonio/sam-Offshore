import Video from '@/assets/VideoHero.mp4'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/useLanguage'
import { heroContent } from '@/utils/texts'

export const Hero = () => {
  const { language } = useLanguage()
  const content = heroContent[language as 'pt-BR' | 'en']

  return (
    <section className="w-full md:min-h-[55rem] h-auto relative overflow-hidden">
      <video className="w-full min-h-[40rem] md:h-[55rem] h-full object-cover" autoPlay loop muted>
        <source src={Video} className="w-full" />
      </video>

      {/* Overlay de texto */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-center text-start px-8 md:px-16 md:-mt-20">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg md:w-2/3">
          {content.title}
        </h1>
        <p className="text-white text-lg md:text-2xl mt-4 max-w-3xl drop-shadow-md">
          {content.description}
        </p>

        <Button className="w-48 h-15 mt-6 text-lg font-semibold bg-blue-950">
          <a href='https://wa.me/5522998248264' target='_blank'>
            {content.button}
          </a>
        </Button>
      </div>

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L60,197.3C120,203,240,213,360,213.3C480,213,600,203,720,192C840,181,960,171,1080,170.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </section>
  )
}
