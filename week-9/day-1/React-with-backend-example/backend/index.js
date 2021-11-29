const express = require('express');
const cors = require('cors');
const getStudentsRoute = require('./routes/getStudents')

const app = express();

app.use(cors());
app.use('/getStudents', getStudentsRoute)

app.listen(4000)