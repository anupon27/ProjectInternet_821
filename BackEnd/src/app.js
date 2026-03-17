const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errHandler = require('./middlewares/errHandler')
const app = express();


app.use(bodyParser.json());
app.use(cors())

app.use('/Accounts',require('./routes/Accouts'))
app.use('/Report',require('./routes/Report'))


app.use(errHandler)

module.exports = app