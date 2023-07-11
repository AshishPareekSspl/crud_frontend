import React from "react"

const ShowTable = ({ allPosts }) => {
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
          {allPosts?.map((post, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{post.title}</td>
                <td>{post.date}</td>
                <td>
                  <i className="fa-solid fa-trash"></i>
                  <> </>
                  <i className="fa-solid fa-pen-to-square"></i>
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
