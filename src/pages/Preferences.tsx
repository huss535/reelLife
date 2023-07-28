import {Form,FormCheck} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Preferences(){
    interface Genre {
        name: string;
        checked: boolean;
      }
    const genreList:Record<string,Genre> = {
       romance : { name: "Romance", checked: false },
       action:  { name: "Action", checked: false },
       drama: { name: "Drama", checked: false },
       horror:  { name: "Horror", checked: false },
        slasher: { name: "Slasher", checked: false },
       thriller:  { name: "Thriller", checked: false },
        comedy: { name: "Comedy", checked: false },
        fantasy: { name: "Fantasy", checked: false },
       adventure: { name: "Adventure", checked: false },
        science_fiction: { name: "Science Fiction", checked: false },
       animation: { name: "Animation", checked: false },
        // Add more genres as neededs
    };
const Navigate = useNavigate();
const [bio,setBio] = useState("");
const [genres,setGenres] = useState<Record<string, Genre>>(genreList);

const handleCheckBox = (event:any) => {
    const { id, checked } = event.target;
    setGenres((prevGenres) => ({
      ...prevGenres,
      [id]: {
        ...prevGenres[id],
        checked,
      },
    }));
  };
  


const handleSubmission = (event:any) =>{
event.preventDefault();
console.log(bio);
console.log(genres);
Navigate("/register");



};
return(

<>
<Form onSubmit={handleSubmission} >
<Form.Group>
<Form.Label>BIO</Form.Label>

<Form.Control as='textarea'  style={{ width: '100%', maxWidth: '600px' }} rows={3} onChange={(event)=>{setBio(event.target.value)}}/>
</Form.Group> <br/><br/>

<Form.Group>
          {Object.entries(genreList).map(([key,value]) => (
            <FormCheck
              key={key}
              type="checkbox"
              id={key}
              value={key}
              label={value.name}
              
              onChange={handleCheckBox}
              
            />
          ))}
        </Form.Group>

<br/><br/>

<Form.Control type='submit' value={'Next Step'}/>
</Form>
</>

);



}



export default Preferences;