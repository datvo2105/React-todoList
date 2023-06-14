import React, { useState } from "react";

function AddTask(props) {
  const [newTask, setNewTask] = useState("");

  const addTask = props.addTaskFunc;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask != "") {
      addTask(newTask);
      setNewTask("");
      e.target.reset();
    }
  };

  const styleAddTask = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",

    borderBottom: "4px solid #ddd",
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      style={styleAddTask}
    >
      <input
        style={{
          flex: 1,
          padding: "5px 10px",
          fontSize: "20px",
          fontWeight: 600,
        }}
        placeholder="task..."
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <input
        style={{
          padding: "5px 20px",
          fontSize: "24px",
          fontWeight: 600,
        }}
        type="submit"
        value="Add"
      />
    </form>
  );
}

export default AddTask;
