require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db");
const githubRoutes = require("./routes/githubRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/github", githubRoutes);

sequelize.sync().then(() => {
  console.log("Database Connected");

  app.listen(process.env.PORT, () => {
    console.log(`Server Running on ${process.env.PORT}`);
  });
});