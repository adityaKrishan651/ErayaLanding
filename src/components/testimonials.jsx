import React from "react";

export const Testimonials = (props) => {
  let descriptionText = props.text;
  
  return (
    <div data-aos="zoom-in" id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Insight from the Eraya family</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p className="testimonial-text" >{d.text.length < 200 ? d.text : d.text.slice(0, 200)+"..."}</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                      <div className="testimonial-position"> {d.position}</div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
