import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


const client=new ApolloClient({
  uri:'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
})

client.query({
  query:gql`
  query Query($limit: Int) {
    ships (limit: 8){
      name
      type
      year_built
    }
  }
  `
}).then((result)=>console.log('result',result.data))