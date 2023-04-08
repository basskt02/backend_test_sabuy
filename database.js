import Sequelize from "sequelize";

const database = new Sequelize("JOB_INTERVIEW", "root", "admin", {
  host: "127.0.0.1",
  dialect: "mariadb",
});

database.sync();

export default database;
