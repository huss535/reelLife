import { Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {useState}  from 'react';




const Signup = () => {

const Navigate = useNavigate();
const [firstName,setFirstName] = useState('');
const [lastName,setLastName] = useState('');
const [date,setDate] = useState('');
const [gender,setGender] = useState('');
const handleSubmit = (event:any) =>{

event.preventDefault()


Navigate("/preferences");



}


  return (
    <>
     
      <Form onSubmit={handleSubmit} >
        <Form.Group   controlId="firstName">
          <Form.Label >First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(event)=>{setFirstName(event.target.value)}}  required/>
        </Form.Group>

        <Form.Group  controlId="lastName"> <br/>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(event)=>{setLastName(event.target.value)}} required/>
        </Form.Group> <br/>

        <Form.Group>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type='date' value={date} onChange={(event)=>{setDate(event.target.value)}} required>
    

        
        </Form.Control> 



        </Form.Group><br/>

        <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select" value={gender} onChange={(event)=>{setGender(event.target.value)}} required defaultValue="">
          <option value="" disabled>Select an option</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </Form.Control>
      </Form.Group>

        <br/><br/>
        <Form.Control type='submit' value='Next Step'/>


      </Form>
    </>
  );
};

export default Signup;
