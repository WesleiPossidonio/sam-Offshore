
interface BannerServiceProps {
  img: string;
  title: string;
  description: string;
}

export const Banner = ({ description, img, title }: BannerServiceProps) => {
  return (
    <section className='w-full min-h-[15rem] md:h-[38rem] bg-center bg-cover bg-no-repeat relative'
      style={{
        backgroundImage: `url(${img})`
      }}>

      <div className="w-full inset-0 bg-black/35 h-full mx-auto px-6 py-25 md:p-16 flex 
        flex-col items-start justify-center gap-2 ">
        <h1 className="text-white text-3xl md:text-5xl font-semibold">{title}</h1>
        <p className="text-white md:text-xl">
          {description} / {' '}
          <a className="font-semibold" href="/">Home</a>
        </p>
      </div>

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L60,197.3C120,203,240,213,360,213.3C480,213,600,203,720,192C840,181,960,
          171,1080,170.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,
          1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,
          120,320,60,320L0,320Z"
        />
      </svg>
    </section>
  )
}


