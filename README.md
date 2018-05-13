
# YelpCamp

A website for campers to post their favorite campsites and for other people to be able to make commits about the campsites. Share where you have been so others may enjoy the same places. 

## Updates

May 12 2018

## Getting Started

This web app is programed using javascript with express, EJS, Node. It uses a mongo database to store users, campgrounds and commits. 

### Prerequisites

you will need npm to install the prerequisistes

```
npm init                        this will create your package.jason file
npm install express --save.     this will add the package to your package.jason file
```

### Installing Packages

Express - Fast, unopinionated, minimalist web framework for node.
```
  npm install express --save

  var express = require('express')
  var app = express()
  more info at https://www.npmjs.com/package/express
```

EJS - Embedded JavaScript templates

```
  app.set("view engine", "ejs");
  
  your .html files will be .ejs
  run javascript on your ejs documents use <% %> or <%= %> depending on what you are doining. 
  
  more info at https://www.npmjs.com/package/ejs
```

Body-Parser - Node.js body parsing middleware

```
  npm body-parser --save
  var bodyParser = require('body-parser')
  more info at https://www.npmjs.com/package/body-parser
```

Connect-flash - flash successes and errors at the top of the page until refresh.

```
  npm install connect-flash --save
  var flash = require('connect-flash')
  more info at https://www.npmjs.com/package/connect-flash
```

mongoose - connects to mongo database

```
  npm install mongoose --save
  
  var mongoose = require('mongoose')
  const url = process.env.DATABASEURL || "mongodb:localhost"
  more info at https://www.npmjs.com/package/mongoose
```

Passport - Passport is Express-compatible authentication middleware for Node.js.

note- passport uses passport-local and express-session

```
  npm install passport --save
  npm install passport-local --save
  npm install express-session --save

  var passport = require('passport')
  var LocalStrategy = require("passport-local")
  var session = require("express-session"),
  
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
  
  app.use(require("express-session")({
    secret: "Some secrete string to use for hashing",
    resave: false,
    saveUninitialized: false
}));
  
  more info at https://www.npmjs.com/package/passport
```

cookie-parser - Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.

```
  var cookieParser = require('cookie-parser)
  app.use(cookieParser('secret'));
  more info at https://www.npmjs.com/package/cookie-parser
```

## Deployment

This web application is deployed though heroku. using javascript, node, express and EJS, I used Bootstrap for styling. 

www.andrewgnugent.com

## Author 

Andrew G Nugent