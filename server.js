const db = require("./database/db.js");
const express = require("express");
require('dotenv').config({ path: __dirname + '/.env' });
const app = express();
const port = process.env.PORT || 3000;

// 1. Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');

// 2. Route for landing page
app.get('/', (req, res) => {
    res.render('user/BerandaUser');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});