import Careers from "./components/Careers"
import Guides from "./components/Guides"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {
  return(
    <>
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Guides />
      <Careers />
    </div>
    </>
  )
}

export default App
