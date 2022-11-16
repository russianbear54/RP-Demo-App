import React from "react";
import { DetailsDiv, IconDiv, Label, ShipCard, Value } from "../../styles/ListPage/styles";
import {CountriesIcons} from "../../images/CountriesIcons"
import { styles } from "../../styles/index";


interface Props {
  name: string;
  capital: string;
  phone: string;
}

let WIDTH: string | number | undefined;
const WindowWidth = window.screen.width;



if (WindowWidth >= 768&&WindowWidth<=1024) {
  WIDTH = 22;
}else if (WindowWidth <= 428) {
  WIDTH = 18;
}else{WIDTH=30}




const CountryCardComponent: React.FC<Props> = ({ name, capital, phone }) => {

  const countriesIcons=[CountriesIcons.globe(WIDTH, `${styles.color.blue.regular}`), CountriesIcons.location(WIDTH, `${styles.color.blue.regular}`), CountriesIcons.phone(WIDTH, `${styles.color.blue.regular}`)]

  return (
    <ShipCard>
      <IconDiv>{countriesIcons.map((icon,index)=><div key={index}>{icon}</div>)}</IconDiv>
      <DetailsDiv>
        <Label>Country</Label>
        <Value>{name}</Value>
        <Label>Capital</Label>
        <Value>{capital}</Value>
        <Label>Phone</Label>
        <Value>{phone}</Value>
      </DetailsDiv>
    </ShipCard>
  );
};

export default CountryCardComponent;
