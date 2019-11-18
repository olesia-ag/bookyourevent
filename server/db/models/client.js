const Sequelize = require('sequelize')
const db = require('../db')

const Client = db.define('client', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = {Client}
