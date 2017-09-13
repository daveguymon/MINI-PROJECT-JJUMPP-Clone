const express = require('express');
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const port = 3030;

const app = express();

app.listen( port, ()=> {console.log(`Listening on port: ${port}.`)});
