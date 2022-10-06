import { Box, Card, Typography } from "@mui/material";
import React from "react";
import FormPageTitles from "./FormPageTitles";
import * as styles from "../styles/stylesMUI";






interface HWFormValues {
  firstName: string;
  lastName: string;
  age: number;
  department: string;
}

const CardComponent: React.FC<HWFormValues> = ({ firstName, lastName, age, department }) => {




  return (
    <div>
      <FormPageTitles title={"Show Card"} /> 
      <div>  
      <Box sx={styles.boxStyle}/>  
      <Card sx={styles.cardStyle}>      
        <Typography sx={styles.fieldStyle}>Name</Typography>
        <Typography sx={styles.valueStyle}>{firstName + lastName}</Typography>
        <Typography sx={styles.fieldStyle}>Age</Typography>
        <Typography sx={styles.valueStyle}>{age}</Typography>
        <Typography sx={styles.fieldStyle}>Department</Typography>
        <Typography sx={styles.valueStyle}>{department}</Typography>
      </Card></div> 
    </div>
  );
};

export default CardComponent;
