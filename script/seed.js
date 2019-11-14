'use strict'

const db = require('../server/db')
const {Venue} = require('../server/db/models')
const moment = require('moment')
moment().format()

const ranges = [
  [new Date(Date.UTC(2020, 5, 23)), new Date(Date.UTC(2020, 5, 25))],
  [new Date(Date.UTC(2019, 11, 23)), new Date(Date.UTC(2019, 11, 24))],
  [new Date(Date.UTC(2020, 2, 4)), new Date(Date.UTC(2020, 2, 5))],
  [new Date(Date.UTC(2020, 6, 8)), new Date(Date.UTC(2020, 8, 10))],
  [new Date(Date.UTC(2020, 9, 23)), new Date(Date.UTC(2020, 9, 24))],
  [new Date(Date.UTC(2020, 10, 3)), new Date(Date.UTC(2020, 10, 5))],
  [new Date(Date.UTC(2020, 3, 12)), new Date(Date.UTC(2020, 3, 15))],
  [new Date(Date.UTC(2020, 7, 9)), new Date(Date.UTC(2020, 7, 10))],
  [new Date(Date.UTC(2020, 9, 5)), new Date(Date.UTC(2020, 9, 6))]
]

const venues = [
  {
    name: 'Grand Ballroom',
    booked: [ranges[0], ranges[1], ranges[2]],
    maxcapacity: '400'
  },
  {
    name: 'Renaissance Room',
    booked: [ranges[1], ranges[4], ranges[5], ranges[6]],
    maxcapacity: '180'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(
    venues.map(venue => {
      return Venue.create(venue)
    })
  )

  // console.log(`seeded ${venues.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
