import { ShipCard, Label, Value, IconDiv, DetailsDiv } from "../../styles/ListPage/styles";
import { ShipsIcons } from "../../images/ShipsIcons";
import { styles } from "../../styles/index";

interface Props {
  name: string;
  type: string;
  year: number;
}

let WIDTH: string | number | undefined;

const WindowWidth = window.screen.width;

// WindowWidth <= 1024?WIDTH=20:WIDTH=31.5

WIDTH = 31.5;

if (WindowWidth <= 1024) {
  WIDTH = 20;
}
if (WindowWidth <= 428) {
  WIDTH = 17;
}

const ShipCardComponent: React.FC<Props> = ({ name, type, year }) => {
  const shipIcons = [
    ShipsIcons.anchor(WIDTH, `${styles.color.blue.regular}`),
    ShipsIcons.type(WIDTH, `${styles.color.blue.regular}`),
    ShipsIcons.year(WIDTH, `${styles.color.blue.regular}`),
  ];

  return (
    <ShipCard>
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
    </ShipCard>
  );
};

export default ShipCardComponent;
