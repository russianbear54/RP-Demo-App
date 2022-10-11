import { gql, useQuery } from '@apollo/client'
// import { GET_COUNTRIES } from '../pages/ListsPage'
import { CountriesCard } from '../styles/ListPage/styles'
import CountryCardComponent from './CountryCardComponent'


const GET_COUNTRIES=gql`
query GetAllCountries {
  countries {
    name
    capital
    phone
  }
}
`




const CountriesCardComponent: React.FC =()=> {
  const {loading, error,data}= useQuery(GET_COUNTRIES)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("dataaaaa",data)

// console.log("name",data.countries[0].name);
// console.log("name",data.countries[0].capital);
// console.log("name",data.countries[0].phone);

 const elements=data.countries.slice(0,8)




  return (
    <CountriesCard>
     {data && (elements.map((el: { name: string; capital: string; phone: string })=><CountryCardComponent name={el.name} capital={el.capital} phone={el.phone}/>))}              
    </CountriesCard>
  )
}

export default CountriesCardComponent