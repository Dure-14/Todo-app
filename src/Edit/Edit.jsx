import React, { useState, useEffect } from 'react';
import './Edit.css';  
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(t => t.id === parseInt(id));
    if (task) {
      setTitle(task.title);
      setDetail(task.detail);
    }
  }, [id]);

  const handleUpdate = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updated = tasks.map(t => t.id === parseInt(id) ? { ...t, title, detail } : t);
    localStorage.setItem('tasks', JSON.stringify(updated));
    navigate('/front');
  };

  return (
    <div>
      <div className="main">
        <h1 onClick={() => navigate('/front')}>
          <IoArrowBack className='H1-main' /> Edit Task
        </h1>
      </div>
      <div className="tide">
        <input
          type="text"
          placeholder="Title"
          className="label1"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Detail"
          className="label2"
          value={detail}
          onChange={e => setDetail(e.target.value)}
        />
        <div className="btns">
          <button className="add" onClick={handleUpdate}>Update</button>
          <button className="add" onClick={() => navigate('/front')}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
