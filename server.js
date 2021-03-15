  
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const PORT = process.env.SERVERPORT;
const api = require('./routes/api');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);

app.listen(PORT, function(){
    console.log('Listening on: ' + PORT);
})