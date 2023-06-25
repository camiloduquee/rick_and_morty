const {userCreateNew} = require("../services/services.js");

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;
          if (!email || !password)
          throw new Error("Faltan datos.");
        const newUser = await userCreateNew({ email, password });
        res.status(201).json(newUser);
      } catch (error) {
        if (error.message === "Faltan datos.") {
          res.status(400).json(error.message );
        } else {
          res.status(500).json(error.message);
        }
      }
};
module.exports = postUser;

