import React, { useEffect, useState } from "react";
import { DetailsDiv, IconDiv, Label, InfoCard, Value } from "../../styles/ListPage/styles";
import { CountriesIcons } from "../../images/CountriesIcons";
import { styles } from "../../styles/index";
import { useWidth } from "../../hooks/use-width";

interface Props {
  name: string;
  capital: string;
  phone: string;
}

const CountryCardComponent: React.FC<Props> = ({ name, capital, phone }) => {
  const [width, setWidth] = useState(null);
  const { iconWidth } = useWidth(width);

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  const countriesIcons = [
    CountriesIcons.globe(iconWidth, `${styles.color.blue.regular}`),
    CountriesIcons.location(iconWidth, `${styles.color.blue.regular}`),
    CountriesIcons.phone(iconWidth, `${styles.color.blue.regular}`),
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
