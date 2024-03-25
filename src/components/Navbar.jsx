import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../redux/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          DashBoard
          <i className="ms-2 fa-solid fa-house"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="link" to="/create-url">
              <a className="nav-link text-dark" aria-current="page" href="#">
                Create Short URL
              </a>
            </Link>
            <Link className="link" to="/all-url">
              <a className="nav-link text-dark" aria-current="page" href="#">
                All Url
              </a>
            </Link>
            <Link className="link" to="/" onClick={() => dispatch(setUser({}))}>
              <a className="nav-link text-dark" aria-current="page" href="#">
                Logout
                <i className="ms-2 fa-solid fa-right-from-bracket"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
