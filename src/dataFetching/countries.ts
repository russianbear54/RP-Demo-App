import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


const client=new ApolloClient({
  uri:'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
})

client.query({
  query:gql`
  query GetAllCountries {
    countries{
      name
      capital
      phone
    }
  }
  `
}).then((result)=>console.log('result',result.data))