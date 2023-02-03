import { ApolloProvider } from "@apollo/client";
import React from "react";
import CountriesCardComponent from "../components/countries/CountriesCardComponent";
import { Wrapper } from "../components/homePage/styles";
import { Title } from "../styles/stylesSC";
import { motion } from "framer-motion";
import { useAPI } from "../hooks/use-api";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { duration: 0.5, type: "spring", damping: 35, stiffness: 100 } },
  exit: { y: "100vh", opacity: 0 },
};

const CountriesPage: React.FC = () => {
  const client = useAPI("countries");

  return (
    <Wrapper as={motion.div} key="countries" variants={dropIn} initial="hidden" animate="visible" exit="exit">
      <Title>Countries List</Title>
      <ApolloProvider client={client}>
        <CountriesCardComponent />
      </ApolloProvider>
    </Wrapper>
  );
};

export default CountriesPage;
