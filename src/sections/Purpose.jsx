export const Purpose = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 text-center">
            <h2 className="h1 mb-4">The Ultimate Goal</h2>
            <p className="lead text-muted">
              My vision goes far beyond recognizing hand shapes. MeetAccess aims
              to become a fully accessible, AI-powered interpreter — one that
              understands and translates American Sign Language in real time
              during video calls, interviews, and meetings. Will it be easy?{" "}
              <span className="fw-bold">F*ck no..</span> will I try?{" "}
              <span className="fw-bold">YES.</span> Because we should all be
              heard.
            </p>
          </div>
        </div>

        <div className="row text-center mt-4 position-relative">
          <div
            class="progress timeline-bar position-absolute"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar w-75"></div>
          </div>
          {[
            {
              icon: "fa-solid fa-1",
              title: "Recognize The Alphabet",
              desc: "Simple. Let's just recognize some damn signs. This seems hard enough",
            },
            {
              icon: "fa-solid fa-2",
              title: "Recognize Words",
              desc: "We made it this far. I'm impressed. Let's now recognize words.",
            },
            {
              icon: "fa-solid fa-3",
              title: "Recognize SEE",
              desc: "Signed Exact English. Words put into English sentence structure.",
            },
            {
              icon: "fa-solid fa-4",
              title: "Recognize ASL",
              desc: "Certainly Zoom, etc. has stud engineers working on this. If they havent figured this out. Why should I lol.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="col-12 col-md-3 d-flex flex-column align-items-center mb-5 mb-md-0 px-2 position-relative"
            >
              <div
                className="bg-white border border-3 rounded-circle d-flex justify-content-center align-items-center mb-3"
                style={{ width: "60px", height: "60px", zIndex: 1 }}
              >
                <i className={`fa-solid ${step.icon} fs-3`}></i>
              </div>
              <h6 className="fw-bold">{step.title}</h6>
              <p className="text-muted small mb-0">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
