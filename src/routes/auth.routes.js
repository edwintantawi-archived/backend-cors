const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  // res.cookie(
  //   'token',
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  //   {
  //     sameSite: 'none',
  //     secure: true,
  //     httpOnly: true,
  //     expires: new Date(Date.now() + 9999999),
  //   }
  // );
  return res.json({ message: 'token cookie added' });
});

module.exports = router;
