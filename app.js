const express = require('express');
const path = require('path');

const session = require('express-session');

require('dotenv').config();

// const indexRouter = require('./routes/');
// const entriesRouter = require('./routes/entries');
// const userRouter = require('./routes/userRoter');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'views'));

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
  console.log('Server has been started on PORT', PORT);
});
