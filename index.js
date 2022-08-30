const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const bodyparser = require('body-parser')


// create express app
const app = express();

// mongodb connection
const connetDB = require('./server/database/connection')
connetDB()

dotenv.config( { path : '.env'} );
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan('tiny'));

// parse request by express.json() instead of body-parser
app.use(express.json());
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/imgs', express.static(path.resolve(__dirname, "assets/imgs")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/index'))
app.use('/articles', require('./server/routes/ArticleRoute'))


app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})
