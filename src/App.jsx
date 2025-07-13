import { Routes, Route } from 'react-router-dom';
import Login from './Login/login';
import Front from './Front/front';
import Edit from './Edit/Edit';
import Add from './Add/add';
import Complete from './Complete/complete';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/front" element={<Front />} />
        <Route path="/edit/:id" element={<Edit />} />  
        <Route path="/add" element={<Add />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </>
  );
}

export default App;
