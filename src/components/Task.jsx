import React from "react";

function Task(props) {
  const task = props.taskProps;
  const checkDone = props.checkDoneFunc;
  const deleteTask = props.deleteTaskFunc;

  const styleTask = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    margin: "15px 0",
    marginLeft: "20px",
  };

  const statusTitle = {
    textDecoration: task.completed ? "line-through" : "none",
  };

  const styleBtn = {
    marginRight: "20px",
    padding: "5px 10px",
    backgroundColor: "red",

    border: "none",
    borderRadius: "20px",

    fontSize: "24px",
    fontWeight: 600,
    color: "#fff",

    cursor: "pointer",
  };

  return (
    <li style={styleTask}>
      <input
        type="checkbox"
        style={{
          marginRight: "10px",
          cursor: "pointer",
          width: "20px",
          height: "20px",
        }}
        onChange={() => checkDone(task.id)}
        checked={task.completed}
      />
      <span style={statusTitle}>{task.title}</span>
      <button
        className="submit"
        style={styleBtn}
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Task;
