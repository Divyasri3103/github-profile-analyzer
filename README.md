GitHub Profile Analyzer API
Description

A backend application built using Node.js, Express.js, MySQL, Sequelize, and the GitHub Public API. The application analyzes GitHub profiles, stores profile insights in MySQL, and provides REST APIs to retrieve analyzed data.

Features
Analyze GitHub profile by username
Store profile details in MySQL
Fetch all analyzed profiles
Fetch a single analyzed profile


Tech Stack
Node.js
Express.js
MySQL
GitHub API


API Endpoints

POST /api/github/analyze/

GET /api/github/profiles

GET /api/github/profile/


Run Project

npm install

npm start