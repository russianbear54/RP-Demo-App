import { Typography } from '@mui/material';
import React from 'react'


type Props={
    title:string;
}

const formPageTitle={
  fontFamily:'Oranienbaum',
  fontWeight:400,
  letterSpacing:".55px",
  lineHeight:'98.98px',
  fontSize:"85.7px",
  marginBottom:"83.39px"
}


const FormPageTitles:React.FC<Props>=({title})=> {
  return (
    <Typography variant="h1" sx={formPageTitle}>{title}</Typography>
  )
}

export default FormPageTitles