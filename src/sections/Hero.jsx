import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 1.5, duration: 1, ease: "power2.inOut" }
    );
  }, []);
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background" />
      </div>

      <div className="hero-layout">
        {/* Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Façonner
                {/* Développeur */}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imagePath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        {word.text}
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>en Projets Réels</h1>
              <h1>qui Produisent des Résultats</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Salut, je suis Diagui TOUNKARA Codeur créatif, amoureux du clean
              design et du code efficace.
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
      {/* Animated Counter */}
      <AnimatedCounter/>
    </section>
  );
};

export default Hero;
