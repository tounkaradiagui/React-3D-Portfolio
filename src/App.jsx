import Logo from "./sections/Logo"
import NavBar from "./components/NavBar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowCase from "./sections/ShowCase"
import Experience from "./sections/Experience"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero/>
      <ShowCase />
      <Logo />
      <FeatureCards />
      <Experience />
    </>
  )
}

export default App
