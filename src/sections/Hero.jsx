import { Link } from "react-router-dom";

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
    <section id="hero" className="position-relative overflow-hidden">
      <div className="container position-relative">
        <div className="dots top-left position-absolute"></div>
        <div className="dots bottom-right position-absolute"></div>
        <div className="row justify-content-center">
          <div className="col-12 d-flex flex-column text-center">
            <div className="d-flex justify-content-center align-items-center gap-2 bg-light rounded max-width-fit p-2 small mx-auto mb-5">
              <i class="fa-solid fa-circle-info"></i>
              Created by a HOH/Deaf individual
            </div>
            <h1 className="h1 d-flex flex-column mb-5">
              Real-Time <span>ASL Alphabet Recognition</span>
            </h1>
            <div className="d-flex gap-3 mx-auto">
              <Link
                to="/call"
                type="button"
                class="btn btn-light py-2 px-4 max-width-fit"
              >
                Demo Now
              </Link>
              <button
                type="button"
                class="btn btn-dark py-2 px-4 max-width-fit"
              >
                Ultimate Goal
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center gap-4 mt-5">
          {features.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="col-12 col-md-3 d-flex flex-column align-items-center"
            >
              <div className="card p-3 d-flex flex-column align-items-center text-center w-100">
                <div className="d-flex align-items-center mb-3">
                  <i className={`fa-solid ${icon} fs-4`}></i>
                </div>
                <h5 className="fw-bold">{title}</h5>
                <p className="text-muted mb-0">{description}</p>
              </div>
              <div className="triangle-dots mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
