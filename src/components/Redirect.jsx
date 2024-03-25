import { Link } from "react-router-dom";

const Redirect = () => {
  return (
    <div className="container mt-5 text-center bg-light p-5 rounded">
      <h1>You are not authorized</h1>
      <Link to="/" className="btn btn-dark">
        Login
      </Link>
    </div>
  );
};

export default Redirect;
