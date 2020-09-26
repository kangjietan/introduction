const express = require('express');

const path = require('path');

const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/google', (req, res) => {
});

app.listen(PORT, () => console.log('Listening on port: ' + PORT));
