import React from "react";
import { DetailsDiv, IconDiv, Label, ShipCard, Value } from "../styles/ListPage/styles";
import { ReactComponent as GLobe } from "../images/CountriesIcons/globe.svg";
import { ReactComponent as Location } from "../images/CountriesIcons/location.svg";
import { ReactComponent as Phone } from "../images/CountriesIcons/phone.svg";

interface Props {
  name: string;
  capital: string;
  phone: string;
}

const CountryCardComponent: React.FC<Props> = ({ name, capital, phone }) => {
  return (
    <ShipCard>
      <IconDiv>
        <GLobe fill="#0038FE" width={31.58} />
        <Location fill="#0038FE" width={31.58} />
        <Phone fill="#0038FE" width={31.58} />
      </IconDiv>
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
