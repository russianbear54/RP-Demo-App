import React from 'react'
import styled from 'styled-components';

const Heading = styled.h1`
width: 239px;
height: 37px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 36.9492px;
line-height: 37px;
display: flex;
align-items: center;
letter-spacing: 0.461865px;
color: #3178C6;
`;

const BottomPart=styled.div`
gap:10px;
display:flex;
align-items: center;
`

const Par = styled.p`
display: flex;
width: 424.6px;
height: 72px;
text-align: left;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18.3657px;
line-height: 24px;
align-items: center;
letter-spacing: 0.229571px;
color: #3178C6;

opacity: 0.5;
`;

const BlueBar=styled.span`
width: 2.34px;
height: 74.59px;
background: #3178C6;
`


type Props={
    text:string;
    heading:string;
}


const PageInstruction = ({heading,text}:Props) => {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
    <Heading>{heading}</Heading>
    <BottomPart><BlueBar/>
    <Par>{text}</Par></BottomPart>
    
    </div>
  )
}

export default PageInstruction