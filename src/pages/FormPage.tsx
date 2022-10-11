import { Container, Divider } from '@mui/material';
import CardComponentSC from '../components/CardComponentSC';
// import FormComponent from '../components/FormComponent';
import FCompLessFormk from '../components/FCompLessFormk'




 


const FormPage = () => {







  return (
    <Container sx={{display:'flex'}}>
      <FCompLessFormk />
      <Divider variant='inset' orientation="vertical"/>
      <CardComponentSC />
    </Container>
  )
}

export default FormPage