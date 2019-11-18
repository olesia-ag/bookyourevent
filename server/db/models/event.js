const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING,
    allownull: false
  },
  type: {
    type: Sequelize.STRING
  },
  attendance: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.DATE
  }
})

module.exports = {Event}
