const { User } = require("../db/DB_connection");
const { Favorite } = require("../db/DB_connection");

const userCreateNew = async (data) => {
  const [user, created] = await User.findOrCreate({
    where: { email: data.email },
    defaults: {
      password: data.password
    }
  });
  if(!created){
    throw new Error("Error, este usuario ya se encuentra registado");
  }
  return user;
};
const newPostFavorite = async (favoriteData) => {
  await Favorite.create(favoriteData);

  const FavoriteGroup = await Favorite.findAll();
  return FavoriteGroup;
};
const checkLogin = async (query) => {
  const acc = { access: true };
  const userFind = await User.findAll({
    where: {
      email: query.email,
    },
  });
  if (!userFind.length) {
    throw Error("Usuario no encontrado.");
  }
  if (userFind[0].password !== query.password) {
    throw Error("Contraseña incorrecta.");
  }
  return acc;
};
const deleteFavorite = async (id) => {
  const favorite = await Favorite.findByPk(id);
  await favorite.destroy();
  return await Favorite.findAll();
};
module.exports = {
  userCreateNew,
  newPostFavorite,
  checkLogin,
  deleteFavorite,
};
