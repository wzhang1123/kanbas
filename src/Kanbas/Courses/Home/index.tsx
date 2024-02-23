import ModuleList from "../Modules/List";
import Status from "./Status";
import "./index.css";
import { FaEllipsisV } from "react-icons/fa";

function Home() {
  return (
    <div className="row">
      <div className="col">
        <table align="right">
          <tr>
            <td>
              <button className="module-button bg-color-lightgrey">
                Collapse All
              </button>
            </td>
            <td>
              <button className="module-button bg-color-lightgrey">
                View Progress
              </button>
            </td>
            <td>
              <select
                name="module-option"
                id=""
                className="module-button bg-color-lightgrey"
              >
                <option value="PUBLISH-ALL">Publish All</option>
              </select>
            </td>
            <td>
              <button className="module-button bg-color-red fg-color-white">
                + Module
              </button>
            </td>
            <td>
              <button className="module-button bg-color-lightgrey">
                <FaEllipsisV />
              </button>
            </td>
          </tr>
        </table>
        <br />
        <br />
        <hr />
        <ModuleList />
      </div>
      <div className="col-auto">
        <Status />
      </div>{" "}
    </div>
  );
}

export default Home;
