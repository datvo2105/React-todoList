import React, { Fragment, useEffect, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import axios from "axios";

function TasksList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=7"
        );
        setList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);
  const styleList = {
    listStyle: "none",

    fontSize: "24px",
    fontWeight: 600,
  };

  const checkDone = (id) => {
    const newList = list.map((task) => {
      if (task.id == id) task.completed = !task.completed;
      return task;
    });
    setList(newList);
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const newList = list.filter((task) => task.id != id);
      setList(newList);
    } catch (error) {
      console.log();
    }
  };

  const addTask = async (value) => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title: value,
          completed: false,
        }
      );
      const newList = [...list, res.data];
      setList(newList);
    } catch (error) {
      console.log();
    }
  };
  return (
    <Fragment>
      <AddTask addTaskFunc={addTask} />
      <ul style={styleList}>
        {list.map((task) => {
          return (
            <Task
              key={task.id}
              taskProps={task}
              checkDoneFunc={checkDone}
              deleteTaskFunc={deleteTask}
            />
          );
        })}
      </ul>
    </Fragment>
  );
}

export default TasksList;
