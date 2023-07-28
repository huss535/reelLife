"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTH,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.BUCKET,
    messagingSenderId: process.env.MESSAGE,
    appId: process.env.APPID,
    measurementId: process.env.MEASURMENT
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = parseInt(process.env.PORT || '4000');
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get('/getFirebase', (req, res) => {
    res.send(firebaseConfig);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
