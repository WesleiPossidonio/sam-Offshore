import { BrowserRouter } from "react-router-dom"
import { Footer, Header } from "./components"

import { Router } from "./Routes/Routes"
import { AppProvider } from "./context"

function App() {

  return (
    <BrowserRouter>
      <AppProvider>
        <main className="w-full relative">
          <Header />
          <Router />
          <Footer />
        </main>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
