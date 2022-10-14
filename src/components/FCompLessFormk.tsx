import React from 'react'

import FormPageTitles from './FormPageTitles';
import TextField from '@mui/material/TextField';

import Container from '@mui/material/Container';
import { InputLabel, MenuItem, Select } from '@mui/material';
import * as styles from '../styles/stylesMUI'
// import { useDispatch } from 'react-redux';

// import {enterFN,enterLN,enterAge,enterPosition} from '../state/formSlice'






const FCompLessFormk:React.FC<{}>=()=> {

// const dispatch=useDispatch()
  



 
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
        
          // onChange={(e)=>dispatch(enterFN(e.target.value))}
       
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          type="text"
          variant="standard" 
         
          // onChange={(e)=>dispatch(enterLN(e.target.value))}
         
        />
        <TextField
          fullWidth
          id="age"
          name="age"
          label="age"
          type="number"
          variant="standard" 
        
          // onChange={(e)=>dispatch(enterAge(e.target.value.toString()))}
          
        />
  
        
         <InputLabel variant='outlined'>Department</InputLabel>
          <Select fullWidth variant='standard' name="department"  >
            <MenuItem id="frontEnd" value='Frontend Developer' >Frontend Developer</MenuItem>
            <MenuItem id="backEnd"  value='Backend Developer'>Backend Developer</MenuItem>
            <MenuItem id="fullStack" value='FullStack Developer'>Fullstack Developer</MenuItem>
            <MenuItem id="QA" value='Quality Control'>Quality Control</MenuItem>
            <MenuItem id="security" value='Security'>Security</MenuItem>
          </Select>
       
        </Container>
      
    </div>
  )
}

export default FCompLessFormk



