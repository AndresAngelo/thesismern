import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Semester from "./pages/Semester/Semester";
import Curriculum from "./pages/Curriculum/Curriculum";
import Profilepage from "./pages/MyProfile/Profilepage";
import Login from "./pages/AccManage/Login";
import Register from "./pages/AccManage/Register";
import Forgot from "./pages/AccManage/Forgot";
import Subjectstab from "./pages/Subjects/Subjectstab";
import axios from "axios";
import { UserContextProvider } from "../context/userContext";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const Main = () => {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Subjects" element={<Subjectstab />} />
          <Route path="/Semester" element={<Semester />} />
          <Route path="/Curriculum" element={<Curriculum />} />
          <Route path="/Profilepage" element={<Profilepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Forgot" element={<Forgot />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
