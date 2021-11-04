'use strict'
const Sequelize = require('sequelize-mock');
const db={};
const sequelize = new Sequelize;

db.news = require('../__mocks__/news.js');
db.news = db.news;

module.exports = db;