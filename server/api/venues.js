const router = require('express').Router()
const {Venue} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const venues = await Venue.findAll()
    res.json(venues)
  } catch (err) {
    next(err)
  }
})

module.exports = router
