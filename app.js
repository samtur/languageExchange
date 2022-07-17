const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const User = require('./models/users')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/converse')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('database connected!')
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.engine('ejs', ejsMate)

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/newuser', async (req, res) => {
    const user = new User({ name: 'Beth' });
    await user.save();
    res.send(user);
})


app.listen(3000, () => {
    console.log('Serving port 3000');
})