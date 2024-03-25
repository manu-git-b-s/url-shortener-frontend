import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateUrl from "./pages/CreateUrl";
import AllUrl from "./pages/AllUrl";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route index path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/create-url" element={<CreateUrl user={user} />} />
        <Route path="/all-url" element={<AllUrl user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
