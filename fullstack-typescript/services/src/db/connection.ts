import { Sequelize } from "sequelize-typescript";

import accessEnv from "#root/helpers/accessEnv";

const dbURL = accessEnv("DB_URL");

const sequelize = new Sequelize(dbURL, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true,
  },
  logging: false,
  // models
});

export default sequelize;
