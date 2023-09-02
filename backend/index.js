var express = require('express');
var cors = require('cors');
var dotenv = require('dotenv');
var _a = require('firebase/auth'), createUserWithEmailAndPassword = _a.createUserWithEmailAndPassword, getAuth = _a.getAuth;
var initializeApp = require('firebase/app').initializeApp;
dotenv.config();
var firebaseConfig = {
    apiKey: "AIzaSyCmAmnV_PNa5L1Bxr9RIofOdrEXNmVGLLM",
    authDomain: "film-verse.firebaseapp.com",
    projectId: "film-verse",
    storageBucket: "film-verse.appspot.com",
    messagingSenderId: "464066227889",
    appId: "1:464066227889:web:a356f0dc860fdc0a473c90",
    measurementId: "G-WV2C31Z6JF"
};
var app = express();
app.use(cors());
var port = parseInt(process.env.PORT || '4000');
var firebaseApp = initializeApp(firebaseConfig);
var auth = getAuth(firebaseApp);
app.get('/', function (req, res) {
    res.send('Express + TypeScript Server');
});
app.get('/getFirebase', function (req, res) {
    res.send(auth);
});
app.post('/registerUser', function (req, res) {
    var _a = req.query, email = _a.email, password = _a.password; // Using query parameters for demonstration
    createUserWithEmailAndPassword(auth, email, password).then(function (userCredential) { var user = userCredential.user; console.log("User created successfully", user); }).catch(function (error) { console.log(error); });
});
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:".concat(port));
});
