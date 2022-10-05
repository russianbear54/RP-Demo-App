import { Container, Divider } from '@mui/material';
import React, { useRef, useState } from 'react'

import CardComponent from '../components/CardComponent';
import FormComponent from '../components/FormComponent';



 


const FormPage = () => {



const handleInputs=(e:React.FormEvent)=>{

  e.preventDefault();

}



  return (
    <Container sx={{display:'flex'}}>
      <FormComponent />
      <Divider variant='inset' orientation="vertical"/>
      <CardComponent firstName='Alex' lastName='Kuprin' age={42} department="PHD"/>
    </Container>
  )
}

export default FormPage