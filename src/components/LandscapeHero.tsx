import React, { useEffect, useState } from 'react';

export const LandscapeHero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header home-header" id="welcome">
      <div className="animation--fade header-background">
        {/* Sun */}
        <div
          className="animation--fade-in sun"
          style={{ transform: `translate3d(0, ${offsetY * 0.4}px, 0)` }}
        >
          <img
            src="/images/illustrations/home-header-sun.svg"
            alt="the sun"
          />
        </div>

        {/* Mountains */}
        <div
          className="animation--pop-fade-in nature mountains"
          style={{ transform: `translate3d(0, ${offsetY * 0.3}px, 0)` }}
        >
          <img
            src="/images/illustrations/home-header-montains.svg"
            alt="montains"
          />
        </div>

        {/* Clouds */}
        <div className="animation--pop-in cloud--left clouds">
          <img
            src="/images/illustrations/cloud-left.svg"
            alt="clouds"
          />
        </div>
        <div className="animation--pop-in cloud--left-center clouds">
          <img
            src="/images/illustrations/cloud-left-center.svg"
            alt="clouds"
          />
        </div>
        <div className="animation--pop-in cloud--right-center clouds">
          <img
            src="/images/illustrations/cloud-right-center.svg"
            alt="clouds"
          />
        </div>
        <div className="animation--pop-in cloud--right clouds">
          <img
            src="/images/illustrations/cloud-right.svg"
            alt="clouds"
          />
        </div>

        {/* Fourth Layer of Coding Forest */}
        <div
          className="animation--pop-fade-in nature forest__fourth-line"
          style={{ transform: `translate3d(0, ${offsetY * 0.22}px, 0)` }}
        >
          <img
            src="/images/illustrations/home-header-fourth-forest-layer.svg"
            alt="the fourth layer of the coding forest"
          />
        </div>

        {/* H1 Titles (Sandwiched between Fourth and Third Forest Layers!) */}
        <div
          className="titles"
          style={{ transform: `translate3d(0, ${offsetY * 0.18}px, 0)` }}
        >
          <h1 className="animation--fade-in title--upper">
            web design &amp; <br />
            <span>development</span>
          </h1>
        </div>

        {/* Third Layer of Coding Forest */}
        <div
          className="animation--pop-fade-in nature forest__third-line"
          style={{ transform: `translate3d(0, ${offsetY * 0.12}px, 0)` }}
        >
          <img
            src="/images/illustrations/home-header-third-forest-layer.svg"
            alt="the third layer of the coding forest"
          />
        </div>

        {/* Second Layer of Coding Forest */}
        <div
          className="animation--pop-fade-in nature forest__second-line"
          style={{ transform: `translate3d(0, ${offsetY * 0.08}px, 0)` }}
        >
          <img
            src="/images/illustrations/home-header-second-forest-layer.svg"
            alt="the seconde layer of the coding forest"
          />
        </div>

        {/* Front Layer of Coding Forest */}
        <div
          className="animation--pop-fade-in nature forest__front-line"
          style={{ transform: `translate3d(0, ${offsetY * 0.04}px, 0)` }}
        >
          <img
            src="/images/illustrations/home-header-first-forest-layer.svg"
            alt="first layer of the coding forest"
          />
        </div>
      </div>

      {/* Trees Container framing edges */}
      <div className="container--tree">
        <div className="tree tree--left animation--pop-in">
          <img
            src="/images/illustrations/tree-close-up-light.svg"
            alt="a close up tree of the forest"
          />
        </div>
        <div className="tree tree--left-blur animation--pop-in">
          <img
            src="/images/illustrations/tree-blur-left.png"
            alt="a close up tree of the forest"
          />
        </div>
        <div className="tree tree--right-top animation--pop-in">
          <img
            src="/images/illustrations/tree-close-up-dark.svg"
            alt="a close up tree of the forest"
          />
        </div>
        <div className="tree tree--right-bottom-blur animation--pop-in">
          <img
            src="/images/illustrations/tree-blur-right.png"
            alt="a close up tree of the forest"
          />
        </div>
      </div>
    </header>
  );
};
