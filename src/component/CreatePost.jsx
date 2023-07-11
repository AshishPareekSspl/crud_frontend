import React, { useRef, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

const CreatePost = () => { 
  const formRef = useRef(null)
  const [postData, setPostData] = useState({
    title: "",
    date: "",
    image: "",
  })

  const postHandler = (e) => {
    const { name, value } = e.target
    setPostData((prev) => ({ ...prev, [name]: value }))
  }

  const imageHandler = (e) => {
    setPostData((prev) => ({ ...prev, image: e.target.files[0] }))
  }

  const submitHamdler = (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append("title",postData.title)
    formData.append("date",postData.date)
    formData.append("image",postData.image)

    if (postData.title&&postData.date&&postData.image) {
      axios.post("http://localhost:6500/api/create-post",formData).then((res)=>{
        console.log(res.data);
        if (res.data.success) {
          formRef.current.reset()
          toast.success("Post Added successfully")
          setPostData({title:"",date:"",image:""})
        }
      })
    }else{
      toast.error("All flieds are required")
    }

  }

  return (
    <div className="createPostContainer">
      <div className="createPost">
        <h1>Create A New Post</h1>
        <form className="postDataForm" ref={formRef}>
          <input
          placeholder="Title"
            type="text"
            name="title"
            onChange={postHandler}
            value={postData.title}
            required
          />
          <input
            type="date"
            name="date"
            onChange={postHandler}
            value={postData.date}
            required
          />
          <input type="file" name="image" onChange={imageHandler} required />
          <button onClick={submitHamdler} >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
