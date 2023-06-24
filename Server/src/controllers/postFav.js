const { newPostFavorite } = require("../services/services.js");

const postFav = async (req, res) => {
  try {
    const { UserId, id, name, status, gender, origin, image } = req.body;
    
    if (
      ![id, name, status, gender, origin, image].every(
        (currentValue) => currentValue.length !== 0
      )
    )
      throw new Error("Faltan datos.");
    
      const origiName = origin.name;
    const newFavorite = await newPostFavorite({
      UserId,
      id,
      name,
      status,
      gender,
      origiName,
      image,
    });

    res.status(201).json(newFavorite);
  } catch (error) {
    if (error.message === "Faltan datos") {
      res.status(401).json(error.message);
    } else {
      res.status(500).json(error.message);
    }
  }
};
module.exports = postFav;
