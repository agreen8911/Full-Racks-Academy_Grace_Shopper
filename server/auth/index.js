const router = require('express').Router();
const {
  models: { User },
} = require('../db');
module.exports = router;

router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(err);
    }
  }
});

router.get('/me', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

// const requireToken = async (req, res, next) => {
// 	try {
// 		const token = req.headers.authorization
// 		const user = await User.findByToken(token)
//         req.user = user
// 		next()
// 	} catch (e) {
// 		next(e)
// 	}
// }

// const isAdmin = (req, res, next) => {
// 	requireToken(req, res, () => {
//     if (!req.user.isAdmin) {
//       return res.status(403).send('You shall not pass!')
//     } else {
//       next()
//     }
//   })
// }

// module.exports = { requireToken, isAdmin }
