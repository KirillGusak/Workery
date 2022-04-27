const express = require('express');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

require('dotenv').config();

const indexRouter = require('./src/routes/indexRouter');
const mainRouter = require('./src/routes/mainRouter');
const addRouter = require('./src/routes/addRouteRouter');
const regRouter = require('./src/routes/registration');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'how are you',
  resave: false,
  store: new FileStore(),
  saveUninitialized: false,
  name: 'sid',
  cookie: { httpOnly: true },
}));

app.use('/', indexRouter);
app.use('/', mainRouter);
app.use('/', addRouter);
app.use('/', regRouter);

const PORT = 3000;

app.use((req, res) => {
  res.render('error');
});

app.listen(PORT, () => {
  console.log('Server has been started on PORT', PORT);
});
