const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.model');

const app = express();

app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send('We are on Home');
});

app.post('/api/user', async (req, res) => {
   try{
    const user =  await User.create(req.body);
    res.status(200).json(user);
   }catch(error) {
    res.status(500).json({message: error.message});
   }
});


mongoose.connect('mongodb+srv://hoppzyadmin:muO86hxbLm4VSGkj@hoppzydb.qpnlr.mongodb.net/?retryWrites=true&w=majority&appName=HoppzyDB')
  .then(() => {
    console.log('Connected to DB !')
}).catch(() => {
    console.log("Connection failed");
});

// Listen to server
app.listen(3000);

console.log("Server is listening to: http://localhost:3000");