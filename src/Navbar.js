import React from "react";

export default function navbar() {
  return (
    <div>
      <h2 class="title-header">Double H Land Maintenance and More</h2>
      <button onClick={() => window.location.replace("/#contact")} type="button" className="btn btn-link contact-btn">
        Contact Us
      </button>
    </div>
  );
}
