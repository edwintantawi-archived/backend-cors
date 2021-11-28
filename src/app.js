const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    preflightContinue: true,
    origin: 'https://frontend-cors.netlify.app',
    credentials: true,
  })
);
//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

routes(app);

app.listen(PORT, () =>
  console.log(`server running in http://localhost:${PORT}`)
);
