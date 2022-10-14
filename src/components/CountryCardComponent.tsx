
import { Block, CountryCard, Label, Pic, Value } from '../styles/ListPage/styles'
import Globe from '../images/CountriesIcons/globe.svg'
import Location from '../images/CountriesIcons/location.svg'
import Phone from '../images/CountriesIcons/phone.svg'


interface Props{
  name:string,
  capital:string,
  phone:string,
  
}


const CountryCardComponent:React.FC<Props>=({name,capital,phone})=> {


  return (
    <CountryCard >
     <Block >
      <Pic src={Globe} alt='globe'/>
      <div>
        <Label>Country</Label>
        <Value >{name}</Value>
      </div>
     </Block>
     <Block >
      <Pic src={Location} alt='location'/>
      <div>
        <Label>Capital</Label>
        <Value >{capital}</Value>
      </div>
     </Block>
     <Block >
      <Pic src={Phone} alt='phone'/>
      <div>
        <Label>Phone</Label>
        <Value >{phone}</Value>
      </div>
     </Block> 
    </CountryCard>
  )
}

export default CountryCardComponent



