import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './component/Header';
import CreatePost from './component/CreatePost';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<CreatePost />}/>
      </Routes>
    </div>
  );
}

export default App;
