const express = require('express');
const axios = require('axios');

const app = express();
const port = 3004;


app.get('/', (req, res) => res.send('Hello Network!'));

app.listen(port, () => console.log('Example app listening on port ${port}!'));