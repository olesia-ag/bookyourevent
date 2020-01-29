const Sequelize = require('sequelize')
const db = require('../db')

const Request = db.define('request', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true,
    unique:true
  },
  numOfPeople: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  budget: {
    type: Sequelize.INTEGER
  },
  comment:{
    type: Sequelize.TEXT
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = {Request}
