import React from "react";
import { DetailsDiv, IconDiv, Label, InfoCard, Value } from "../../styles/ListPage/styles";
import { CountriesIcons } from "../../images/CountriesIcons";
import { styles } from "../../styles/index";

interface Props {
  name: string;
  capital: string;
  phone: string;
}

let WIDTH;
const WindowWidth = window.screen.width;

if (WindowWidth > 1200) {
  WIDTH = 31.5;
}

if (WindowWidth <= 1200) {
  WIDTH = 25;
}

if (WindowWidth <= 1024) {
  WIDTH = 22;
}

if (WindowWidth <= 428) {
  WIDTH = 18;
}

const CountryCardComponent: React.FC<Props> = ({ name, capital, phone }) => {
  const countriesIcons = [
    CountriesIcons.globe(WIDTH, `${styles.color.blue.regular}`),
    CountriesIcons.location(WIDTH, `${styles.color.blue.regular}`),
    CountriesIcons.phone(WIDTH, `${styles.color.blue.regular}`),
  ];

  return (
    <InfoCard>
      <IconDiv>
        {countriesIcons.map((icon, index) => (
          <div key={index}>{icon}</div>
        ))}
      </IconDiv>
      <DetailsDiv>
        <Label>Country</Label>
        <Value>{name}</Value>
        <Label>Capital</Label>
        <Value>{capital}</Value>
        <Label>Phone</Label>
        <Value>{phone}</Value>
      </DetailsDiv>
    </InfoCard>
  );
};

export default CountryCardComponent;
