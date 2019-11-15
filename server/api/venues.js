const router = require('express').Router()
const {Venue} = require('../db/models')
// const http=require('http')

router.get('/', async (req, res, next) => {
  try {
    const venues = await Venue.findAll()
    res.json(venues)
  } catch (err) {
    next(err)
  }
})

router.get('/isavailable', (req, res) => {
  Venue.findByPk(req.body.venueid).then(venue => {
    venue.booked.forEach(element => {
      console.log('this elem:', element)
      let dateToFind = new Date(req.body.date)
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

module.exports = router
