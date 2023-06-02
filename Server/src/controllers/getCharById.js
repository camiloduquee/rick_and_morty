const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`;

const getCharById = (req, res) => {
  const { id } = req.params;
  axios(`${URL}${id}`)
    .then(
      ({ data }) => {
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
      },
      (reason) => {
        res.status(404).json({message:reason.message});
      }
    )
    .catch((error) => res.status(500).json({message:error.message}));
};

module.exports = getCharById;
