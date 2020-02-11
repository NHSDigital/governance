// External dependencies
const express = require('express');

// Initialise router
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/positioning', (req, res) => {
  res.render('pages/positioning/index');
});

router.get('/trg', (req, res) => {
  res.render('pages/trg/index');
});

router.get('/content', (req, res) => {
  res.render('pages/content/index');
});

router.get('/portfolio', (req, res) => {
  res.render('pages/portfolio/index');
});

router.get('/governance', (req, res) => {
  res.render('pages/governance/index');
});

module.exports = router;
