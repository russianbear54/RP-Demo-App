import React from 'react'
import styled from 'styled-components';



const Wrapper=styled.section`
margin-left: auto;
margin-right: auto;
margin-top: 66.29px;
margin-bottom: 107.42px;
display: flex;
flex-direction: row;
justify-content: space-between;
width:563.8px;
`

const Button=styled.button`
font-family: 'Oranienbaum';
font-style: normal;
font-weight: 400;
font-size: 30.6068px;
line-height: 35px;
color: black;
width: 160.22px;
height: 61.58px;
left: 678.1px;
top: 69.29px;
background: white;
border:none;

:focus{
  background-color: #000000;
  color: #FFFFFF;
  border-radius: 14px;

}
`




const NavBar = () => {
  return (

    <Wrapper>
        <Button >Home</Button>
        <Button >Forms</Button>
        <Button >Lists</Button>
    </Wrapper>
  )
}

export default NavBar