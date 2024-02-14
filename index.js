const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const { log } = require('console');
const app = express();

// connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/shop_db')
    .then((result) => {
        console.log('connected to mongodb');
    }).catch((err) => {
        console.log(err);
    });

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Route
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('shop app listening on http://127.0.0.1:3000')
})