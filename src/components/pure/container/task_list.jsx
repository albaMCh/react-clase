import React, { useState, useEffect } from "react";
import { Task } from "../../../models/task.class";
import { LEVELS } from "../../../models/levels.enum";
import TaskComponent from "../forms/task";

// Importamos la hoja de estilos de task.scss
import "../../../styles/task.scss";
import Taskform from "../forms/taskForm";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "example1",
    "Default description1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "example2",
    "Default description2",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "example3",
    "Default description3",
    false,
    LEVELS.BLOCKING
  );
  // estado del componente
  const [tasks, setTasks] = useState(defaultTask1, defaultTask2, defaultTask3);
  const [loading, setLoading] = useState(true);
  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task Satet has been modified");
    setLoading(false);
    return () => {
      console.log("TaskLists component is going to unmount...");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("TODO: cambiar estado de una tarea");
  };

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card Header (title)*/}
          <div className="card-header p-3">
            <h5>Your Task:</h5>
          </div>
          {/* Card Body (content)*/}
          <div
            className="card-body"
            data-mbd-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((Task, index) => {
                  return (
                    <TaskComponent key={index} task={Task}></TaskComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Taskform></Taskform>
        </div>
      </div>
    </div>
  );
};

export default TaskListComponent;
