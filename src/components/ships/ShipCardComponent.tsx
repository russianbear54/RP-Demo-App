import { InfoCard, Label, Value, IconDiv, DetailsDiv } from "../../styles/ListPage/styles";
import { ShipsIcons } from "../../images/ShipsIcons";
import { styles } from "../../styles/index";
import { useEffect, useState } from "react";

interface Props {
  name: string;
  type: string;
  year: number;
}

const ShipCardComponent: React.FC<Props> = ({ name, type, year }) => {
  const [width, setWidth] = useState(null);
  let iconWidth;

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  if (width > 1200) {
    iconWidth = 31.5;
  }

  if (width <= 1200) {
    iconWidth = 25;
  }

  if (width <= 1024) {
    iconWidth = 22;
  }

  if (width <= 428) {
    iconWidth = 18;
  }

  const shipIcons = [
    ShipsIcons.anchor(iconWidth, `${styles.color.blue.regular}`),
    ShipsIcons.type(iconWidth, `${styles.color.blue.regular}`),
    ShipsIcons.year(iconWidth, `${styles.color.blue.regular}`),
  ];

  return (
    <InfoCard>
      <IconDiv>
        {shipIcons.map((icon, index) => (
          <div key={index}>{icon}</div>
        ))}
      </IconDiv>
      <DetailsDiv>
        <Label>Name</Label>
        <Value>{name}</Value>
        <Label>Type</Label>
        <Value>{type}</Value>
        <Label>Year Built</Label>
        <Value>{year}</Value>
      </DetailsDiv>
    </InfoCard>
  );
};

export default ShipCardComponent;
