import Careers from "./components/Careers"
import Footer from "./components/Footer"
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
      <Footer />
    </div>
    </>
  )
}

export default App
