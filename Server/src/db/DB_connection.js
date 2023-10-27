require("dotenv").config();
const { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } = process.env;
const { Sequelize } = require("sequelize");

const favoriteModel = require("./models/Favorite");
const userModel = require("./models/User");
// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty

const database = new Sequelize(
  `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`,
  { 
    logging: false, 
    native: false,
    dialectOptions: {
      ssl: {
        require: true, // Habilita SSL
      },
    },
  }
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
User.belongsToMany(Favorite, { through: "user_favorite", timestamps: false  });
Favorite.belongsToMany(User, { through: "user_favorite", timestamps: false});
module.exports = {
  database,
  ...database.models
};
