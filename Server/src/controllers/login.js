const { checkLogin } = require("../services/services.js");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (email.length === 0 || password.length === 0)
      throw new Error("Faltan datos.");
    const findData = await checkLogin({ email, password });
    res.status(200).json(findData);
  } catch (error) {
    if (error.message === "Faltan datos.") {
      res.status(400).json(error.message);
    }
    res.status(500).json(error.message);
  }
};
module.exports = login;
