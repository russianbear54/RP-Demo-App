import React, { useEffect, useState } from "react";
import { DetailsDiv, IconDiv, InfoCard, Label, Value } from "../../styles/ListPage/styles";
import { CountriesIcons } from "../../images/CountriesIcons";
import { ShipsIcons } from "../../images/ShipsIcons";
import { styles } from "../../styles";
import { useWidth } from "../../hooks/use-width";

interface Props {
  name?: string;
  capital?: string;
  phone?: string;
  shipName?: string;
  type?: string;
  year?: number;
}


const CARDcomponent: React.FC<Props> = ({ name, capital, phone, shipName, type, year }) => {
  const [mode, setMode] = useState(null);
  const [width, setWidth] = useState(null);

  const { PAGE_SIZE,iconWidth } = useWidth(width);


  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  if (shipName && type && year) {
    setMode("ships");
  } else {
    setMode("countries");
  }

  const countriesIcons = [
    CountriesIcons.globe(iconWidth, `${styles.color.blue.regular}`),
    CountriesIcons.location(iconWidth, `${styles.color.blue.regular}`),
    CountriesIcons.phone(iconWidth, `${styles.color.blue.regular}`),
  ];

  const shipIcons = [
    ShipsIcons.anchor(iconWidth, `${styles.color.blue.regular}`),
    ShipsIcons.type(iconWidth, `${styles.color.blue.regular}`),
    ShipsIcons.year(iconWidth, `${styles.color.blue.regular}`),
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
