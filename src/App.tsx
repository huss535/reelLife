import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './pages/Signup';
import Preferences from './pages/Preferences';
import Register from './pages/Register';
import Home from './pages/Home';
function App() {
  
  return (
    <>
     
    <BrowserRouter>

    <Routes> 

    <Route path='/' element={<Home/>}  />
    <Route path='/signUp' element={<Signup/>} />
    <Route path='/preferences' element={<Preferences/>}/>
    <Route path='/register' element={<Register/>}/>

    </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
