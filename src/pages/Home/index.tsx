
import { Contacts } from "@/components"
import { About, Adjects, Hero, SectionService } from "./Components"

export const Home = () => {
  return (
    <main className="w-full h-auto ">
      <Hero />
      <About />
      <Adjects />
      <SectionService />
      {/* <CallAction /> */}
      <Contacts />
    </main>
  )
}


