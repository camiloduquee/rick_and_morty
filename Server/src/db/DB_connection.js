require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, PORT, BDD } = process.env;
const { Sequelize } = require("sequelize");

const favoriteModel = require("./models/Favorite");
const userModel = require("./models/User");
// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${BDD}`,
  { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
favoriteModel(database);
userModel(database);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!

const { User, Favorite } = database.models;
User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });
module.exports = {
  User,
  Favorite,
  conn: database,
};
