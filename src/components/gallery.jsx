// import { Image } from "./image";
import { Carousel } from "./carousel";
import React from "react";

export const Gallery = (props) => {
  // const instagramRedirect = () => {
  //   window.open("https://www.instagram.com/eraya_foundation/", "_blank");
  // };
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Campaign Showcase</h2>
        </div>
      {/* <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: 10}}> */}
        {/* <div style={{padding: 5}}> */}
          <Carousel data={props.data.PeriodPositive} title="Period Positive" description="The Eraya Foundation has conducted many engaging educational program for underprivileged children, focusing on important topics like menstrual health. Through fun games and interactive sessions, the children were taught about periods in a comfortable and age-appropriate manner. The children not only gained valuable knowledge in a fun and inclusive environment but also received free healthcare products. The initiative aimed to break taboos, promote awareness, and ensure these young minds have access to essential knowledge, fostering a healthier and more informed future." />
          <Carousel data={props.data.HappySmiles} title="Happy Smiles" description="The Happy Smiles initiative has successfully conducted dental camps and dental care counseling sessions to educate children about the importance of oral hygiene. Through engaging activities and interactive learning, we teach kids essential dental care practices in a fun and memorable way. These camps provide valuable information and resources, empowering children to develop healthy habits that last a lifetime. Together, we’re creating brighter smiles and healthier futures!" />
        {/* </div> */}
        {/* <div style={{padding: 5}}> */}
          <Carousel data={props.data.EducateToEmpower} title="Educate To Empower" description="The Educate to Empower initiative has transformed the lives of over 500 students through focused counseling on various educational topics. By guiding them in career exploration and personal development  , we empower students to realize their potential and inspire positive change in their communities."/>
          <Carousel data={props.data.GiftOfHope} title="Gift of Hope" description="a series of successful distribution drives aimed at supporting underserved communities. These initiatives provided essential items such as food, clothing, and educational materials to hundreds of families in need. Our dedicated volunteers worked diligently to organize and distribute resources, fostering a sense of community and support." />
        {/* </div> */}
      {/* </div> */}
        {/* <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    onClick={instagramRedirect}
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                      description={d.description}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div> */}
      </div>
    </div>
  );
};
