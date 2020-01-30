const router = require("express").Router();
const { Event, Venue, Request } = require("../db/models");
const moment = require("moment");
moment().format();

//see all requests, send a query to sort by date of the event, last name, first name, email, budget, number of people
// by default will sort by the date the request was created in descending order
// eslint-disable-next-line complexity
router.get("/", async (req, res) => {
  try {
    let sortBy = req.query.sortBy;
    if (
      sortBy &&
      sortBy !== "lastName" &&
      sortBy !== "budget" &&
      sortBy !== "date" &&
      sortBy !== "numOfPeople" &&
      sortBy !== "firstName" &&
      sortBy !== "email" &&
      sortBy !== "createdAt"
    ) {
      res.status(400).json({ error: "sortBy parameter is invalid" });
    }
    else if (!sortBy) {
      sortBy = "createdAt";
    }
    let direction = req.query.direction;
    if (direction && direction !== "asc" && direction !== "desc") {
      res.status(400).json({ error: "direction parameter is invalid" });
    }
    const requests = await Request.findAll();

    if (direction === "asc") {
      requests.sort((a, b) => a[sortBy] - b[sortBy]);
    } else {
      requests.sort((a, b) => b[sortBy] - a[sortBy]);
    }
    res.status(200).json({ requests: requests });
  } catch (err) {
    console.log(err);
  }
});


//creates new request in database

router.post("/", async (req, res) => {
  console.log("went to post route", req.body)
  try {
    const newRequest = await Request.create(req.body);
    res.json({value: "success"});
  } catch (error) {
    res.send(error);
  }
});


module.exports = router;
