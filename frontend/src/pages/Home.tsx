import GenButton from "../components/GenButton";
import { useNavigate} from "react-router-dom";



const Home = () =>{

    const navigate= useNavigate();

    const handleSignUp = () =>{
    navigate("signUp");
    };

    const handleLogIn = () =>{
        navigate("signUp");
    
        };




    return(

        <>
        
        <h1>
            Welcome to the filmverse
        </h1> <br/><br/>

        <GenButton text="Sign up" onClick={handleSignUp}/> <br/><br/>
        <GenButton text="Log In" onClick={handleLogIn} />
        
        
        </>


    );
    
    
    
    
    
    
    







}

export default Home;