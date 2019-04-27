const express = require('express');
const mongoose = require('mongoose');
const BodyParser = require('body-parser');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const app = express();
const passport = require('passport');
//body parser 
app.use(BodyParser.urlencoded({extended:false}));
app.use(BodyParser.json());
//DB CONFIG
const db= require('./config/keys').mongoURI;
//Connect to mongodb
mongoose.connect(db,{useNewUrlParser:true})
.then(console.log('MongoDB connected')).catch(err=>console.log(err));

//Passport mdw
app.use(passport.initialize());

//pass config
require('./config/passport')(passport);
//use routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);
const PORT = 5000 || process.env.PORT;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))