import React from 'react'
import ReactLogo from '../images/react.svg'
import MUI from '../images/mui.svg'
import ApolloLogo from '../images/apollographql.svg'
import ReactRouter from '../images/reactrouter.svg'
import Redux from '../images/redux.svg'
import StyleComps from '../images/styledcomponents.svg'
import TypeScript from '../images/typescript.svg'
import Formik from '../images/formik.svg'
import styled from 'styled-components';


const Line=styled.div`
position:relative;
display:flex;
flex-direction: row;
justify-content: space-around;

`

const Pic=styled.img`
width:75.55px;
background: #CDCDCD;
color:#CDCDCD;
`

const pix=[ReactLogo,MUI,ApolloLogo,ReactRouter,Redux,StyleComps,TypeScript,Formik]

const images=pix.map((pic,index)=>{
    return <Pic src={pic} alt={pic} key={index}/>
})

function IconsLine() {
  return (
    <Line>{images}</Line>
  )
}

export default IconsLine


// <img src={ReactLogo} width="75.55px" alt={ReactLogo}/>