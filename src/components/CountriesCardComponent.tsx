import { gql, useQuery } from '@apollo/client'




// import { GET_COUNTRIES } from '../pages/ListsPage'
import { CountriesCard,Button } from '../styles/ListPage/styles'
import CountryCardComponent from './CountryCardComponent'


const GET_COUNTRIES=gql`
query GetAllCountries{
  countries {
    name
    capital
    phone
  }
}
`






const CountriesCardComponent: React.FC =()=> {
  const { loading, data, error } = useQuery(GET_COUNTRIES, {
    variables: {
      offset: 0,
      limit: 10
    },
  });
  // const {loading, error,data}= useQuery(GET_COUNTRIES)

  
  // const [elements,setElements]=useState(data.countries.slice(0,8))


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

 console.log("dataaaaa",data)

// console.log("name",data.countries[0].name);
// console.log("name",data.countries[0].capital);
// console.log("name",data.countries[0].phone);



let elements=data.countries.slice(0,8)




  return (
    <>
    <CountriesCard>
     {elements && (elements.map((el: { name: string; capital: string; phone: string },index: number)=><CountryCardComponent name={el.name} capital={el.capital} phone={el.phone} key={index} />))}              
    </CountriesCard>
<Button onClick={()=>{}}>Load More</Button>
    </>
  )
}

export default CountriesCardComponent