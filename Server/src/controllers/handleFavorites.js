let myFavorites = [];

const postFav = (req, res) => {

  myFavorites.push(req.body);
    res.json(myFavorites);
};

const deleteFav = (req, res) => {
  try {
    const { id } = req.params;
    myFavorites = myFavorites.filter((char) => char.id !== Number(id));
    res.json(myFavorites);
  } catch (error) {
    {
      message: error.message;
    }
  }
};
module.exports = { postFav, deleteFav };
