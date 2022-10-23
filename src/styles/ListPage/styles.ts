import styled from "styled-components";

export const ListMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
`;

export const ListDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  width:87em;
  height: 30em;
  justify-content: space-between;
  align-content: space-between;
 
`;

export const ShipCard = styled.div`
  display: flex;
  color: #0038fe;
  /* width: 304.94px;
  height: 224.94px; */
  width: 20em;
  height: 14em;
  background: #f8f8f8;
  box-shadow: 0px 3.49584px 13.9834px -3.49584px rgba(0, 0, 0, 0.25);
  border-radius: 11.6939px;
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding:1em;
`;
export const Label = styled.div`
  /* margin: auto; */
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;  
  display: flex;
  align-items: center;
  letter-spacing: 0.0896501px;
  color: #0038fe;

  opacity: 0.5;
`;

export const Value = styled.div`
  /* margin: auto; */
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 19.5px;  
  letter-spacing: 0.125931px;

  color: #0038fe;
`;

export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin:1em;
`;
export const ButtonsDiv = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

export const Button = styled.button`
  font-family: "Oranienbaum";
  font-style: normal;
  font-weight: 400;
  font-size: 30.6068px;
  line-height: 35px;
  background: #0038fe;
  color: #ffffff;
  width: 212.09px;
  height: 61.58px;
  border-radius: 14px;
`;

///// COUNTRIES

export const CountryCard = styled.div`
  display: flex;
  flex-direction: column;
  color: #0038fe;
  width: 304.94px;
  height: 224.94px;
  background: #f8f8f8;
  box-shadow: 0px 3.49584px 13.9834px -3.49584px rgba(0, 0, 0, 0.25);
  border-radius: 11.6939px;
  margin: auto;
`;
