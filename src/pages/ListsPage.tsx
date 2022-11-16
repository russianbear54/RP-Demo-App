import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ShipsCardComponent from "../components/ships/ShipsCardComponent";
import { Wrapper } from "../styles/HomePage/styles";
import { Title } from "../styles/stylesSC";


const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

const ListsPage: React.FC = () => {
  return (
    <Wrapper>
      <Title>Ships List</Title>
      <ApolloProvider client={client}>
        <ShipsCardComponent />
      </ApolloProvider>
    </Wrapper>
  );
};

export default ListsPage;
