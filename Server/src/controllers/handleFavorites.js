let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites.filter((char) => char.id !== id);
  res.json(myFavorites);
};
module.exports = { postFav, deleteFav };
