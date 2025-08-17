const db = require("./database/db.js");
const express = require("express");
require('dotenv').config({ path: __dirname + '/.env' });
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});