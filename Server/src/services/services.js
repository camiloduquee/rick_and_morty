const { User, Favorite } = require("../db/DB_connection");

const userCreateNew = async (data) => {
  const [user, created] = await User.findOrCreate({
    where: { email: data.email },
    defaults: {
      password: data.password,
    },
  });
  if (!created) {
    throw new Error("Error, este usuario ya se encuentra registrado");
  }
  return user;
};
const newPostFavorite = async ({
  UserId,
  id,
  name,
  status,
  gender,
  origiName,
  image,
}) => {
  const [newPostFav] = await Favorite.findOrCreate({
    where: { id, name, status, gender, origiName, image },
  });

  await newPostFav.addUsers(UserId);

  const users = await User.findOne({
    where: { id: UserId },
    include: { model: Favorite, as: "Favorites" },
  });
  return users.Favorites;
};
const checkLogin = async (query) => {
  const access = { status: true };
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
  access.id = userFind[0].id;
  return access;
};
const deleteFavorite = async ({id, UserId}) => {
  
   const fav = await Favorite.findByPk(id);

   if (fav) await fav.removeUsers(UserId);

   const users = await User.findOne({
    where: { id: UserId },
    include: { model: Favorite, as: "Favorites" },
  });
   
  return users.Favorites;

};

module.exports = {
  userCreateNew,
  newPostFavorite,
  checkLogin,
  deleteFavorite,
};
