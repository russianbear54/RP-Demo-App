import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Button, ButtonsDiv, ListDiv, ListMain } from "../styles/ListPage/styles";
import ShipCardComponent from "./ShipCardComponent";
// import ButtonsComponent from "./nav/Buttons";

const GET_SHIPS = gql`
  query ListShips($limit: Int!, $offset: Int!) {
    ships(limit: $limit, offset: $offset) {
      name
      type
      year_built
    }
  }
`;

const PAGE_SIZE = 8;

const ShipsCardComponent: React.FC = () => {
  const [page, setPage] = useState(0);

  const { loading, data } = useQuery(GET_SHIPS, {
    variables: {
      limit: PAGE_SIZE,
      offset: page * PAGE_SIZE,
    },
  });

  return (
    <ListMain>
      <ListDiv>
        {!loading &&
          data &&
          data.ships.map((ship: { name: string; type: string; year_built: number }, index: number) => (
            <ShipCardComponent name={ship.name} type={ship.type} year={ship.year_built} key={index} />
          ))}
      </ListDiv>
      <ButtonsDiv>
      <Button
        disabled={!loading && page < 1}
        onClick={() => {
          setPage((prev) => prev - 1);
        }}>
        Back
      </Button>
      <Button
        disabled={!loading && data.ships.length < 8}
        onClick={() => {
          setPage((prev) => prev + 1);
        }}>
        Load More
      </Button>
    </ButtonsDiv>
      </ListMain>
  );
};

export default ShipsCardComponent;
