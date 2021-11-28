const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.json({ message: 'fail, no token' });

  return res.json({ message: 'hello user', token });
});

router.get('/login', (_, res) => {
  const dummyToken = `tkn-${+new Date()}`;
  res.cookie('token', dummyToken, {
    sameSite: 'none',
    secure: true,
    httpOnly: true,
    expires: new Date(Date.now() + 9999999),
  });
  return res.json({ message: 'token cookie added' });
});

module.exports = router;
