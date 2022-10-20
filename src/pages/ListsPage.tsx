import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
//import CountriesCardComponent from '../components/CountriesCardComponent'
import ShipsCardComponent from "../components/ShipsCardComponent";
import { Title } from "../styles/stylesSC";

// const client = new ApolloClient({
//   uri: "https://countries.trevorblades.com/",
//   cache: new InMemoryCache(),
// });

// SPACE-X API!!!!
const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

const ListsPage: React.FC = () => {
  return (
    <>
      <Title>Ships List</Title>
      <ApolloProvider client={client}>
        <ShipsCardComponent />
      </ApolloProvider>
    </>
  );
};

export default ListsPage;
