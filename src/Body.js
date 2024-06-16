import React, { useState, useEffect } from "react";
// import SkidSteer from "./images/SkidSteer.webp";
// import Attch1 from "./images/Attch1.webp";
// import Attch2 from "./images/Attch2.webp";
let base = "https://i.postimg.cc/XvyrGKX2/Base.webp";
// import Base from "./images/Base.webp";
let base2 = "https://i.postimg.cc/ZRtCr9dJ/Base2.webp";
// import Base2 from "./images/Base2.webp";
// import Bucket from "./images/Bucket.webp";
let demo = "https://i.postimg.cc/fLck5wcm/Demo.webp";
// import Demo from "./images/Demo.webp";
let shred = "https://i.postimg.cc/6pP7pb62/Shred.webp";
// import Shred from "./images/Shred.webp";


export default function Body() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);

  return (
  <div class="body-div">
    <div className="row d-flex justify-content-center body-div solid-spacing">
        <div className=" description-card card text-center">
          <div className="card-header">Who are we?</div>
          <div className="card-body">
            <h5 className="card-title">My name is Lloyd, and I bring over a decade of experience in operating both small and heavy equipment</h5>
            <ul className=" no-styling card-text list-margin">
              <li>Since 2014, I have managed a wide range of machinery and currently own a skid steer with various attachments and welding equipment. For projects requiring additional equipment, I am able to rent what is needed.</li>
            </ul>
          </div>
        </div>
        <div className=" description-card card text-center">
          <div className="card-header">What do we do?</div>
          <div className="card-body">
            <h5 className="card-title">We specialize in a wide range of land maintenance services tailored to meet your specific needs.</h5>
            <div className="double-list">
              <ul className=" no-styling card-text">
                <li>Lot Clearing/Leveling</li>
                <li>Gravel/Base Work</li>
                <li>Brush Work (Piling)</li>
                <li>Debris Removal/Demo Work</li>
              </ul>
              <ul className=" no-styling card-text">
                <li>Welding</li>
                <li>Dirt Work</li>
                <li>Culvert Pipe Installation</li>
                <li>Shredding (Up to 4" Cedar)</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
      <div className={`${isMobile? 'column' : 'row'} picturesss d-flex justify-content-center body-div`}>
      {/* <div
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
      </div> */}
      <div
        id="carouselExampleCaptions"
        className="col-6 carousel slide"
        data-ride="false"
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
            <img src={demo} className="d-block " alt="Lot cleared after demolition" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="transparent-bg">After house demo</h5>
              <p className="transparent-bg">
                Lot cleared by skid steer after house demolition.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={base} className="d-block " alt="spillway cleanout"></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="transparent-bg">Spillway cleanout #1</h5>
              <p className="transparent-bg">
                Cleaned out spillway of tank and dug down deeper with skid steer.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={base2} className="d-block " alt="spillway cleanout"></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="transparent-bg">Spillway cleanout #2</h5>
              <p className="transparent-bg">
              Cleaned out spillway of tank and dug down deeper with skid steer.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={shred} className="d-block " alt="Lot shredding after"></img>
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
