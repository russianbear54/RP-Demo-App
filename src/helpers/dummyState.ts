import { faker } from "@faker-js/faker";


const positions = ["Frontend Developer", "Backend Developer", "Security", "Quality Control", "Fullstack Developer"];

const randomFirstName =()=> faker.name.firstName();
const randomLastName=()=> faker.name.lastName();
const randomAge =()=> Math.floor(Math.random() *(75-18)+18);
const randomDepartment =()=>positions[Math.floor(Math.random() * positions.length)];




export const dummyState = new Array(15).fill({}).map((element,index)=>{
  return element[index]={ firstName: randomFirstName(), lastName: randomLastName(), age: randomAge(), department: randomDepartment() }
})