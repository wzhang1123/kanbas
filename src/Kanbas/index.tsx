import { Link } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import "./index.css";

function Kanbas() {
  return (
    <div className="d-flex nav-bar">
      <div className="kanbas-nav">
        <KanbasNavigation />
      </div>
      <div style={{ flexGrow: 1 }} className="kanbas-content">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}

export default Kanbas;
