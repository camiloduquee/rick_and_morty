const DATA = require("../utils/users");
const login = (req, res) => {
const { email, password } = req.query;
  DATA.find((data) => data.email === email && data.password === password)
    ? res.status(200).json({ access: true })
    : res.status(200).json({ access: false });
}
module.exports = login;