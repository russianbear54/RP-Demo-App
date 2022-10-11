import React from 'react'
import ReactLogo from '../images/ToolsIcons/react.svg'
import MUI from '../images/ToolsIcons/mui.svg'
import ApolloLogo from '../images/ToolsIcons/apollographql.svg'
import ReactRouter from '../images/ToolsIcons/reactrouter.svg'
import Redux from '../images/ToolsIcons/redux.svg'
import StyleComps from '../images/ToolsIcons/styledcomponents.svg'
import TypeScript from '../images/ToolsIcons/typescript.svg'
import Formik from '../images/ToolsIcons/formik.svg'
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


