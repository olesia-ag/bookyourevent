const {Venue} = require('./venue')
const {Event} = require('./event')
const {Client} = require('./client')



Venue.hasMany(Event, {constraints: false})
Venue.belongsTo(Event, {constraints: false})

Client.hasMany(Event)
Client.belongsTo(Event, {constraints: false})

module.exports = {
  Venue,
  Event,
  Client
}
