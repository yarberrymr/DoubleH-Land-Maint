import React, { useState, useEffect } from "react";
import SkidSteer from "./images/SkidSteer.png";
import Attch1 from "./images/Attch1.png";
import Attch2 from "./images/Attch2.png";
import Base from "./images/Base.jpg";
import Base2 from "./images/Base2.jpg";
import Bucket from "./images/Bucket.jpg";
import Demo from "./images/Demo.jpg";
import Shred from "./images/Shred.jpg";


export default function Body() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);

  return (
  <div>
    <div className="row d-flex justify-content-center body-div">
      <div className=" description-card card text-center">
        <div className="card-header">What do we do?</div>
        <div className="card-body">
          <h5 className="card-title">As the name suggests, we can perform various land maintenance</h5>
          <ul className=" no-styling card-text">
            <li>Lot Clearing</li>
            <li>Lot Leveling</li>
            <li>Underbrush Shredding</li>
            <li>Base Driveway Repair</li>
            <li>And More!!!</li>
          </ul>
        </div>
      </div>
      </div>
      <div className={`${isMobile? 'column' : 'row'} picturesss d-flex justify-content-center body-div`}>
      <div
        id="carouselExampleCaptions1"
        className="col-6 carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions1"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions1"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions1"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions1"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={SkidSteer} className="d-block" alt="SkidSteer with attachments" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="transparent-bg">Skid Steer</h5>
              <p className="transparent-bg">
                Has multiple attachments that can be used for various work.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Attch1} className="d-block " alt="SkidSteer shredder attachment"></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="transparent-bg">Shredder Attachment</h5>
              <p className="transparent-bg">
                This can shred up to 2"-3" of grass or underbrush.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Attch2} className="d-block " alt="SkidSteer rock grapple bucket"></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="transparent-bg">Rock Grapple Bucket</h5>
              <p className="transparent-bg">
                This can carry cut brush, helps in demo clean up, and sifts rock and dirt.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Bucket} className="d-block " alt="SkidSteer large bucket"></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="transparent-bg">Skid Steer Bucket</h5>
              <p className="transparent-bg">
                Large skid steer bucket with teeth welded to bottom (not pictured) for easy clean up of land.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions1"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions1"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        id="carouselExampleCaptions"
        className="col-6 carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Demo} className="d-block " alt="Lot cleared after demolition" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="transparent-bg">After house demo</h5>
              <p className="transparent-bg">
                Lot cleared by skid steer after house demolition.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Base} className="d-block " alt="spillway cleanout"></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="transparent-bg">Spillway cleanout #1</h5>
              <p className="transparent-bg">
                Cleaned out spillway of tank and dug down deeper with skid steer.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Base2} className="d-block " alt="spillway cleanout"></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="transparent-bg">Spillway cleanout #2</h5>
              <p className="transparent-bg">
              Cleaned out spillway of tank and dug down deeper with skid steer.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Shred} className="d-block " alt="Lot shredding after"></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="transparent-bg">Lot shredding</h5>
              <p className="transparent-bg">
              After picture of lot shredded with skid steer and shredding attachment.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
}
