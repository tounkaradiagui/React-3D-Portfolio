import Button from "../components/Button"
import HeroExperience from "../components/HeroModels/HeroExperience"
import { words } from "../constants"

const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="Background"/>
        </div>

        <div className='hero-layout'>
            {/* Hero Content */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className="flex flex-col gap-7">
                    <div className='hero-text'>
                        <h4>
                            Shaping
                            {/* Développeur */}
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img src={word.imagePath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                                            {word.text}
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h4>
                        <h1>In to the Real Projects</h1>
                        <h1>That Deliver Results</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                       Salut, je suis Diagui TOUNKARA Codeur créatif, amoureux du clean design et du code efficace.
                    </p>
                    {/* Button component */}
                    <Button
                        className="md:w-80 md-h-16 w-60 h-12"
                        text="Mes Projets"
                        id="button"
                    />
                    
                </div>
            </header>

            {/* Hero Model */}
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience />  
                </div>
            </figure>
        </div>
      
    </section>
  )
}

export default Hero
