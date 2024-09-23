import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 className="goal-title">Our Goals</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i class={d.icon}></i>
                  <h3 style={{fontWeight: "bold"}}>{d.title}</h3>
                  <p style={{  color: "black"}}>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
