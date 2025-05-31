import Logo from "./sections/Logo"
import NavBar from "./components/NavBar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowCase from "./sections/ShowCase"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero/>
      <ShowCase />
      <Logo />
      <FeatureCards />
    </>
  )
}

export default App
