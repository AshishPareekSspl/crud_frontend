import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './component/Header';
import CreatePost from './component/CreatePost';
import { ToastContainer } from 'react-toastify';
import {useQuery} from 'react-query'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './component/Home';
import Post from './component/Post';
import axios from 'axios';
import ShowTable from './component/ShowTable';

function App() {

  const {data, isLoading} = useQuery('allPosts',async ()=>{
    const result = await axios.get('http://localhost:6500/api/get-posts')
    return result.data.data
  })

  return (
    <div className="App">
      <Header />
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/' element={<Home allPosts={data} />}/>
        <Route path='/create-post' element={<CreatePost />}/>
        <Route path='/post:id' element={<Post />}/>
        <Route path='/show-table' element={<ShowTable allPosts={data} />}/>
      </Routes>
    </div>
  );
}

export default App;
