const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`;

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios(`${URL}${id}`);
    const characterId = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
    };
    res.status(200).json(characterId);
  } catch (error) {
    if (error.response.status === 404) {
      res.status(404).send("Not fount character");
    } else {
      res
        .status(500)
        .json(error.message);
    }
  }
};

module.exports = getCharById;
