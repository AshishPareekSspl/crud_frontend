import React from "react"
import axios from "axios"
import { toast } from "react-toastify";
import {useQuery} from 'react-query'
import { useNavigate } from "react-router-dom";

const ShowTable = () => {
  const navigate = useNavigate()
  const {data, isLoading} = useQuery('allPosts',async ()=>{
    const result = await axios.get('http://localhost:6500/api/get-posts')
    return result.data.data
  })

  const deleteHandler = (id) =>{
    if(window.confirm("Are you sure want to delete ?")){
      axios.get(`http://localhost:6500/api/delete-post/${id}`).then((result)=>{
        if(result.data.success){
          toast.success("Deleted Successfully")
        }
      })
    }
  }

  const editHandler = (id)=>{
    navigate(`/edit-post/${id}`)
  }

  return (
    <div className="showTableContainer">
      <table className="postTable">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((post, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{post.title}</td>
                <td>{post.date}</td>
                <td>
                  <i onClick={()=>deleteHandler(post._id)} className="fa-solid fa-trash"></i>
                  <> </>
                  <i onClick={()=>editHandler(post._id)} className="fa-solid fa-pen-to-square"></i>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ShowTable
