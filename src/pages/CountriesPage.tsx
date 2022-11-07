
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AsyncStorageWrapper, persistCache } from 'apollo3-cache-persist';
import React from 'react'
import CountriesCardComponent from '../components/CountriesCardComponent';
import { Wrapper } from '../styles/HomePage/styles';
import { Title } from '../styles/stylesSC';

const cache=new InMemoryCache()

await persistCache({
    cache,
    storage:new AsyncStorageWrapper(window.localStorage)
})

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache,
});

// console.log("client.cache",client.cache);

const CountriesPage:React.FC=()=> {
  return (
     <Wrapper>
    <Title>Countries List</Title>
    <ApolloProvider client={client}>
      <CountriesCardComponent />
    </ApolloProvider>
  </Wrapper>
  )
}

export default CountriesPage