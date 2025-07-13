import React, { useState, useEffect } from "react";
import './front.css';
import { SlCalender } from "react-icons/sl";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Front = () => {
  const [tasks, updateTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tasks')) || [];
    updateTasks(stored);
  }, []);

  const deleteTask = (id) => {
    const filtered = tasks.filter(t => t.id !== id);
    updateTasks(filtered);
    localStorage.setItem('tasks', JSON.stringify(filtered));
  };

  const completeTask = (id) => {
    const modified = tasks.map(t =>
      t.id === id ? { ...t, completed: true } : t
    );
    updateTasks(modified);
    localStorage.setItem('tasks', JSON.stringify(modified));
  };

  const latestDate = tasks.length > 0 ? tasks[tasks.length - 1].date : "";

  return (
    <>
      <div className="box">
        <div className="todo">
          <p className="td">TODO TASK</p>
          <SlCalender />
          {latestDate && <span>{latestDate}</span>}
        </div>
      </div>

      <div className="bg">
        <br /><br />
        {tasks.filter(t => !t.completed).map(task => (
          <div className="task-container" key={task.id}>
            <div className="task-title">{task.title}</div>
            <div className="task-subtitle">
              <div className="icons1">
                {task.detail}
                <div className="ico">
                  <FaPen onClick={() => navigate(`/edit/${task.id}`)} />
                  <RiDeleteBin5Line onClick={() => deleteTask(task.id)} />
                  <SiTicktick onClick={() => completeTask(task.id)} />
                </div>
              </div>
            </div>
          </div>
        ))}

        <br />

        <div className="end" onClick={() => navigate('/add')}>
          <CiCirclePlus />
        </div>
      </div>

      <div className="last">
        <p onClick={() => navigate('/')}><CiCircleList /><br />ALL</p>
        <p onClick={() => navigate('/complete')}><TiTick /><br />Completed</p>
      </div>

      <br /><br /><br />
    </>
  );
};

export default Front;
