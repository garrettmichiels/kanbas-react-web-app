import CourseStatus from "../Modules/CourseStatus";
import ModuleList from "../Modules/List";


function Home() {
  return (
    <div>
        <div className="float-end me-2 d-none d-xl-block ms-2">
        <CourseStatus />
        </div>
      <ModuleList />
      <h2>Status</h2>
    </div>
  );
}
export default Home;