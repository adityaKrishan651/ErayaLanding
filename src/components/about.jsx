import React from "react";

export const About = (props) => {
  return (
    <div data-aos="zoom-out-up" id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p style={{color: "black"}}>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <p style={{color: "black"}}>{props.data ? props.data.paragraph2 : "loading..."}</p>
              <p style={{color: "black"}}>{props.data ? props.data.paragraph3 : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
