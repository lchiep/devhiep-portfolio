import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Projects from "../components/Projects/Projects"
import Skills from "../components/Skills/Skills"
import FloatingContact from "../components/Contact/FloatingContact"
import Footer from "../components/Footer/Footer"
import About from "../components/About/About"
import Timeline from "../components/timeline-temp/Timeline"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <FloatingContact />
      <Footer />
    </>
  )
}

export default Home
