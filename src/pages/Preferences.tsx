import { Form, FormCheck,ToggleButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Preferences() {
  interface Genre {
    name: string;
    checked: boolean;
  }

  const genreList: Record<string, Genre> = {
    romance: { name: "Romance", checked: false },
    action: { name: "Action", checked: false },
    drama: { name: "Drama", checked: false },
    horror: { name: "Horror", checked: false },
    slasher: { name: "Slasher", checked: false },
    thriller: { name: "Thriller", checked: false },
    comedy: { name: "Comedy", checked: false },
    fantasy: { name: "Fantasy", checked: false },
    adventure: { name: "Adventure", checked: false },
    science_fiction: { name: "Science Fiction", checked: false },
    animation: { name: "Animation", checked: false },
    true_story: {name: "True Story", checked:false}
    // Add more genres as needed
  };

  const Navigate = useNavigate();
  const [bio, setBio] = useState("");
  const [genres, setGenres] = useState<Record<string, Genre>>(genreList);

  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setGenres((prevGenres) => ({
      ...prevGenres,
      [id]: {
        ...prevGenres[id],
        checked,
      },
    }));
  };

  const handleSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(bio);
    console.log(genres);
    Navigate("/register");
  };

  return (
    <>
    <h1>
      Select favoured genres      
    </h1><br/><br/>
      <Form onSubmit={handleSubmission}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 columns per row
            gap: "10px", // Adjust spacing between buttons
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
          }}
        >
          {Object.entries(genres).map(([key, value]) => (
            <ToggleButton
              style={{
                width: "100%",
                borderRadius: 20,
              }}
              variant='outline-dark'
              name={value.name}
              key={key}
              type="checkbox"
              id={key}
              value={key}
              checked={value.checked}
              onChange={handleCheckBox}
              className="genre-button"
            >
              {value.name}
            </ToggleButton>
          ))}
        </div>
        <br /><br />
  
        <Form.Control type="submit" value={'Next Step'} />
      </Form>
    </>
  );
  
  
  
  
}

export default Preferences;
