import { Sequelize } from "sequelize";

// Create a new Sequelize instance and connect to the PostgreSQL database
const sequelize = new Sequelize({
  database: process.env.DB_NAME || "mydb",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "password",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  dialect: "postgres",
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully.",
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
