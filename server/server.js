var express =require("express");
var session = require("express-session");
var cookieParser = require('cookie-parser');
var app = express();
var router = require("./router/router");
var bodyParser = require("body-parser");
app.use(cookieParser("ooooooo"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret:"ooooooo",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge:  4*60 * 60 * 1000,
    },
    key: '44444333',
}));


router(app);
app.listen(7800);




