import { gql, useQuery } from "@apollo/client";
import {  useEffect, useState } from "react";
import { ListDiv, ListMain } from "../../styles/ListPage/styles";
import ButtonsComponent from "../buttons/Buttons";
import CARDcomponent from "../generics/CARDcomponent";
import CountryCardComponent from "./CountryCardComponent";

const GET_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      name
      capital
      phone
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



const CountriesCardComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countries, setCountries] = useState([]);
  const { data } = useQuery(GET_COUNTRIES);

  const indexOfLastCountry = currentPage * PAGE_SIZE;
  const indexOfFirstCountry = indexOfLastCountry - PAGE_SIZE;

  useEffect(() => {
    if (data) {
      setCountries(data.countries);
    }
  }, [data]);

  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);


   const buttonProps={currPage:currentPage,setCurrPage:setCurrentPage,pageSize:PAGE_SIZE,currCountries:currentCountries,countries:true}



  return (
    <ListMain>
      <ListDiv>
        {currentCountries &&
          currentCountries.map((country: any, index: number) => (
            <CountryCardComponent name={country.name} capital={country.capital} phone={country.phone} key={index} />
          ))}
      </ListDiv>
      <ButtonsComponent {...buttonProps}  />
    </ListMain>
  );
};

export default CountriesCardComponent;

