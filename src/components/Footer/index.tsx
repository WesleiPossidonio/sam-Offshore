import Logo from '@/assets/sam_offshore_transparente.png'
import {

  WhatsappLogoIcon
} from '@phosphor-icons/react'
import { useLanguage } from '@/hooks/useLanguage'

export const Footer = () => {
  const { language } = useLanguage()
  const isPT = language === 'pt-BR'

  return (
    <footer className="w-full relative min-h-64 h-auto flex flex-col items-center justify-center bg-white border-t-2 pt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-12 p-8 md:px-16 items-start">
        <div className="col-span-1 md:col-span-2 space-y-2 order-4 md:order-1 mt-5 md:mt-0">
          <img src={Logo} className="w-36" alt="Logo" />
          <p className="text-sm text-neutral-500">
            {isPT
              ? 'A SAM Offshore atua com comprometimento e excelência em soluções para o setor marítimo e industrial.'
              : 'SAM Offshore operates with commitment and excellence in maritime and industrial solutions.'}
          </p>

        </div>

        <div className="col-span-1 flex flex-col items-start justify-center">
          <h1 className="text-xl font-semibold">{isPT ? 'Navegação' : 'Navigation'}</h1>
          <div className="w-full flex flex-col items-start justify-center gap-1 mt-2">
            <a href="#" className="font-semibold text-neutral-700">{isPT ? 'Home' : 'Home'}</a>
            <a href={isPT ? '#sobre-nos' : '#about-us'} className="font-semibold text-neutral-700">{isPT ? 'Sobre Nós' : 'About Us'}</a>
            <a href={isPT ? '#servicos' : 'services'} className="font-semibold text-neutral-700">{isPT ? 'Serviços' : 'Services'}</a>
            <a href={isPT ? '#contatos' : '#contact'} className="font-semibold text-neutral-700">{isPT ? 'Contatos' : 'Contact'}</a>
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-start justify-center gap-1">
          <h1 className="text-xl font-semibold">{isPT ? 'Contatos' : 'Contacts'}</h1>
          <a href="mailto:contato@Samoffhore.com.br">
            Email: contato@Samoffhore.com.br
          </a>

          <div className="flex items-center justify-start gap-1">
            <WhatsappLogoIcon size={22} />
            <a href="https://wa.me/5522998248264" className="text-sm" target="_blank" rel="noopener noreferrer">
              (22) 99824-8264
            </a>
          </div>

          <div className="flex items-center justify-start gap-1">
            <WhatsappLogoIcon size={22} />
            <a href="https://wa.me/5522999021986" className="text-sm" target="_blank" rel="noopener noreferrer">
              (22) 99902-1986
            </a>
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-start justify-center gap-2">
          <h1 className="text-xl font-semibold">{isPT ? 'Endereço' : 'Address'}</h1>

          <div>
            <p className="font-semibold text-neutral-700">Macaé RJ</p>
            <p className="text-sm text-neutral-700">
              {isPT
                ? 'Av. Elias Agostinho, 340, sala 902, Imbertiba, Macaé-RJ'
                : 'Av. Elias Agostinho, 340, room 902, Imbertiba, Macaé-RJ'}
            </p>
          </div>

          <div>
            <p className="font-semibold text-neutral-700">São João da Barra RJ</p>
            <p className="text-sm text-neutral-700">
              {isPT
                ? 'Rua Bar de Barcelos, 302, Centro, São João da Barra-RJ'
                : 'Rua Bar de Barcelos, 302, Downtown, São João da Barra-RJ'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
