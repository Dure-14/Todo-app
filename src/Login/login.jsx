import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const enteremail = ['dure5@gmail.com', 'khadij4@gmail.com'];
  const enterpassword = ['1425', '1999'];

  useEffect(() => {
    localStorage.setItem('enteremail', JSON.stringify(enteremail));
    localStorage.setItem('enterpassword', JSON.stringify(enterpassword));
  }, []);

  const onLogin = () => {
    const givenemail = JSON.parse(localStorage.getItem('enteremail')) || [];
    const givepassword = JSON.parse(localStorage.getItem('enterpassword')) || [];

    if (givenemail.includes(email) && givepassword.includes(password)) {
      localStorage.setItem('isLoggedin', 'true');
      navigate('/front'); 
    } else {
      alert('Email or password is incorrect');
    }
  };

  return (
    <div className="container">
      <div className="logo"></div>
      <div className="customer">
        <h1>CUSTOMER LOGIN</h1>
      </div>
      <center>
        <div className="page2">
          <input
            type="email"
            placeholder="E-mail address"
            className="label1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="label2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="button" className="Submit" onClick={onLogin}>LOGIN</button>
          <br />
        </div>
      </center>
    </div>
  );
};

export default Login;
