import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const styleHander =({isActive})=> {
        return{
            textDecoration:'none',
            fontWeight:isActive?'bold':'normal'
        }
    }

  return (
    <div className='navbar' >
        <NavLink style={styleHander} to={'/'} >Create</NavLink>
    </div>
  )
}

export default Header