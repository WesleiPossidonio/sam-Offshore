import { Check } from "lucide-react";

interface AboutServicesProps {
  img: string;
  title: string;
  description: string;
  listServices?: string[]
}

export const About = ({ description, img, title, listServices }: AboutServicesProps) => {
  return (
    <section className="w-full min-h-[40rem] h-auto">
      <div className="container mx-auto p-6 md:p-16 grid grid-cols-2 gap-8">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl text-neutral-700 font-semibold">{title}</h1>
          <p className="text-neutral-600 text-sm md:text-lg">{description}</p>

          <ul>
            {listServices?.map((service, index) => (
              <li key={index} className="text-neutral-600 text-sm md:text-md mt-2 flex items-center gap-2">
                <Check />  {service}
              </li>
            ))}
          </ul>
        </div>
        <img src={img} className="w-full col-span-2 md:col-span-1 object-center 
          rounded-2xl shadow-lg" alt="imagem serviço" loading="lazy" />
      </div>
    </section>
  )
}


