// External dependencies
const express = require('express');

// Initialise router
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/background', (req, res) => {
  res.render('pages/background/index');
});

router.get('/trg', (req, res) => {
  res.render('pages/trg/index');
});

router.get('/information', (req, res) => {
  res.render('pages/information/index');
});

router.get('/portfolio', (req, res) => {
  res.render('pages/portfolio/index');
});

router.get('/governance', (req, res) => {
  res.render('pages/governance/index');
});

router.get('/governance/eab', (req, res) => {
  res.render('pages/governance/eab');
});
router.get('/governance/cda', (req, res) => {
  res.render('pages/governance/cda');
});
router.get('/governance/aida', (req, res) => {
  res.render('pages/governance/aida');
});
router.get('/governance/dda', (req, res) => {
  res.render('pages/governance/dda');
});
router.get('/governance/bida', (req, res) => {
  res.render('pages/governance/bida');
});

router.get('/governance/live-services-board', (req, res) => {
  res.render('pages/governance/live-services-board');
});
router.get('/governance/platform-board', (req, res) => {
  res.render('pages/governance/platform-board');
});

router.get('/information/platform-and-infrastructure', (req, res) => {
  res.render('pages/information/platform-and-infrastructure');
});
router.get('/information/cloud', (req, res) => {
  res.render('pages/information/cloud');
});
router.get('/information/data', (req, res) => {
  res.render('pages/information/data');
});

router.get('/information/interop', (req, res) => {
  res.render('pages/information/interop');
});
module.exports = router;
