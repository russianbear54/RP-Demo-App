import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ListDiv, ListMain } from "../../styles/ListPage/styles";
import ButtonsComponent from "../buttons/Buttons";
import CARDcomponent from "../generics/CARDcomponent";
import CountryCardComponent from "./CountryCardComponent";
import { useWidth } from "../../hooks/use-width";

const GET_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      name
      capital
      phone
    }
  }
`;

const CountriesCardComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countries, setCountries] = useState([]);
  const [width, setWidth] = useState(null);
  const { data } = useQuery(GET_COUNTRIES);
  const { PAGE_SIZE } = useWidth(width);

  useEffect(() => {
    if (data) {
      setCountries(data.countries);
    }
  }, [data]);

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  const indexOfLastCountry = currentPage * PAGE_SIZE;
  const indexOfFirstCountry = indexOfLastCountry - PAGE_SIZE;

  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  const buttonProps = { currPage: currentPage, setCurrPage: setCurrentPage, pageSize: PAGE_SIZE, currCountries: currentCountries, countries: true };

  return (
    <ListMain>
      <ListDiv>
        {currentCountries &&
          currentCountries.map((country: any, index: number) => (
            <CountryCardComponent name={country.name} capital={country.capital} phone={country.phone} key={index} />
          ))}
      </ListDiv>
      <ButtonsComponent {...buttonProps} />
    </ListMain>
  );
};

export default CountriesCardComponent;
