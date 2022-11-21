import React from "react";
import { Button, ButtonsDiv } from "../../styles/ListPage/styles";

interface Props {
  currPage: number;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  currCountries?: {}[];
  loading?: boolean;
  countries: boolean;
  data?: any;
}

const ButtonsComponent = ({ currPage, setCurrPage, pageSize, currCountries, loading, countries, data }: Props) => {
  return (
    <ButtonsDiv>
      <Button
        disabled={countries ? currPage === 1 : !loading && currPage < 1}
        onClick={() => {
          setCurrPage((prev) => prev - 1);
        }}>
        Back
      </Button>
      <Button
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
