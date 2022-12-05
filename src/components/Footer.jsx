import React from "react";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <LocalPhoneRoundedIcon />
        Toll free<span>1800 200 1234</span>
      </div>
      <div className="footer-items">
        <FacebookOutlinedIcon />
        www.facebook.com/cripumps
      </div>
      <div className="footer-items">
        <LanguageOutlinedIcon />
        www.crigroups.com
      </div>
    </div>
  );
};

export default Footer;
