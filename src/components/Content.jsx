import React from "react";
import award from "../asserts/1.png";
import ceremony from "../asserts/2.png";

const Content = () => {
  return (
    <div className="content">
      <div className="contentItem1">
        <img src={award} alt="award" />
      </div>
      <div className="contentItem2">
        <h5>
          C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h5>
        <ul>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            ESSL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 star rated eneregy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <img src={ceremony} alt="award" />
        <p>
          Government of India has awarded the{" "}
          <span>"National Energy Conservation award 2018"</span>. Mr. G.
          Selvaraj, Joint Managing Director of C.R.I. Group received the award
          from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
          Singh, Honorable Minister of State
        </p>
      </div>
    </div>
  );
};

export default Content;
