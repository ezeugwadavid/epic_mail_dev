require("dotenv").config();
const express = require('express');
path = require('path');
const app = express();
const userRouter = require("./api/users/user.router");


app.use(express.json());

// Set public folder
//app.set('view-engine', 'ejs')
//app.use(express.static(path.join(__dirname, 'public', 'pages')));

//app.set('views', __dirname + '/views');

app.use("/api/users", userRouter);



 
    




























app.listen(process.env.APP_PORT)