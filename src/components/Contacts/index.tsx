import { EnvelopeIcon, HouseIcon, PhoneCallIcon } from "@phosphor-icons/react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
import { useLanguage } from "@/hooks/useLanguage"

export const Contacts = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  const { language } = useLanguage()

  return (
    <section className="w-full min-h-[45rem] h-auto bg-white p-8 md:p-16 overflow-hidden" id={`${language === 'pt-BR' ? 'contatos' : 'contact'}`}>
      <div className="container grid grid-cols-6 gap-8 items-center mx-auto">
        <h2 className="col-span-6 w-46 justify-self-center text-2xl text-center text-neutral-500 px-3 py-1">
          {language === 'pt-BR' ? 'Contatos' : 'Contact'}
        </h2>

        <div className="col-span-6 md:col-span-3 flex flex-col gap-2 items-start justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 text-center md:text-start">
            {language === 'pt-BR'
              ? 'Vamos transformar \n sua necessidade em solução!'
              : 'Let’s turn your need into a solution!'}
          </h1>

          <p className="text-sm md:text-md text-center md:text-start">
            {language === 'pt-BR'
              ? 'Se você busca um atendimento ágil, transparente e focado no que realmente importa para você, fale com a gente. Estamos prontos para ouvir, entender e oferecer o que há de melhor em nossos serviços.'
              : 'If you are looking for fast, transparent service focused on what really matters to you, talk to us. We are ready to listen, understand, and provide the best in our services.'}
          </p>

          <div className="w-full grid grid-cols-2 gap-4 mt-8">
            {/* Primeiro card */}
            <div className="col-span-2 md:col-span-1 min-h-72 h-auto p-4 bg-blue-950 rounded-xl flex flex-col justify-center gap-2" data-aos="fade-up" data-aos-duration="3000">
              <div className="flex items-center gap-2">
                <HouseIcon size={42} className="text-white col-span-1" />
                <div className="col-span-3 flex flex-col items-start justify-center mt-2">
                  <h2 className="text-lg text-white font-semibold">{language === 'pt-BR' ? 'Endereço' : 'Address'}</h2>
                  <p className="text-sm text-white">
                    Av. Elias Agostinho, 340, sala 902, Imbetiba <strong> Macaé - RJ</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <EnvelopeIcon size={32} className="text-white col-span-1" />
                <div className="col-span-3 flex flex-col items-start justify-center mt-2">
                  <h2 className="text-lg text-white font-semibold">Email</h2>
                  <a href="mailto:contato@samoffhore.com.br" className="text-sm text-white">
                    contato@samoffhore.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <PhoneCallIcon size={32} className="text-white col-span-1" />
                <div className="col-span-3 flex flex-col items-start justify-center mt-2">
                  <h2 className="text-lg text-white font-semibold">{language === 'pt-BR' ? 'Telefone' : 'Phone'}</h2>
                  <a href="tel:+55229988264" target="_blank" className="text-sm text-white">
                    (22) 99824-8264
                  </a>
                </div>
              </div>
            </div>

            {/* Segundo card */}
            <div className="col-span-2 md:col-span-1 h-72 p-4 bg-blue-950 rounded-xl flex flex-col justify-center gap-2" data-aos="fade-down" data-aos-duration="3000">
              <div className="flex items-center gap-2">
                <HouseIcon size={42} className="text-white col-span-1" />
                <div className="col-span-3 flex flex-col items-start justify-center mt-2">
                  <h2 className="text-lg text-white font-semibold">{language === 'pt-BR' ? 'Endereço' : 'Address'}</h2>
                  <p className="text-sm text-white">
                    Rua Bar de Barcelos, 302, Centro <strong>São João da Barra - RJ</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <EnvelopeIcon size={32} className="text-white col-span-1" />
                <div className="col-span-3 flex flex-col items-start justify-center mt-2">
                  <h2 className="text-lg text-white font-semibold">Email</h2>
                  <a href="mailto:contato@samoffhore.com.br" className="text-sm text-white">
                    contato@samoffhore.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <PhoneCallIcon size={32} className="text-white col-span-1" />
                <div className="col-span-3 flex flex-col items-start justify-center mt-2">
                  <h2 className="text-lg text-white font-semibold">{language === 'pt-BR' ? 'Telefone' : 'Phone'}</h2>
                  <a href="tel:+5522999021986" target="_blank" className="text-sm text-white">
                    (22) 99902-1986
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <form className="col-span-6 md:col-span-3 space-y-3 md:p-6 " data-aos="zoom-in" data-aos-duration="3000">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4 text-center md-text-start">
            {language === 'pt-BR' ? 'Entre em contato conosco' : 'Get in touch with us'}
          </h1>

          <div className="flex flex-col w-full items-start justify-center gap-3">
            <Label>{language === 'pt-BR' ? 'Nome:' : 'Name:'}</Label>
            <Input placeholder={language === 'pt-BR' ? 'Digite seu nome' : 'Enter your name'} className="w-full bg-neutral-50 shadow-lg p-5" />
          </div>

          <div className="flex flex-col w-full items-start justify-center gap-3">
            <Label>Email:</Label>
            <Input type="email" placeholder={language === 'pt-BR' ? 'Digite seu email' : 'Enter your email'} className="w-full bg-neutral-50 shadow-lg p-5" />
          </div>

          <div className="flex flex-col w-full items-start justify-center gap-3">
            <Label>{language === 'pt-BR' ? 'Telefone:' : 'Phone:'}</Label>
            <Input type="tel" placeholder={language === 'pt-BR' ? 'Digite seu telefone' : 'Enter your phone'} className="w-full bg-neutral-50 shadow-lg p-5" />
          </div>

          <div className="flex flex-col w-full items-start justify-center gap-3">
            <Label>{language === 'pt-BR' ? 'Mensagem:' : 'Message:'}</Label>
            <Textarea placeholder={language === 'pt-BR' ? 'Digite sua dúvida' : 'Type your message'} className="w-full h-28 bg-neutral-50 shadow-lg p-5" />
          </div>

          <Button className="w-42 bg-blue-950 text-white font-semibold text-lg py-7 mt-4">
            {language === 'pt-BR' ? 'Enviar' : 'Send'}
          </Button>
        </form>
      </div>
    </section>
  )
}


