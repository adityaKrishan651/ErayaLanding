import React, { useEffect } from "react";
import "./carousel.css";

export const Carousel = (props) => {

  const instagramRedirect = () => {
    window.open('https://www.instagram.com/eraya_foundation/', '_blank');
  }

  return (
    <div data-aos={props.animation}>
      <div className="custom-container">
        <div className="custom-grid-wrapper">
          <div className="custom-centered-content custom-bg-light">
            <div className="custom-text-container">
              <header>
                <h2 className="custom-title">{props.title}</h2>
                <p className="custom-description" style={{color: "black"}}>{props.description}</p>
              </header>
              <a onClick={instagramRedirect} href="" className="custom-button">
                View All
              </a>
            </div>
          </div>

          <div className="custom-gallery">
            <ul className="custom-image-grid">
              {props.data
                ? props.data.map((d, i) => (
                    <li key={`${d.title}-${i}`}>
                      <a href="#" className="custom-image-link">
                        <img
                          src={d.largeImage}
                          alt={d.title}
                          className="custom-gallery-img"
                        />
                      </a>
                    </li>
                  ))
                : "Loading..."}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};