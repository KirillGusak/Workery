const express = require('express');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const checkAuth = require('./src/middlewares/allChecks');
require('dotenv').config();

const indexRouter = require('./src/routes/indexRouter');
const mainRouter = require('./src/routes/mainRouter');
const addRouter = require('./src/routes/addRouteRouter');
const regRouter = require('./src/routes/registration');
const routeRouter = require('./src/routes/routeRouter');
const aboutRouter = require('./src/routes/aboutRouter');
const deleteRouter = require('./src/routes/deleteRoute');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'how are you',
    resave: false,
    store: new FileStore(),
    saveUninitialized: false,
    name: 'sid',
    cookie: { httpOnly: true },
  }),
);

app.use((req, res, next) => {
  res.locals.userId = req.session?.userId;
  res.locals.name = req.session?.name;
  next();
});

app.use('/', indexRouter);
app.use('/', mainRouter);
app.use('/', addRouter);
app.use('/', regRouter);
app.use('/', routeRouter);
app.use('/', aboutRouter);
app.use('/', deleteRouter);

const PORT = 3000;

app.use((req, res) => {
  res.render('error');
});

app.listen(PORT, () => {
  console.log('Server has been started on PORT', PORT);
});
