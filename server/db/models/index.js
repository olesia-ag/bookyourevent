const {Venue} = require('./venues')
const {Event} = require('./event')
const {Client} = require('./client')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

Venue.hasMany(Event)
Venue.belongsTo(Event, {constraints: false})

Client.hasMany(Event)
Client.belongsTo(Event, {constraints: false})

module.exports = {
  Venue,
  Event,
  Client
}
