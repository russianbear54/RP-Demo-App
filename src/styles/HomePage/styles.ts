import styled from "styled-components";

export const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
  height: 1020px;
`



export const Par = styled.p`
  position: relative;
  /* font-family: "Roboto"; */
  width: 827.18px;
  height: 64px;
  font-style: normal;
  font-weight: 400;
  font-size: 24.3px;
  line-height: 31.8px;
    align-items: center;
  text-align: center;
  letter-spacing: 0.3px;
  color: #000000;
  opacity: 0.2;
`;

export const Trio=styled.div`
width:1536.52px;
position:relative;
display:flex;
justify-content: space-between;
`

export const Line = styled.div`
  width: 1459.98px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`;

export const InstructionsWrapper=styled.div`
display: flex;
flex-direction: column;

`

export const Heading = styled.h1`

height: 37px;
/* font-family: 'Roboto'; */
font-style: normal;
font-weight: 700;
font-size: 36.9492px;
line-height: 37px;
display: flex;
align-items: center;
letter-spacing: 0.461865px;
color: #3178C6;
`;

// export const BottomPart=styled.div`
// gap:10px;
// display:flex;
// align-items: center;
// border: 2px solid red;
// `

export const Instructions = styled.p`
gap:10px;
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

export const BlueBar=styled.span`
width: 2.34px;
height: 100%;
background: #3178C6;
`