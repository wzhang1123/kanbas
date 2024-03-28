import React, { useState } from "react";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";

  const [module, setModule] = useState({
    id: 4550,
    name: "Web Development",
    description: "Learn about web development",
    course: "CS4550",
  });
  const MODULE_URL = "http://localhost:4000/a5/module";
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>Update Title</a>
      <input
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />
      <br />
      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>Update Score</a>
      <input
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.valueAsNumber })
        }
        value={assignment.score}
      />
      <br />
      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <input
        type="checkbox"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
        value={assignment.completed.toString()}
      />
      <br />

      <a href={`${MODULE_URL}/name/${module.name}`}>Update Name</a>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}
      />

      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment">Get Assignment</a>
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title">Get Title</a>
      <a href="http://localhost:4000/a5/module/name">Get Module Name</a>
    </div>
  );
}
export default WorkingWithObjects;
