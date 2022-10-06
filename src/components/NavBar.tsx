import { Link } from  'react-router-dom';
import React from 'react'
import { NavWrapper,Button } from '../styles/stylesSC'




const NavBar = () => {
  return (

    <NavWrapper>
      <Link to="/"><Button >Home</Button></Link>
      <Link to="/form"><Button >Forms</Button></Link>
      <Link to="/lists"><Button >Lists</Button></Link>
    </NavWrapper>
  )
}

export default NavBar