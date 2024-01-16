import React from 'react'
import transition from '../transition'
import { Link } from 'react-router-dom'

const Work = () => {
  return (
    <section className='work'>
      <sect>
        <img src="/portfolio-img/me 3.webp" alt="3d man" />
        <h1>
          <h2>My work</h2>
          <p>All of these works are a testament to my skills and dedication as a web developer. Each one is a unique piece of art, showcasing my creativity and attention to detail.</p>
        </h1>
      </sect>
      <di>
                <dv>
          <img src="/portfolio-img/box-wine.png" alt="youtub image"/>
          <pl>
            <Link to='https://github.com/Abubeker09/box' target='_blank'>
              <img src="/portfolio-img/coding-icon.png" alt="coding icon" />
            </Link>
            <Link to='https://box-wine.vercel.app' target='_blank'>
              <img src="/portfolio-img/eye.webp" alt="coding icon" />
            </Link>
          </pl>
        </dv>
        <dv>
          <img src="/portfolio-img/youtub.png" alt="youtub image"/>
          <pl>
            <Link to='https://github.com/Abubeker09/onetube' target='_blank'>
              <img src="/portfolio-img/coding-icon.png" alt="coding icon" />
            </Link>
            <Link to='https://onetube.vercel.app' target='_blank'>
              <img src="/portfolio-img/eye.webp" alt="coding icon" />
            </Link>
          </pl>
        </dv>
        <dv>
          <img src="/portfolio-img/moon chat.png" alt="youtub image"/>
          <pl>
            <Link to='https://github.com/Abubeker09/moon-chat' target='_blank'>
              <img src="/portfolio-img/coding-icon.png" alt="coding icon" />
            </Link>
            <Link to='https://moon-chat.vercel.app' target='_blank'>
              <img src="/portfolio-img/eye.webp" alt="coding icon" />
            </Link>
          </pl>
        </dv>
        <dv>
          <img src="/portfolio-img/fire-movie.png" alt="youtub image"/>
          <pl>
            <Link to='https://github.com/Abubeker09/fire-movie' target='_blank'>
              <img src="/portfolio-img/coding-icon.png" alt="coding icon" />
            </Link>
            <Link to='https://fire-movie-omega.vercel.app' target='_blank'>
              <img src="/portfolio-img/eye.webp" alt="coding icon" />
            </Link>
          </pl>
        </dv>
      </di>
    </section>
  )
}

export default transition(Work)