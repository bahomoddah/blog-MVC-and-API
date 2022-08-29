const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const bodyparser = require('body-parser')

const connetDB = require('./server/database/connection')

// create express app
const app = express();

dotenv.config( { path : '.env'} );
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan('tiny'));

// mongodb connection
connetDB()

// parse request by express.json() instead of body-parser
app.use(express.json());
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/images")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/index'))
app.use('/articles', require('./server/routes/ArticleRoute'))
var usersRouter = require('./server/routes/UserRoute');
app.use('/users', usersRouter);


app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})
