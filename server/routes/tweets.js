
const express = require('express');
const userHelper = require('../lib/util/user-helper');

const tweetsRoutes = express.Router();

// Functions for tweet routing and random user generation. This code was supplied by
// Lighthouse Labs and was not edited by Erin Toth.

module.exports = function (DataHelpers) {
  tweetsRoutes.get('/', (req, res) => {
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
    });
  });

  tweetsRoutes.post('/', (req, res) => {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body' });
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    const tweet = {
      user,
      content: {
        text: req.body.text,
      },
      created_at: Date.now(),
    };

    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json(tweet);
      }
    });
  });

  return tweetsRoutes;
};
