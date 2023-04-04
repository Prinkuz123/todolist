import React, { useEffect, useState } from "react";
import "./tdo.css";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

const Todolist = () => {
  const [task, settask] = useState([]);
  useEffect(()=>{
    document.title=`you have${task.length} pending task(s)`
  });
  const addtask=(title)=>{
    const newTask=[...task,{title}]
    settask(newTask)
  }
  const removetask=(index)=>{
    const newTask=[...task]
    newTask.splice(index,1)
    settask(newTask)
  }

  return (
    <div className="todo-container">
      <div className="header">Todo list</div>
      <div className="addtask">
        <AddTask addtask={addtask}/>
      </div>
      <div className="task">
        {task.map((task,index) => (
          <ListTask task={task} removetask={removetask}
          index={index} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
