import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const ShowCase = () => {
  //  Let's create animation for the section
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      // Create a staggered animation for each project card
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left section */}
          <div className="first-project-wrapper" ref={project1Ref}>
            {/* Image wrapper */}
            <div className="image-wrapper">
              <img
                src="/images/track.png"
                alt="Fund wise est application mobile de gestion de finances personelles"
                title="Fund Wise - Application mobile de gestion de fonds"
              />
            </div>
            <div className="text-content">
              {/* Project title */}
              <h2>Application mobile de gestion de fonds</h2>
              {/* Simple description */}
              <p>
                Fund Wise{" "}
                <a
                  href="https://drive.google.com/file/d/1QkyOasaG0PQIyb9GnrViGxs8hxPB2dcj/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline-none"
                >
                  Telecharger
                </a>{" "}
                est une application mobile de gestion de fonds qui permet aux
                utilisateurs de suivre leurs dépenses, d'analyser leurs
                habitudes financières et de planifier leur budget de manière
                efficace.{" "}
                <a
                  href="https://github.com/tounkaradiagui/Track_Finances"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline-none"
                >
                  Voir le projet sur GitHub
                </a>
              </p>
            </div>
          </div>
          {/* Right section */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#f5f5f5]">
                <img
                  src="/images/popular product.png"
                  alt="Diagui Shop - Application e-commerce de vêtements, chaussures et appareils électroniques
                   avec une interface utilisateur élégante et une expérience d'achat fluide."
                  title="Diagui Shop"
                />
              </div>
              <h2>Diagui Shop Web App</h2>
              <p>
                <a
                  href="https://github.com/tounkaradiagui/diagui_shop-mobile-version"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline-none"
                >
                  Voir le projet sur GitHub
                </a>
              </p>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/images/projet_wagadu.png"
                  alt="Système de Gestion Scolaire avec Suivi des Absences et des Présences pour les Écoles primaire et secondaire"
                  title="Tableau de bord administrateur"
                />
              </div>
              <h2>Projet de gestion des absences.</h2>
              <p>
                <a
                  href="https://wagadu-initial-stage.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline-none"
                >
                  Voir le projet en ligne
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
