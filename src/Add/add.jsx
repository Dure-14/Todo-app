import React, { useState } from 'react';
import './add.css';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Add() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDetail, setTaskDetail] = useState('');
  const navigate = useNavigate();

  const saveNewTask = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      detail: taskDetail,
      completed: false,
      date: new Date().toLocaleDateString()
    };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    navigate('/front');
  };

  return (
    <div>
      <div className="main"> 
        <h1 onClick={() => navigate('/front')}><IoArrowBack className="H1-main" /> Add Task</h1> 
      </div>
      <div className="tide"> 
        <center>
          <br />
          <input
            type="text"
            placeholder="Title"
            className="label1" 
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <br /><br />
          <textarea
            placeholder="Detail"
            className="label2"
            value={taskDetail}
            onChange={(e) => setTaskDetail(e.target.value)}
          ></textarea>
          <br /><br />
          <button className="add1" onClick={saveNewTask}>Add</button>
        </center>
      </div>
      <br /><br />
    </div>
  );
}

export default Add;
