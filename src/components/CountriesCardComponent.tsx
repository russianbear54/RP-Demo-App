import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

import { Button, ShipsCard } from "../styles/ListPage/styles";
// import { CountriesCard,Button } from '../styles/ListPage/styles'
import CountryCardComponent from "./CountryCardComponent";
import { countries } from "../Dummies/countries";

const GET_COUNTRIES=gql`
query GetAllCountries{
  countries {
    name
    capital
    phone
  }
}
`



const CountriesCardComponent: React.FC = () => {
  const {loading, data} = useQuery(GET_COUNTRIES);
 
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(8);

const countries=data.countries
 console.log("countries",countries)



  const indexOfLastCountry = currentPage * resultsPerPage;
  const indexOfFirstCountry = indexOfLastCountry - resultsPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  console.log("currentCountries", currentCountries);



  return (
    <>
      <ShipsCard>
        {currentCountries && currentCountries.map((country:any, index:number) => (
          <CountryCardComponent name={country.name} capital={country.capital} phone={country.phone} key={index} />
        ))}
      </ShipsCard>
      <Button disabled={currentCountries.length<8}
        onClick={() => {
          setCurrentPage((prev) => prev + 1);
        }}>
        Load More
      </Button>
    </>
  );
};

export default CountriesCardComponent;
