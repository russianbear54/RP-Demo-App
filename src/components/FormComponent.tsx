import React from 'react'
// import styled from 'styled-components';
import FormPageTitles from './FormPageTitles';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Container from '@mui/material/Container';
import { InputLabel, MenuItem, Select } from '@mui/material';
import * as styles from '../styles/styles'




const FormComponent:React.FC<{}>=()=> {

  

  const formik = useFormik({
    initialValues: {
      firstName:'',
      lastName:'',
      age:'',
      department:''
    },
   
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
        <FormPageTitles title={'Form Fields'}/>
     
        <Container sx={styles.formStyle}>

        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          type="text"
          variant="standard" 
          value={formik.values.firstName}
          onChange={formik.handleChange}
       
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          type="text"
          variant="standard" 
          value={formik.values.lastName}
          onChange={formik.handleChange}
         
        />
        <TextField
          fullWidth
          id="age"
          name="age"
          label="age"
          type="number"
          variant="standard" 
          value={formik.values.age}
          onChange={formik.handleChange}
          
        />
  
        
         <InputLabel variant='outlined'>Department</InputLabel>
          <Select fullWidth variant='standard' >
            <MenuItem value={'frontEnd'}>Frontend Developer</MenuItem>
            <MenuItem value={'backEnd'}>Backend Developer</MenuItem>
            <MenuItem value={'fullStack'}>Fullstack Developer</MenuItem>
            <MenuItem value={'QA'}>Quality Control</MenuItem>
            <MenuItem value={'security'}>Security</MenuItem>
          </Select>
       
        </Container>
        {/* </Box> */}
    </div>
  )
}

export default FormComponent



