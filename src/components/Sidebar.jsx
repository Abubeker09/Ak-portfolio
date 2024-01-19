import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  // const TWITTER_USERNAME = process.env.REACT_APP_TWITTER_USERNAME
  // const WHATSAPP_USERNAME = process.env.REACT_APP_WHATSAPP_USERNAME
  // const LINKEDIN_USERNAME = process.env.REACT_APP_LINKEDIN_USERNAME
  // const GITHUB_USERNAME = process.env.REACT_APP_GITHUB_USERNAME

  const path = useLocation().pathname;

  // abubekerBe78818

  return (
    <aside>
      <section>
        <img
          className="logo"
          src="/portfolio-img/logo-removebg-preview.png"
          alt="logo"
          width={100}
          height={100}
        />
        <ul>
          <Link to="https://twiter.com/abubekerBe78818" target="_blank">
            <li>
              <img
                src="/portfolio-img/twitter.png"
                alt="twitter"
                width={25}
                height={25}
              />
            </li>
          </Link>
          <Link
            to={`https://api.whatsapp.com/send?phone=${+251979794557}`}
            target="_blank"
          >
            <li>
              <img
                src="/portfolio-img/whatsapp (1).png"
                alt="twitter"
                width={25}
                height={25}
              />
            </li>
          </Link>
          <Link
            to="https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav"
            target="_blank"
          >
            <li>
              <img
                src="/portfolio-img/linkedin.png"
                alt="twitter"
                width={25}
                height={25}
              />
            </li>
          </Link>
          <Link to={`https://github.com/abubeker09`} target="_blank">
            <li>
              <img
                src="/portfolio-img/github-removebg-preview.png"
                alt="twitter"
                width={55}
                height={30}
              />
            </li>
          </Link>
        </ul>
      </section>
      <div className="explore">
        <h1>Explore</h1>
        <Link to={"/"}>
          <button className={path === "/" ? "activ" : ""}>
            <img
              src="/portfolio-img/home.png"
              alt="home img"
              width={30}
              height={30}
            />{" "}
            Home
          </button>
        </Link>
        <Link to={"/work"}>
          <button className={path === "/work" ? "activ" : ""}>
            <img
              src="/portfolio-img/project.png"
              alt="home img"
              style={{
                width: 50,
                height: 30,
                marginLeft: "-.5em",
                marginRight: "-.7em",
              }}
            />{" "}
            My Work
          </button>
        </Link>
        <Link to={"/about"}>
          <button className={path === "/about" ? "activ" : ""}>
            <img
              src="/portfolio-img/me.png"
              alt="home img"
              width={30}
              height={30}
            />{" "}
            About Me
          </button>
        </Link>
        <Link to={"/contact"}>
          <button className={path === "/contact" ? "activ" : ""}>
            <img
              src="/portfolio-img/contact.png"
              alt="home img"
              width={30}
              height={30}
            />{" "}
            Contact Me
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
