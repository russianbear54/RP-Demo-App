import { InfoCard, Label, Value, IconDiv, DetailsDiv } from "../../styles/ListPage/styles";
import { ShipsIcons } from "../../images/ShipsIcons";
import { styles } from "../../styles/index";
import { useEffect, useState } from "react";
import { useWidth } from "../../hooks/use-width";

interface Props {
  name: string;
  type: string;
  year: number;
}

const ShipCardComponent: React.FC<Props> = ({ name, type, year }) => {
  const [width, setWidth] = useState(null);
  const { iconWidth } = useWidth(width);

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

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
