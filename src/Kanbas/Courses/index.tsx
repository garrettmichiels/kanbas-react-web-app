import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Breadcrumbs from "./Breadcrumbs";
import Modules from "./Modules";
import Assignments from "./Assignments";
import Home from "./Home";
import { FaGlasses } from "react-icons/fa";
import ListButtons from "./Modules/ListButtons";

function Courses() {
  const { courseId } = useParams();

  const course = courses.find((course) => course._id === courseId);

  const currentLocation = "test";
  return (
    <div className="d-flex flex-column">
      <div className="d-none d-md-block">
        <h2 style={{ color: "red" }}>
          <HiMiniBars3 style={{ color: "red" }} /> <Breadcrumbs />
        </h2>
        <div className=" position-absolute top-0 end-0">
          <button
            type="button"
            className="float-end btn btn-primary"
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              backgroundColor: "rgba(104, 100, 100, 0.573)",
              border: "none",
              color: "black",
            }}>
            <FaGlasses /> Student View
          </button>
        </div>
        <br></br>
      </div>
      
      <br></br>
      <br></br>
      
      <div className="flex-column">
      <CourseNavigation />
      <div className="d-flex">
      
      <br></br>
      <hr style={{"marginTop": "30", "marginBottom": "30"}}/>
        <div
          className=" position-absolute bottom-0 end-0"
          style={{ left: "320px", top: "50px" }}
        >
          <ListButtons />
          <br></br>
          <hr style={{"marginTop": "30", "marginBottom": "30"}}/>
          
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
    </div>
  );
}

export default Courses;
