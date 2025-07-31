import { Home } from '@/pages'
import { DespachoMaritimo } from '@/pages/ServicesPage'
import { Routes, Route } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/despacho-maritimo' element={<DespachoMaritimo />} />
      <Route path='/Logística-de-Tripulação' element={<DespachoMaritimo />} />
      <Route path='/Coordenação-Operacional-Portuária' element={<DespachoMaritimo />} />
      <Route path='/Apoio-Multissetorial' element={<DespachoMaritimo />} />
    </Routes>
  )
}