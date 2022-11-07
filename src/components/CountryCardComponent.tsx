import React from "react";
import { DetailsDiv, IconDiv, Label, ShipCard, Value } from "../styles/ListPage/styles";
import {CountriesIcons} from "../images/CountriesIcons"
import { styles } from "../styles";


interface Props {
  name: string;
  capital: string;
  phone: string;
}

let WIDTH: string | number | undefined;
window.screen.width <= 1024?WIDTH=20:WIDTH=31.5

const CountryCardComponent: React.FC<Props> = ({ name, capital, phone }) => {

  const countriesIcons=[CountriesIcons.globe(WIDTH, `${styles.color.blue.regular}`), CountriesIcons.location(WIDTH, `${styles.color.blue.regular}`), CountriesIcons.phone(WIDTH, `${styles.color.blue.regular}`)]

  return (
    <ShipCard>
      <IconDiv>{countriesIcons.map((icon,index)=><div key={index}>{icon}</div>)}</IconDiv>
      <DetailsDiv>
        <Label>Name</Label>
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
