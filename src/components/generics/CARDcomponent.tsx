import React, { useState } from "react";
import { DetailsDiv, IconDiv, InfoCard, Label, Value } from "../../styles/ListPage/styles";
import { CountriesIcons } from "../../images/CountriesIcons";
import { ShipsIcons } from "../../images/ShipsIcons";
import { styles } from "../../styles";

interface Props {
  name?: string;
  capital?: string;
  phone?: string;
  shipName?: string;
  type?: string;
  year?: number;
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

const CARDcomponent: React.FC<Props> = ({ name, capital, phone, shipName, type, year }) => {
  const [mode, setMode] = useState(null);

  if (shipName && type && year) {
    setMode("ships");
  } else {
    setMode("countries");
  }

  const countriesIcons = [
    CountriesIcons.globe(WIDTH, `${styles.color.blue.regular}`),
    CountriesIcons.location(WIDTH, `${styles.color.blue.regular}`),
    CountriesIcons.phone(WIDTH, `${styles.color.blue.regular}`),
  ];

  const shipIcons = [
    ShipsIcons.anchor(WIDTH, `${styles.color.blue.regular}`),
    ShipsIcons.type(WIDTH, `${styles.color.blue.regular}`),
    ShipsIcons.year(WIDTH, `${styles.color.blue.regular}`),
  ];

  return (
    <InfoCard>
      {mode === "countries" ? (
        <IconDiv>
          {countriesIcons.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </IconDiv>
      ) : (
        <IconDiv>
          {shipIcons.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </IconDiv>
      )}
      {mode === "countries" ? (
        <DetailsDiv>
          <Label>Country</Label>
          <Value>{name}</Value>
          <Label>Capital</Label>
          <Value>{capital}</Value>
          <Label>Phone</Label>
          <Value>{phone}</Value>
        </DetailsDiv>
      ) : (
        <DetailsDiv>
          <Label>Name</Label>
          <Value>{shipName}</Value>
          <Label>Type</Label>
          <Value>{type}</Value>
          <Label>Year Built</Label>
          <Value>{year}</Value>
        </DetailsDiv>
      )}
    </InfoCard>
  );
};

export default CARDcomponent;
