const express = require('express');
const cors = require('cors');
const auth = require('./routes/auth.js')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', auth)

app.listen(4000)