import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"

const CreatePost = () => {
  const navigate = useNavigate()
  const formRef = useRef(null)
  const { id } = useParams()
  const [postData, setPostData] = useState({
    title:"",
    date: "",
    image: "",
  })

  const fetchApi = async()=>{
    const result = await axios.get(`http://localhost:6500/api/get-update-post/${id}`)
    setPostData({title:result.data.data.title,date:result.data.data.date})
  }
   
  useEffect(()=>{
    if (id) {
       fetchApi()
    }
  },[])

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
    formData.append("title", postData.title)
    formData.append("date", postData.date)
    formData.append("image", postData.image)

    if (postData.title && postData.date && postData.image) {
      if (!id) {
        axios
          .post("http://localhost:6500/api/create-post", formData)
          .then((res) => {
            if (res.data.success) {
              formRef.current.reset()
              toast.success("Post Added Successfully")
              setPostData({ title: "", date: "", image: "" })
              navigate("/show-table")
            }
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        formData.append("id",id)
        axios
          .post("http://localhost:6500/api/update-post", formData)
          .then((res) => {
            if (res.data.success) {
              formRef.current.reset()
              toast.success("Post Updated Successfully")
              setPostData({ title: "", date: "", image: "" })
              navigate("/show-table")
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    } else {
      toast.error("All flieds are required")
    }
  }

  return (
    <div className="createPostContainer">
      <div className="createPost">
        <h1>{id ? "Edit Post" : "Create A New Post"}</h1>
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
          <button onClick={submitHamdler}>{id ? "Update" : "Submit"}</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
