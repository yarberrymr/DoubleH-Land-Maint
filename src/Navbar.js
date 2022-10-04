import React from "react";

export default function navbar() {
  return (
    <div>
      <h2>Double H Land Maintenance and More</h2>
      <button onClick={() => window.location.replace("/#contact")} type="button" className="btn btn-link">
        Contact Us
      </button>
    </div>
  );
}
