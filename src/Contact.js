import React from "react";

export default function contact() {
  return (
    <div id="contact" className="row d-flex justify-content-center">
        <hr className="contact-header"></hr>
        <h2>Contact us for a free quote!</h2>
      <div className="row d-flex justify-content-center">
        <div className="contact-card card text-center">
          <div className="card-body">
            <h5 className="card-title">Lloyd Hood</h5>
            <p className="card-text">
              Lloyd owns and operates the equipment.
            </p>
            <a href="tel:+1-254-449-1362" className="btn btn-primary">Click to Call Lloyd</a>
            <p>(254)-449-1362</p>
          </div>
        </div>
        <div className="contact-card card text-center">
          <div className="card-body">
            <h5 className="card-title">Office</h5>
            <p className="card-text">
              Can't get ahold of Lloyd, try calling the office!
            </p>
            <a href="tel:+1-254-449-1324" className="btn btn-primary">Click to Call Office</a>
            <p>(254)-449-1324</p>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="contact-card card text-center email-card">
          <div className="card-body">
            <h5 className="card-title">Business Email</h5>
            <p className="card-text">
              Emails go straight to the business and will be responded to asap.
            </p>
            <a href="mailto:doublehlandmaintenance@gmail.com" className="btn btn-primary">
              Send an Email
            </a>
            <p>doublehlandmaintenance@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
