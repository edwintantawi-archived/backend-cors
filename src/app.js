require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.ORIGIN || 'http://127.0.0.1:5500', // [allowed origin]
    credentials: true, // [accept cookie and Authorization]
  })
);

app.use(cookieParser()); // [allowed to handle cookie]

// [act like auth feature to validate accessToken from cookie]
app.get('/api/auth', (req, res) => {
  const { accessToken } = req.cookies;
  if (!accessToken)
    return res.json({
      status: 'fail',
      message: 'accessToken not found',
    });

  return res.json({
    status: 'success',
    message: 'authenticated',
    accessToken,
  });
});

// [act like login feature and return auth token by cookie]
app.get('/api/auth/login', (_, res) => {
  const accessToken = `tkn-${+new Date()}`;

  const expires = new Date(Date.now() + 9999999);

  res.cookie('accessToken', accessToken, {
    sameSite: 'none', // [allow cross-origin] [require secure]
    secure: true, // [https only] [use in production]
    httpOnly: true, // [http] [https] [not accessable by javascript]
    expires, // [expires]
  });

  return res.json({
    status: 'success',
    message: 'accessToken cookie added',
    accessToken,
  });
});

app.listen(PORT, () =>
  console.log(`server running in http://localhost:${PORT}`)
);
