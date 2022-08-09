const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.get('/api/goals', (req,res) => {
    res.status(200).json({message:'getting'});
});

app.listen(port,() => console.log('listening'+port));