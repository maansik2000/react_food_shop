import React from "react";
import Row from "react-bootstrap/esm/Row";
import partnersLogo from "../utils/PartnersName.js";

function Partner() {
  return (
    <div className="partners">
      <h1>Our Partners</h1>
      <Row xs={1} s={3} md={2} lg={5} className="partners-logo">
        {partnersLogo.map((logo) => (
          <div className="logo" key={logo.key}>
            {console.log(logo.url)}
            <img
              src={logo.url}
              className="logo-Image img-fluid"
              alt="logoimgae"
            />
          </div>
        ))}
      </Row>
    </div>
  );
}

export default Partner;
