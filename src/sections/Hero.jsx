import React, { useEffect } from "react";
import AOS from "aos";

export const Hero = () => {
  const features = [
    {
      icon: "fa-hand",
      title: "Real-Time Detection",
      description: "Instantly translates the ASL alphabet using your webcam.",
    },
    {
      icon: "fa-brain",
      title: "Smart Recognition",
      description: "Powered by MediaPipe’s advanced hand-tracking technology.",
    },
    {
      icon: "fa-users",
      title: "Inclusive Design",
      description: "Built for the Deaf and Hard of Hearing community.",
    },
  ];

  return (
    <section
      id="hero"
      className="hero-section position-relative overflow-hidden"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 d-flex flex-column text-center">
            <div className="d-flex justify-content-center align-items-center gap-2 bg-light rounded max-width-fit p-2 small mx-auto mb-5">
              <i class="fa-solid fa-circle-info"></i>
              Created by a HOH/Deaf individual
            </div>
            <h1 className="d-flex flex-column mb-5">
              Real-Time <span>Sign Language Recognition</span>
            </h1>
            <button
              type="button"
              class="btn btn-light py-2 px-4 max-width-fit mx-auto"
            >
              Demo Now
            </button>
          </div>
        </div>

        <div className="row justify-content-center gap-4 mt-5">
          {features.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="col-12 col-md-3 card p-3 d-flex justify-content-center align-items-center"
            >
              <div className="d-flex">
                <div className="mb-3 rounded-circle border-1 border-primary">
                  <i className={`fa-solid ${icon} fa-2x text-ligh`}></i>
                </div>
                <div className="d-flex flex-column ms-3">
                  <h5 className="fw-bold">{title}</h5>
                  <p className="text-muted mb-0">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
