import { useSelector } from "react-redux";
import Navbar from "../components/Navbar.jsx";
import Redirect from "../components/Redirect.jsx";

const Dashboard = () => {
  const { firstName, lastName, token } = useSelector(
    (state) => state.auth.user
  );

  const username = firstName + " " + lastName;

  return (
    <div>
      {token ? (
        <>
          <Navbar />
          <h1 className="text-center mt-5">Welcome to dashboard {username}</h1>
        </>
      ) : (
        <Redirect />
      )}
    </div>
  );
};

export default Dashboard;
