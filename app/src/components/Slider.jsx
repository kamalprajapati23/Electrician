import React, { useEffect } from "react";
import EL1 from "../assets/EL1.jpg";
import EL2 from "../assets/EL2.jpg";
import EL3 from "../assets/EL3.jpg";
import EL4 from "../assets/EL4.jpg";

function Slider() {
  // ✅ Image array
  const sliderImages = [EL1, EL2, EL3, EL4];

  // ✅ Bootstrap auto slide setup
  useEffect(() => {
    const el = document.querySelector("#electricianCarousel");
    if (window.bootstrap && el) {
      new window.bootstrap.Carousel(el, {
        interval: 2000,
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    }
  }, []);

  return (
    <div
      id="electricianCarousel"
      className="carousel slide shadow-lg rounded"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#electricianCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner rounded">
        {sliderImages.map((img, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
              src={img}
              className="d-block w-100 custom-slide-img"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#electricianCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#electricianCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
