const { User } = require("../models/User");

let auth = (req, res, next) => {
  // client cookie에서 token가져오기
  const token = req.cookies.x_auth;
  console.log(req)
  //user 찾기
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };