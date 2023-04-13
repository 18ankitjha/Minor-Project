const express = require('express');
// const cors=require('cors');
// const connectToMongo = require('./db');
const app = express();
// connectToMongo();
const port = 5000;
require('dotenv').config();
app.use(express.json())

app.use('/api/addinventory', require('./routes/addinventory'))
app.use('/api/getinventory', require('./routes/getinventory'))
app.use('/api/updateinventory', require('./routes/updateinventory'))
// app.use('/api/complaint', require('./routes/complaint'));
app.listen(port, () => {
    console.log(`Notebook listening on port ${port}`)
})
