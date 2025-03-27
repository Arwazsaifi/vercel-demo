const exp = require('constants');
const express = require('express')
const app = express();
const home = require('./routes/home')
require('dotenv').config();

app.use(express.json());
app.use('/home',home)
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> {console.log(`Server is running on ${PORT}`)})