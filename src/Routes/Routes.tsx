import { Home } from '@/pages'
import { ApoioMultissetorial, CoordenaçãoOperacionalPortuária, DespachoMaritimo, LogisticaDeTripulacao } from '@/pages/ServicesPage'
import { Routes, Route } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/despacho-maritimo' element={<DespachoMaritimo />} />
      <Route path='/Logística-de-Operacional' element={<LogisticaDeTripulacao />} />
      <Route path='/Coordenação-Operacional-Portuária' element={<CoordenaçãoOperacionalPortuária />} />
      <Route path='/Apoio-Multissetorial' element={<ApoioMultissetorial />} />
    </Routes>
  )
}