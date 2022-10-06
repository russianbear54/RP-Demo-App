import { Container, Divider } from '@mui/material';
import React, { useRef, useState } from 'react'
import CardComponentSC from '../components/CardComponentSC';
import FormComponent from '../components/FormComponent';



 


const FormPage = () => {



const handleInputs=(e:React.FormEvent)=>{

  e.preventDefault();

}



  return (
    <Container sx={{display:'flex'}}>
      <FormComponent />
      <Divider variant='inset' orientation="vertical"/>
      <CardComponentSC firstName='Alex' lastName='Kuprin' age={42} department="PHD"/>
    </Container>
  )
}

export default FormPage