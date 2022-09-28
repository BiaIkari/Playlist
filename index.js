require("dotenv").config();
const express = require('express')
const app = express();
const connectToDb = require("./database/db")

const port = process.env.PORT || 3000;

connectToDb();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`)
);