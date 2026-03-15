const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errHandler = require('./middlewares/errHandler')
const app = express();

app.use(bodyParser.json());
app.use(cors())

app.use('/user',require('./routes/Accouts'))


app.use(errHandler)

module.exports = app