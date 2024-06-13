const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const dotenv = require('dotenv');
const { connectionTodb } = require('./config/dbConfig');
const authRoutes =require ('./routes/auth.routes')
const courseRoutes =require ('./routes/course.routes')
const userRoutes =require ('./routes/user.routes')

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/courses', courseRoutes);
app.use('/users', userRoutes);

app.get('/',(req,res)=>{
    res.send('welcome to lms');
})
const PORT = process.env.PORT || 8080;

app.listen(PORT,async()=>{
    await connectionTodb();
    console.log(`server is running on ${PORT}`)
})