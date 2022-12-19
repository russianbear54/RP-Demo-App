import { ApolloProvider } from "@apollo/client";
import ShipsCardComponent from "../components/ships/ShipsCardComponent";
import { useAPI } from "../hooks/use-api";
import { Wrapper } from "../styles/HomePage/styles";
import { Title } from "../styles/stylesSC";

const ListsPage: React.FC = () => {
  const client = useAPI("ships");

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
