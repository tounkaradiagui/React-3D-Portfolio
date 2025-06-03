import React, { useRef } from "react";

const GlowCard = ({ card, children, index }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    // Get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // Calculate the angle of the mouse position
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // Normalize angle to be between 0 and 360 degrees
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  }; 
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5"
    > 
      <div className="glow" />
      <div className="flex items-center gap-2" mb-3>
        {Array.from({ length: 5 }, (_, index) => (
          <img
            src="/images/star.png"
            key={index}
            alt="star"
            className="size-5"
          />
        ))}
      </div>
      <div className="mb-3">
        <p className="text-white-50 text-lg mt-2">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
