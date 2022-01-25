const express = require('express');
const bodyParser = require('body-parser');
const bookmarkRoute = require('./routes/bookmark');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use('/bookmarks', bookmarkRoute);

/* istanbul ignore next */
app.get('/', (req, res) => {
	res.send('OK!');
});

module.exports = app;