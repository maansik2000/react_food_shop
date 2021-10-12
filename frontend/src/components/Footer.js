import React from "react";
import footerLink from "../utils/Footer.js";

function Footer() {
  return (
    <div>
      <div className="row footerheading">
        {footerLink.map((link) => (
          <div className="col-md-4 " key={link.key}>
            <h1>{link.header}</h1>
            <div>
              {link.links.map((socialLink, index) => (
                <h6 key={index}>{socialLink}</h6>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
