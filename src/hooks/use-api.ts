import { ApolloClient, InMemoryCache } from "@apollo/client";

export const useAPI=(category)=>{
let client;
    switch(category){
        case 'ships':
             client = new ApolloClient({
                uri: "https://api.spacex.land/graphql/",
                cache: new InMemoryCache(),
              });
              break;
        case 'countries':
            client = new ApolloClient({
                uri: "https://countries.trevorblades.com/",
                cache: new InMemoryCache(),
              });
              break;
    }

    return client
}