const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MONGODB connected successfully"))
    .catch((error) => console.log(error));


const app = express();


app.use(cors({
    origin: "http://localhost:5173/",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
    ],
    credentials: true

}));

app.use(cookieParser());

app.use(express.json());




app.listen(PORT, 
    () => { console.log(`Backend server is running on port ${PORT}`) }
);

