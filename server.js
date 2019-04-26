const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const app = express();
//DB CONFIG
const db= require('./config/keys').mongoURI;
//Connect to mongodb
mongoose.connect(db,{useNewUrlParser:true})
.then(console.log('MongoDB connected')).catch(err=>console.log(err));

app.get('/',(req,res)=>res.send('Hello'));
//use routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);
const PORT = 5000 || process.env.PORT;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))