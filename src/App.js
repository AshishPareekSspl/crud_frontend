import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './component/Header';
import CreatePost from './component/CreatePost';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/' element={<CreatePost />}/>
      </Routes>

    </div>
  );
}

export default App;
