const jwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const opts={}
const User = mongoose.model('users');
const keys = require('../config/keys');
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports=passport=>{
    passport.use(new jwtStrategy(opts,(jwt_payload,done)=>{
        User.findById(jwt_payload.id)
        .then(user=>{
            if(user){
                return done(null,user);
            }else{
                return done(null,false);
            }
        })
        .catch(err=>console.error(err));
    }))
}