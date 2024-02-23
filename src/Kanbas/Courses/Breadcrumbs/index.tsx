import { Link, useLocation } from "react-router-dom";
import "./index.css";

function Breadcrumbs() {
    const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
    // const currentLocation = "testtestst";
    // const { pathname } = useLocation();
    // if (pathname.includes("Home")) {
    //     const currentLocation = "Home";
    // }
    // else if (pathname.includes("Modules")) {
    //     const currentLocation = "Modules";
    // }  
    // else if (pathname.includes("Piazza")) {
    //     const currentLocation = "Piazza";
    // }
    // else if (pathname.includes("Grades")) {
    //     const currentLocation = "Grades";
    // }
    // else if (pathname.includes("Assignments")) {
    //     const currentLocation = "Assignments";
    // }
    return (
        <nav className="breadcrumbNav" aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={useLocation()}>{}</Link>
                    </li>
                <li className="breadcrumb-item active" aria-current="page">{}</li>
            </ol>
        </nav>
    )
}
export default Breadcrumbs;
