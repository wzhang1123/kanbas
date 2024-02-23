import ModuleList from "../Modules/List";
import "./index.css";
import "../../../libs/bootstrap/bootstrap.min.css";

function Home() {
  return (
    <div className="d-flex">
      <div>
        {" "}
        <ModuleList />
      </div>

      <div className="flex-grow-0 me-2 d-none d-lg-block width-250">
        <table>
          <tr>
            <td>
              <button className="module-button bg-color-lightgrey">
                <i className="fa fa-ban"></i> Unpublish
              </button>
            </td>
            <td>
              <button className="module-button bg-color-lightgreen fg-color-white">
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                Published
              </button>
            </td>
          </tr>
        </table>
        <br />
        <button className="module-button bg-color-lightgrey width-230 button-left">
          <i className="fa fa-file-o"></i> Import Existing Content
        </button>
        <br />
        <button className="module-button bg-color-lightgrey width-230 button-left">
          <i className="fa fa-share-square-o" aria-hidden="true"></i>
          Import from Commons
        </button>
        <br />
        <button className="module-button bg-color-lightgrey width-230 button-left">
          <i className="fa fa-bullseye" aria-hidden="true"></i>
          Choose Home Page
        </button>
        <br />
        <button className="module-button bg-color-lightgrey width-230 button-left">
          <i className="fa fa-bar-chart" aria-hidden="true"></i> View Course
          Stream
        </button>
        <br />
        <button className="module-button bg-color-lightgrey width-230 button-left">
          <i className="fa fa-bullhorn" aria-hidden="true"></i> New Announcement
        </button>
        <br />
        <button className="module-button bg-color-lightgrey width-230 button-left">
          <i className="fa fa-bar-chart" aria-hidden="true"></i> New Analytics
        </button>
        <br />
        <button className="module-button bg-color-lightgrey width-230 button-left">
          <i className="fa fa-bell-o" aria-hidden="true"></i> View Course
          Notifications
        </button>
        <br />
        <br />
        <table className="width: 100%">
          <tbody>
            <tr>
              <td>Coming Up</td>
              <td>
                <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                <a href="#" className="fg-color-red">
                  View Calendar
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div className="col width-300">
          <div className="border-0">
            <div className="card-body">
              <a
                className="card-title"
                id="todo-item"
                href="/Kanbas/Courses/Home/screen.html"
              >
                Lecture
              </a>

              <p className="card-text">CS4550.12631.202410</p>
              <p className="card-text">Sep 11 at 11:45am</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
