const GithubProfile = require("../models/GithubProfile");
const { getGithubProfile } = require("../services/githubService");

const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const data = await getGithubProfile(username);

    const profile = await GithubProfile.create({
      username: data.login,
      name: data.name,
      followers: data.followers,
      following: data.following,
      publicRepos: data.public_repos,
      bio: data.bio,
      profileUrl: data.html_url,
    });

    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllProfiles = async (req, res) => {
  const profiles = await GithubProfile.findAll();

  res.json(profiles);
};

const getSingleProfile = async (req, res) => {
  const profile = await GithubProfile.findByPk(req.params.id);

  if (!profile) {
    return res.status(404).json({
      message: "Profile not found",
    });
  }

  res.json(profile);
};

module.exports = {
  analyzeProfile,
  getAllProfiles,
  getSingleProfile,
};