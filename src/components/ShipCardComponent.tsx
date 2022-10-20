import {
  ShipCard,
  Label,
  Value,
  IconDiv,
  DetailsDiv,
} from "../styles/ListPage/styles";
import { ReactComponent as Anchor } from "../images/ShipsIcons/anchor.svg";
import { ReactComponent as Type } from "../images/ShipsIcons/type.svg";
import { ReactComponent as Year } from "../images/ShipsIcons/year.svg";


interface Props {
  name: string;
  type: string;
  year: number;
}

const ShipCardComponent: React.FC<Props> = ({ name, type, year }) => {
  return (
    <ShipCard>
      <IconDiv>       
          <Anchor fill="#0038FE" width={31.58} />        
          <Type fill="#0038FE" width={31.58} />     
          <Year fill="#0038FE" width={31.58} />       
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
