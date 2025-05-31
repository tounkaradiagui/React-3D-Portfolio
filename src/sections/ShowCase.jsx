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
        }
    );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
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
                alt="Mon Projet"
                title="Fund Wise - Application mobile de gestion de fonds"
              />
            </div>
            <div className="text-content">
              {/* Project title */}
              <h2>Application mobile de gestion de fonds</h2>
              {/* Simple description */}
              <p>
                Fund Wise est une application mobile de gestion de fonds qui
                permet aux utilisateurs de suivre leurs dépenses, d'analyser
                leurs habitudes financières et de planifier leur budget de manière
                efficace.
              </p>
            </div>
          </div>
          {/* Right section */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#f5f5f5]">
                <img
                  src="/images/popular product.png"
                  alt="Diagui Shop Web App"
                  title="Diagui Shop"
                />
              </div>
              <h2>Diagui Shop Web App</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/images/dashboard.png"
                  alt="Dashboard Admin"
                  title="Admin Dashborad View"
                />
              </div>
              <h2>
                Projet de gestion des absences
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
