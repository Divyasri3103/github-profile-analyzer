const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const GithubProfile = sequelize.define("GithubProfile", {
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  name: DataTypes.STRING,
  followers: DataTypes.INTEGER,
  following: DataTypes.INTEGER,
  publicRepos: DataTypes.INTEGER,
  bio: DataTypes.TEXT,
  profileUrl: DataTypes.STRING,
});

module.exports = GithubProfile;