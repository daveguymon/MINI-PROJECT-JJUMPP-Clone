const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./../config');
const port = 3030;

// Create a new Express application.
const app = express();

// Configure the Facebook strategy for use by Passport.
passport.use(new FacebookStrategy({
  clientID: config.FACEBOOK_APP_ID,
  clientSecret: config.FACEBOOK_APP_SECRET,
  callbackURL: "http://localhost:3030/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, cb) {
  console.log("Access Token is: ", accessToken)
  return cb(null, profile);
}));



// Configure Passport authenticated session persistence.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Configure view engine to render EJS templates.
app.set('view', __dirname + '/views');
app.set('view engine', 'ejs');

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Define routes.
app.get('/auth/facebook',
  passport.authenticate('facebook', { authType: 'rerequest', scope: ['user_friends', 'manage_pages']})
);

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(req.user)
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/');
  });

app.get('/me',
function(req, res) {
  res.send(req.user)
})

app.get('/',
  function(req, res) {
    res.render('home', { user: req.user });
  });

  app.get('/login',
  function(req, res){
    res.render('login');
  });

  app.get('/login/facebook',
  passport.authenticate('facebook'));

  app.get('/login/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

  app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });

app.listen( port, ()=> {console.log(`Listening on port: ${port}.`)});
