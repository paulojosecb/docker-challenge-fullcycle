const Sequelize = require("sequelize");

const dbName = "nodedb"; // passar os dados do .env para as constantes
const dbUser = "root";
const dbHost = "db";
const dbPassword = "root";

const connection = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
});

connection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = connection;
