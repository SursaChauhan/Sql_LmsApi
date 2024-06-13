const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const dotenv = require('dotenv');
const { connectionTodb } = require('./config/dbConfig');


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3306;

app.listen(PORT,async()=>{
    await connectionTodb();
    console.log(`server is running on ${PORT}`)
})