import Logo from "./sections/Logo"
import NavBar from "./components/NavBar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowCase from "./sections/ShowCase"
import Experience from "./sections/Experience"
import TechStack from "./sections/TechStack"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero/>
      <ShowCase />
      <Logo />
      <FeatureCards />
      <Experience />
      <TechStack />
    </>
  )
}

export default App
