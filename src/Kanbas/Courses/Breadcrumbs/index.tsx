import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";
import { courses } from "../../Database";

function Breadcrumbs() {
    const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
    const { courseId } = useParams();
    const path = useLocation().pathname;
    const currentLocation = links.find((link) => path.includes(link));
    const course = path.includes("Courses") ? courses.find((course) => course._id === courseId) : null;
    
    
    const currentLink = links.find((link) => link === link);

    return (
        <nav className="breadcrumbNav" style={{"marginTop": "15px", "position": "absolute", "display": "inline"}} aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={`/Kanbas/Courses/${course?._id}`} style={{"textDecoration": "none", "color":"red"}}>{course?.name}</Link>
                    </li>
                <li className="breadcrumb-item active" aria-current="page">{<Link to={useLocation()} style={{"textDecoration": "none", "color":"black"}}>{currentLocation}</Link>}</li>
            </ol>
        </nav>
        
    )
}
export default Breadcrumbs;
