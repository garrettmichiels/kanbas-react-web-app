function CourseStatus() {
    return (

<div>
        <h3>Course Status</h3>
        <div className="btn-group mb-3" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary" style={{"backgroundColor": 'rgba(104, 100, 100, 0.573)', "border": 'none', "color": 'black' }}>Unpublished</button>
          <button type="button" className="btn btn-primary" style={{"backgroundColor": 'rgba(56, 152, 29, 0.573)', "border": 'none', "color": 'black' }}><i className="fa-regular fa-circle-check"></i>Published</button>
        </div> 
        <ul className="list-group">
          <li
            className="list-group-item"
            style={{"backgroundColor": "rgba(104, 100, 100, 0.573)"}}
          >
            <a href="#" className="gm-side-button"
              ><i className="fa-solid fa-file-import pe-2"></i>Import Existing
              Content</a>
          </li>
          <li
            className="list-group-item"
            style={{"backgroundColor": "rgba(104, 100, 100, 0.573)"}}
          >
            <a href="#" className="gm-side-button"
              ><i className="fa-solid fa-file-import pe-2"></i>Import From Commons</a>
          </li>
          <li
            className="list-group-item"
            style={{"backgroundColor": "rgba(104, 100, 100, 0.573)"}}
          >
            <a href="#" className="gm-side-button"
              ><i className="fa-solid fa-house pe-2"></i>Choose Home Page</a>
          </li>
          <li
            className="list-group-item"
            style={{"backgroundColor": "rgba(104, 100, 100, 0.573)"}}
          >
            <a href="#" className="gm-side-button"
              ><i className="fa-solid fa-chart-simple pe-2"></i>View Course Stream</a>
          </li>
          <li
            className="list-group-item"
            style={{"backgroundColor": "rgba(104, 100, 100, 0.573)"}}
          >
            <a href="#" className="gm-side-button"
              ><i className="fa-solid fa-bullhorn pe-2"></i>New Announcement</a>
          </li>
          <li
            className="list-group-item"
            style={{"backgroundColor": "rgba(104, 100, 100, 0.573)"}}
          >
            <a href="#" className="gm-side-button"
              ><i className="fa-solid fa-chart-simple pe-2"></i>New Analytics</a>
          </li>
          <li
            className="list-group-item"
            style={{"backgroundColor": "rgba(104, 100, 100, 0.573)"}}
          >
            <a href="#" className="gm-side-button"
              ><i className="fa-regular fa-bell pe-2"></i>View Course Notifications</a>
          </li>
        </ul>
        <h3>Coming Up</h3>
        <a href="#" className="d-sm-inline-block">View Calendar</a>
        <hr />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
          </li>
          <li className="list-group-item">
            <a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
          </li>
          <li className="list-group-item">
            <a href="#">CS5620 06 SP23 Lecture Sep 11 at 6pm</a>
          </li>
        </ul>
        </div>
    );
}
export default CourseStatus;