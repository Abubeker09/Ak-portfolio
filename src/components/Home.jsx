import React from "react";
import transition from "../transition";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <header>
        <h1>
          Hi this is <span>Abuki</span>
        </h1>
        <p>and i am a Front-end React developer 😎</p>
        <head>
          <button>
            <img src="/portfolio-img/html.png" alt="html" />
          </button>
          <button>
            <img src="/portfolio-img/css.png" alt="css" />
          </button>
          <button>
            <img src="/portfolio-img/js.png" alt="js" />
          </button>
          <button>
            <img src="/portfolio-img/react.png" alt="react" />
          </button>
          <button>
            <img src="/portfolio-img/tailwind.png" alt="tailwind" />
          </button>
          <button>
            <img src="/portfolio-img/git-icon.png" alt="git" />
          </button>
          <button>
            <img src="/portfolio-img/next.js.png" alt="next.js" />
          </button>
        </head>
          <h2>
            <Link to="/work">
              <p>Project</p>
            </Link>
          </h2>
      </header>
      <div>
        <img src="/portfolio-img/world-removebg-preview.png" alt="background" />
        <img src="/portfolio-img/3D profile.webp" alt="3d man" />
      </div>
    </section>
  );
};

export default transition(Home);
