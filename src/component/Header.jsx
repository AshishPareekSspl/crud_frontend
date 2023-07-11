import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const styleHander =({isActive})=> {
        return{
            textDecoration:'none',
            fontWeight:isActive?'bold':'normal',
            marginLeft:"5px",
            color:'black'
        }
    }

  return (
    <div className='navbar' >
        <NavLink style={styleHander} to={'/'} >Home</NavLink>
        <NavLink style={styleHander} to={'/create-post'} >Create</NavLink>
        <NavLink style={styleHander} to={'/show-table'} >All_Posts</NavLink>
    </div>
  )
}

export default Header