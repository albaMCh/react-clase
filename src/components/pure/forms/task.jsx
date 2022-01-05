import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../../models/task.class";
//Importarmos la hoja de estilo de task.css
import "../../../models/task.class";
import { LEVELS } from "../../../models/levels.enum";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("Created Task");
    return () => {
      console.log("Task: ${task.name} is going to unmount");
    };
  }, [task]);

  /**
   * Function that returno a Badge
   * depending on the level of the task
   */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );

      default:
        break;
    }
  }

  function taskCompletedIcons() {
    if (task.completed) {
      return <i className="bi-toggle-on" style={{ color: "green" }}></i>;
    } else {
      return <i className="bi-toggle-off" style={{ color: "grey" }}></i>;
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
        {/* Execution of function to return badge element */}
        {taskLevelBadge()}
      </td>
      <td className="align-middle">
        {taskCompletedIcons()}

        <i
          className="bi-trash"
          style={{ color: "tomato", fontSize: "20px" }}
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
