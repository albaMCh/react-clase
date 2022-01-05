import React, { useState, useEffect } from "react";
import { Task } from "../../../models/task.class";
import { LEVELS } from "../../../models/levels.enum";
import TaskComponent from "../forms/task";

// Importamos la hoja de estilos de task.scss
import "../../../styles/task.scss";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "example",
    "Default description",
    false,
    LEVELS.NORMAL
  );
  // estado del componente
  const [tasks, setsTacks] = useState(defaultTask);
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
      <div>
        <h1>Your Task:</h1>
      </div>
      {/* TODO: Aplicra un FOr/Map para renderizar un a lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
