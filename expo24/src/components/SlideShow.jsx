import React from "react";
import slideCSS from "../styles/SlideShow.module.css";
import Voorbeeld from "../assets/react.svg";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Slideshow = () => {
  return (
    <>
    <Splide 
        aria-label="Activities" 
        options={{
          type: 'loop',
          perPage: 4,
          perMove: 1,
          pagination: false,
          swipe: true,
          drag: true,
          focus: 'left',
          breakpoints: {
            640: {
              perPage: 1,
            },
            925: {
              perPage: 2,
            },
            1024: {
              perPage: 3,
            },
            1200: {
              perPage: 4,
            },
          },
        }}
      >
    <SplideSlide>
      <div className={slideCSS.tile}>
        <Link to="/Activities">
          <div className={slideCSS.imageContainer}>
            <img
              src={Voorbeeld}
              alt="Project Background"
              className={slideCSS.backgroundImage}
            />
            <div className={slideCSS.glassPanel}>
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  className={slideCSS.glass}
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
          <div className={slideCSS.infoBox}>
            <p className={slideCSS.infoText}>WORKSHOPS</p>
          </div>
        </Link>
      </div>
      </SplideSlide>

      <SplideSlide>
      <div className={slideCSS.tile}>
        <div className={slideCSS.imageContainer}>
          <img
            src={Voorbeeld}
            alt="Project Background"
            className={slideCSS.backgroundImage}
          />
          <div className={slideCSS.glassPanel}>
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                className={slideCSS.glass}
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
        <div className={slideCSS.infoBox}>
          <p className={slideCSS.infoText}>ETEN EN DRINKEN</p>
        </div>
      </div>
      </SplideSlide>

      <SplideSlide>
      <div className={slideCSS.tile}>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfzePgKhlMeJRjyRnlr-gOlAmdLpUHmD7mprBsdGJmGeBcg4Q/viewform"
        >
          <div className={slideCSS.imageContainer}>
            <img
              src={Voorbeeld}
              alt="Project Background"
              className={slideCSS.backgroundImage}
            />
            <div className={slideCSS.glassPanel}>
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  className={slideCSS.glass}
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
          <div className={slideCSS.infoBox}>
            <p className={slideCSS.infoText}>BARBECUE</p>
          </div>
        </a>
      </div>
      </SplideSlide>

      <SplideSlide>
      <div className={slideCSS.tile}>
        <div className={slideCSS.imageContainer}>
          <img
            src={Voorbeeld}
            alt="Project Background"
            className={slideCSS.backgroundImage}
          />
          <div className={slideCSS.glassPanel}>
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                className={slideCSS.glass}
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
        <div className={slideCSS.infoBox}>
          <p className={slideCSS.infoText}>AWARD SHOW</p>
        </div>
      </div>
      </SplideSlide>

      <SplideSlide>
      <div className={slideCSS.tile}>
        <Link to="/Activities">
          <div className={slideCSS.imageContainer}>
            <img
              src={Voorbeeld}
              alt="Project Background"
              className={slideCSS.backgroundImage}
            />
            <div className={slideCSS.glassPanel}>
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  className={slideCSS.glass}
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
          <div className={slideCSS.infoBox}>
            <p className={slideCSS.infoText}>EINDWERKEN</p>
          </div>
        </Link>
      </div>
      </SplideSlide>

      <SplideSlide>
      <div className={slideCSS.tile}>
        <div className={slideCSS.imageContainer}>
          <img
            src={Voorbeeld}
            alt="Project Background"
            className={slideCSS.backgroundImage}
          />
          <div className={slideCSS.glassPanel}>
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                className={slideCSS.glass}
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
        <div className={slideCSS.infoBox}>
          <p className={slideCSS.infoText}>CONTACTEN LEGGEN</p>
        </div>
      </div>
      </SplideSlide>

      <SplideSlide>
      <div className={slideCSS.tile}>
        <a
          target="_blank"
          href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-creatieve-technologie"
        >
          <div className={slideCSS.imageContainer}>
            <img
              src={Voorbeeld}
              alt="Project Background"
              className={slideCSS.backgroundImage}
            />
            <div className={slideCSS.glassPanel}>
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  className={slideCSS.glass}
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
          <div className={slideCSS.infoBox}>
            <p className={slideCSS.infoText}>OPLEIDING: MCT</p>
          </div>
        </a>
      </div>
      </SplideSlide>
      </Splide>
      </>
  );
};

export default Slideshow;
