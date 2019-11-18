const router = require('express').Router()
const {Venue} = require('../db/models')

router.post('/isavailable', (req, res) => {
  Venue.findByPk(req.body.venueid).then(venue => {
    venue.booked.forEach(element => {
      let dateToFind = new Date(req.body.date)

      //code for checking range:
      if (dateToFind.getTime() === element[0].value.getTime()) {
        res.json({value: false})
      } else if (dateToFind.getTime() === element[1].value.getTime()) {
        res.send(false)
      } else if (
        dateToFind.getTime() > element[0].value.getTime() &&
        dateToFind.getTime() < element[1].value.getTime()
      ) {
        res.send(false)
      } else {
        res.send(true)
      }
    })
  })
})

// router.post('/event', (req, res) => {})

router.get('/', async (req, res, next) => {
  try {
    const venues = await Venue.findAll()
    res.json(venues)
  } catch (err) {
    next(err)
  }
})

module.exports = router
