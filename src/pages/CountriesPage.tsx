import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";
import CountriesCardComponent from "../components/countries/CountriesCardComponent";
import { Wrapper } from "../styles/HomePage/styles";
import { Title } from "../styles/stylesSC";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

const CountriesPage: React.FC = () => {
  return (
    <Wrapper>
      <Title>Countries List</Title>
      <ApolloProvider client={client}>
        <CountriesCardComponent />
      </ApolloProvider>
    </Wrapper>
  );
};

export default CountriesPage;
