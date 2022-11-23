import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { ListDiv, ListMain } from "../../styles/ListPage/styles";
import ShipCardComponent from "./ShipCardComponent";
import ButtonsComponent from "../buttons/Buttons";
import CARDcomponent from "../generics/CARDcomponent";

const GET_SHIPS = gql`
  query ListShips($limit: Int!, $offset: Int!) {
    ships(limit: $limit, offset: $offset) {
      name
      type
      year_built
    }
  }
`;

let PAGE_SIZE;

const WindowWidth = window.screen.width;


if (WindowWidth > 1200) {
  PAGE_SIZE = 8;
}

if (WindowWidth <= 1200) {
  PAGE_SIZE = 9;
}

if (WindowWidth <= 1024) {
  PAGE_SIZE = 6;
}

if (WindowWidth <= 428) {
  PAGE_SIZE = 8;
}

const ShipsCardComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);


  const { loading, data } = useQuery(GET_SHIPS, {
    variables: {
      limit: PAGE_SIZE,
      offset: currentPage * PAGE_SIZE,
    },
  });



  const buttonProps = { currPage: currentPage, setCurrPage: setCurrentPage, pageSize: PAGE_SIZE, loading, countries: false, data };

  return (
    <ListMain>
      <ListDiv>
        {!loading &&
          data &&
          data.ships.map((ship: { name: string; type: string; year_built: number }, index: number) => (
            <ShipCardComponent name={ship.name} type={ship.type} year={ship.year_built} key={index} />
          ))}
      </ListDiv>
      <ButtonsComponent {...buttonProps} />
    </ListMain>
  );
};

export default ShipsCardComponent;
