import React from "react";
import transition from "../transition";

const AboutMe = () => {
  return (
    <section className="about">
      <h1>
        <h2>
          I am <span>Abuki</span>
        </h2>
        <p>
          I am a self-taught web developer based in Ethiopia with a strong
          knowledge in HTML, CSS, JavaScript, and React. I am a fast learner and
          passionate about creating innovative and user-friendly websites. My
          dedication to continuous learning and staying updated with the latest
          technologies allows me to deliver high-quality results.
        </p>
      </h1>
      <img src="/portfolio-img/me 2.webp" alt="3d man" />
    </section>
  );
};

export default transition(AboutMe);
