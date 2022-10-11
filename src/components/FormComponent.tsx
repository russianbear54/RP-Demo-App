import React from 'react'

import FormPageTitles from './FormPageTitles';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Container from '@mui/material/Container';
import { InputLabel, MenuItem, Select } from '@mui/material';
import * as styles from '../styles/stylesMUI'







const FormComponent:React.FC<{}>=()=> {


  

  const formik = useFormik({
    initialValues: {
      firstName:'',
      lastName:'',
      age:'',
      department:''
    }, 
   
   

    onSubmit: () => {
      
    },
  });

 const outPut=formik.values
 


 console.log('Formic',outPut)

 



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
          <Select fullWidth variant='standard' name="department" value={formik.values.department} onChange={formik.handleChange} >
            <MenuItem id="frontEnd" value={'frontEnd'}>Frontend Developer</MenuItem>
            <MenuItem id="backEnd"  value={'backEnd'}>Backend Developer</MenuItem>
            <MenuItem id="fullStack" value={'fullStack'}>Fullstack Developer</MenuItem>
            <MenuItem id="QA" value={'QA'}>Quality Control</MenuItem>
            <MenuItem id="security" value={'security'}>Security</MenuItem>
          </Select>
       
        </Container>
      
    </div>
  )
}

export default FormComponent



