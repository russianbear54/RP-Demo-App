import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Button, ButtonsDiv, ListDiv, ListMain } from "../../styles/ListPage/styles";
import ShipCardComponent from "./ShipCardComponent";


const GET_SHIPS = gql`
  query ListShips($limit: Int!, $offset: Int!) {
    ships(limit: $limit, offset: $offset) {
      name
      type
      year_built
    }
  }
`;

let PAGE_SIZE: number;

const WindowWidth = window.screen.width;



if(WindowWidth > 1024){
  PAGE_SIZE = 8; 
}

if(WindowWidth <= 1024){
  PAGE_SIZE = 6; 
}

if(WindowWidth <= 428){
  PAGE_SIZE = 8; 
}


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
          disabled={!loading && data.ships.length < PAGE_SIZE}
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
