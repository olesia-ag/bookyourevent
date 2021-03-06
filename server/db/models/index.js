const { Venue } = require("./venue");
const { Event } = require("./event");
const { Client } = require("./client");
const { User } = require("./user");
const { Request } = require("./request");

Venue.hasMany(Event, { constraints: false });
Venue.belongsTo(Event, { constraints: false });

Client.hasMany(Event);
Client.belongsTo(Event, { constraints: false });

module.exports = {
  Venue,
  Event,
  Client,
  User,
  Request
};
