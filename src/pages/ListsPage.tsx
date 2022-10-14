import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import CountriesCardComponent from '../components/CountriesCardComponent'
import {Title} from '../styles/stylesSC'



const client=new ApolloClient({
  uri:'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
})

const ListsPage = () => {




  return (
  <>
<Title>Countries List</Title>
<ApolloProvider client={client} >
<CountriesCardComponent/>
</ApolloProvider>

</>
   
  )
}

export default ListsPage