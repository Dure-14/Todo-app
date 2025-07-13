import React, { useState, useEffect } from 'react';
import './Complete.css';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Complete() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(saved.filter(t => t.completed));
  }, []);

  return (
    <>
      <div>
        <div className="box">
          <h1 onClick={() => navigate('/front')}><IoArrowBack className='H1-main' /> Complete</h1>
        </div>

        {tasks.map(task => (
          <div className="bg1" key={task.id}>
            <div className="title">
              {task.title}
              <div className="text">
                <div className="icons1">
                  {task.detail}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Complete;
