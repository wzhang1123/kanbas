import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "./index.css";
import { FaChevronRight } from "react-icons/fa";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <h4 id="breadcrumb">
        <HiMiniBars3 color="red" className="fs-3" />{" "}
        <span className="red-text left-padding">
          Course {course?.name} <FaChevronRight color="gray" className="fs-6" />{" "}
        </span>
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route
            path="Home"
            element={<span className="left-padding">Home</span>}
          />
          <Route
            path="Modules"
            element={<span className="left-padding">Modules</span>}
          />
          <Route
            path="Piazza"
            element={<span className="left-padding">Piazza</span>}
          />
          <Route
            path="Assignments"
            element={<span className="left-padding">Assignments</span>}
          />
          <Route
            path="Assignments/:assignmentId"
            element={<span className="left-padding">Assignment Editor</span>}
          />
          <Route path="Grades" element={<span>Grades</span>} />
        </Routes>
      </h4>
      <hr className="mid-padding" />

      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "80px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />

            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
