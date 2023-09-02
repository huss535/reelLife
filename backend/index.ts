const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createUserWithEmailAndPassword, getAuth } = require('firebase/auth');
const { initializeApp } = require('firebase/app');

dotenv.config();
const firebaseConfig = {
  apiKey: "AIzaSyCmAmnV_PNa5L1Bxr9RIofOdrEXNmVGLLM",
  authDomain: "film-verse.firebaseapp.com",
  projectId: "film-verse",
  storageBucket: "film-verse.appspot.com",
  messagingSenderId: "464066227889",
  appId: "1:464066227889:web:a356f0dc860fdc0a473c90",
  measurementId: "G-WV2C31Z6JF"
};

const app: any = express();
app.use(cors());
const port:number =  parseInt(process.env.PORT || '4000');
const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);

app.get('/', (req: any, res: any) => {
  res.send('Express + TypeScript Server');
});

app.get('/getFirebase',(req: any, res: any) => {
    res.send(auth);
  });

app.post('/registerUser',(req: any, res: any) => {
  const { email, password } = req.query; // Using query parameters for demonstration
  
  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential:any)=>{const user = userCredential.user;  console.log("User created successfully", user);}).catch(
(error:any)=>{console.log(error);});
 

});
app.listen(port, () => { 
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});