const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');

const app = express();

/**
 * Database setup
 */

mongoose.connect('mongodb://localhost:27017/upload',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); //informa o método GET, POST,.. e o tempo decorrido dele

app.use(require("./routes"));


app.listen(3000);