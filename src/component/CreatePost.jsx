import React, { useState } from "react"

const CreatePost = () => {
 const [postData, setPostData] = useState({
    title: "",
    date: "",
    image:''
 })

 const postHandler = (e) =>{
    const {name,value} = e.target
    setPostData(prev=>({...prev,[name]:value}))
 }

 const imageHandler = (e)=>{
    setPostData(prev=>({...prev, image:e.target.files[0]}))
 }

 const submitHamdler = () =>{
  
 }

  return (
    <div className="createPostContainer">
      <div className="createPost">
        <h1>
            Create a new post
        </h1>
        <div className="postData">
            <input type="text" name="title" onChange={postHandler} value={postData.title} />
            <input type="date" name="date" onChange={postHandler} value={postData.date} />
            <input type="file" name="image" onChange={imageHandler}/>
            <input type="button" value="Submit" onClick={submitHamdler} />
        </div>
      </div>
    </div>
  )
}

export default CreatePost
