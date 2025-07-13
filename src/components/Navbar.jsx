export const Navbar = () => {
  return (
    <div className="container py-3">
      <div className="row d-flex justify-content-between">
        <div className="col-4">
          <span className="fs-4">MeetAcess</span>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <ul className="d-flex gap-4 list-unstyled mb-0">
            <li>Nav Item</li>
            <li>Nav Item</li>
            <li>Nav Item</li>
          </ul>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center gap-4">
          <button
            type="button"
            className="btn btn-light py-2 px-4 max-width-fit"
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-light py-2 px-4 max-width-fit"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};
