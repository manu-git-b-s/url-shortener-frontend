import Navbar from "../components/Navbar.jsx";

const Dashboard = ({ user }) => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-5">
        Welcome to dashboard {user.firstName + " " + user.lastName}
      </h1>
    </div>
  );
};

export default Dashboard;
