import styled from "styled-components";

export const FormPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
`;
export const FormContainer = styled.div`
display: flex;
flex-direction: column;
width:30em;
align-items: center;

`;

export const CardComponentDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:30em;

`;

export const Split = styled.span`
 
 height: 50em;
  border: 1px solid #000000;
`;

export const FormPageDiv = styled.div`
  display: flex;
  justify-content: center;
`;

// export const ContainerDiv=styled.div`
// border:3px dashed crimson;

// `

export const ShowCardDiv = styled.div`
  width: 359px;
  height: 99px;
`;
export const FormFieldsDiv = styled.div`
  width: 399px;
  height: 99px;
`;

export const CardCircleDiv = styled.div``;

export const Circle = styled.div`
  position: relative;
  height: 8em;
  width: 8em;
  background-color: #0038fe;
  bottom: -4.25em;
  margin: auto;
  border-radius: 50%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 25em;
  height: 25em;
  border: 3.48px solid #0038fe;
  border-radius: 26.08px;
  background-color: #f2f2f2;
`;

export const Label = styled.div`
  display: flex;
  font-family: "Roboto";
  font-style: normal;
  align-items: center;
  font-weight: 400;
  font-size: 20.61px;
  line-height: 24.16px;
  letter-spacing: 0.133273px;
  color: #0038fe;
  opacity: 0.5;
  margin-left: 41.02px;
`;

export const Value = styled.div`
  display: flex;
  font-family: "Roboto";
  font-style: normal;
  align-items: center;
  font-weight: 600;
  font-size: 28.9545px;
  line-height: 33.93px;
  letter-spacing: 0.187208px;
  margin-left: 41.02px;
  color: #0038fe;
`;
