import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactUs from "../../pages/ContactUs/ContactUs";
import "./Optin.css";

class Optin extends Component {
  modal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("is_open");
  }

  render() {
    return (
      <div className="optin">
        <p style={{color: "black"}}>CLICK BELOW TO CONTACT US</p>
        {/* Use Link component instead of button */}
        <Link to="/ContactUS">
          <button style={{color: "black"}}>CLICK</button>
        </Link>
        <div id="modal">
          <div className="wrapper">
            <h3>Enter Your Email</h3>
            <div className="clearfix">
              <div className="col-8" />
              <div className="col-3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Optin;
