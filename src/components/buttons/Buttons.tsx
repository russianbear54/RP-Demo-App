import React from "react";
import {  ButtonsDiv } from "../../styles/ListPage/styles";
import {Button } from "@mui/material";

interface Props {
  currPage: number;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  currCountries?: {}[];
  loading?: boolean;
  countries: boolean;
  data?: any;
}

const ButtonsComponent:React.FC<Props>= ({ currPage, setCurrPage, pageSize, currCountries, loading, countries, data }) => {
  return (
    <ButtonsDiv>
      <Button variant="contained" size="large"
        disabled={countries ? currPage === 1 : !loading && currPage < 1}
        onClick={() => {
          setCurrPage((prev) => prev - 1);
        }}>
        Back
      </Button>
      <Button variant="contained" size="large"
        disabled={countries ? currCountries.length < pageSize : !loading && data.ships.length < pageSize}
        onClick={() => {
          setCurrPage((prev) => prev + 1);
        }}>
        Load More
      </Button>
    </ButtonsDiv>
  );
};

export default ButtonsComponent;
