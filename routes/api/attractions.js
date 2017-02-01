var express = require('express');
var router = express.Router();

var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');

router.get('/hotels', (req, res) => {
	Hotel.findAll()
	.then(hotels => {
		res.send(hotels);
	});
});

router.get('/restaurants', (req, res) => {
  Restaurant.findAll()
	.then(restaurants => {
		res.send(restaurants);
	});
});

router.get('/activities', (req, res) => {
	Activity.findAll()
	.then(activities => {
		res.send(activities);
	});
});

module.exports = router;