const express = require('express');

const path = require('path');

require('./bot.js');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log('Listening on port: ' + PORT));
