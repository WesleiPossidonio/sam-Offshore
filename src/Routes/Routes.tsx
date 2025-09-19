import { Home } from '@/pages'
import { AgenciamentoMarítimo, LogisticaDeTripulacao, MonitoramentoDeEscalas, SuporteLogístico } from '@/pages/ServicesPage'
import { Routes, Route } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/agenciamento-marítimo' element={<AgenciamentoMarítimo />} />
      <Route path='/Assitencia-de-Tripulação' element={<LogisticaDeTripulacao />} />
      <Route path='/Suporte-Logístico' element={<SuporteLogístico />} />
      <Route path='/Monitoramento-de-Escalas' element={<MonitoramentoDeEscalas />} />
      <Route path='/Representacao' element={<MonitoramentoDeEscalas />} />
    </Routes>
  )
}