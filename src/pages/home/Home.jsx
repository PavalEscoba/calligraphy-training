import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <h1 className="section-title">List of made tasks:</h1>
      <div className="links-block">
        <div className="links-block__text-wrapper text-success">
          <h3 className="title links-block__title">
            Basic knowledge (functional + class based components)
          </h3>
          <p className="links-block__text">(sections 1-11)</p>
        </div>
        <Link to="/season" className="link text-secondary">
          Season
        </Link>
        <Link to="/pics" className="link text-secondary">
          Pics
        </Link>
        <Link to="/youtube-class" className="link text-secondary">
          Youtube (classes)
        </Link>
      </div>

      <div className="links-block">
        <div className="links-block__text-wrapper text-success">
          <h3 className="title links-block__title">
            React + Hooks (4 widgets + navigation from scratch)
          </h3>
          <p className="links-block__text">(sections 12-13)</p>
        </div>
        <Link to="/widgets" className="link text-secondary">
          Widgets
        </Link>
      </div>

      <div className="links-block">
        <div className="links-block__text-wrapper text-success">
          <h3 className="title links-block__title">
            Youtube task made using hooks (+ customHook)
          </h3>
          <p className="links-block__text">(section 14)</p>
        </div>
        <Link to="/youtube-hooks" className="link text-secondary">
          Youtube (hooks)
        </Link>
      </div>

      <div className="links-block">
        <div className="links-block__text-wrapper text-success">
          <h3 className="title links-block__title">React + Redux </h3>
          <p className="links-block__text">(sections 1-11)</p>
        </div>
        <Link to="/counter" className="link text-secondary">
          Counter
        </Link>
        <Link to="/songs" className="link text-secondary">
          Songs
        </Link>
      </div>

      <div className="links-block">
        <div className="links-block__text-wrapper text-success">
          <h3 className="title links-block__title">Pet project</h3>
          <p className="links-block__text">
            calligraphy training sheets generator
          </p>
        </div>
        <Link to="/calligraphy" className="link text-secondary">
          Calligraphy
        </Link>
      </div>
    </section>
  );
};

export default Home;
