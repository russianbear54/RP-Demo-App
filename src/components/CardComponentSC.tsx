import React from "react";
import {Circle,Card,Label,Value} from '../styles/stylesSC'
import FormPageTitles from "./FormPageTitles";





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
          <Circle/>  
          <Card>      
            <Label>Name</Label>
            <Value>{firstName + lastName}</Value>
            <Label>Age</Label>
            <Value>{age}</Value>
            <Label>Department</Label>
            <Value>{department}</Value>
          </Card></div> 
        </div>
      );


}



export default CardComponent;