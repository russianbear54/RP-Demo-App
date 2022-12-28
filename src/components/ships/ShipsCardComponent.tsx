import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { ListDiv, ListMain } from "../../styles/ListPage/styles";
import ShipCardComponent from "./ShipCardComponent";
import ButtonsComponent from "../Buttons";
// import CARDcomponent from "../generics/CARDcomponent";
import { useWidth } from "../../hooks/use-width";

const GET_SHIPS = gql`
  query ListShips($limit: Int!, $offset: Int!) {
    ships(limit: $limit, offset: $offset) {
      name
      type
      year_built
    }
  }
`;

const ShipsCardComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [width, setWidth] = useState(null);
  const { PAGE_SIZE } = useWidth(width);

  const { loading, data } = useQuery(GET_SHIPS, {
    variables: {
      limit: PAGE_SIZE,
      offset: currentPage * PAGE_SIZE,
    },
  });

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

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
