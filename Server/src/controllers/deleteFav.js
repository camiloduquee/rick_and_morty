const { deleteFavorite } = require("../services/services.js");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    const favDelete = await deleteFavorite(id);
    res.status(200).json(favDelete);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = deleteFav;
