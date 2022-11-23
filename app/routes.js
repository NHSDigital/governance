// External dependencies
const express = require('express');

// Initialise router
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/trg', (req, res) => {
  res.render('pages/trg/index');
});

router.get('/information', (req, res) => {
  res.render('pages/information/index');
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
router.get('/governance/cpo', (req, res) => {
  res.render('pages/governance/cpo');
});
router.get('/governance/lsb', (req, res) => {
  res.render('pages/governance/lsb');
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
router.get('/information/glossary', (req, res) => {
  res.render('pages/information/glossary');
});
router.get('/information/interop', (req, res) => {
  res.render('pages/information/interop');
});
router.get('/trg/sccc', (req, res) => {
  res.render('pages/trg/sccc');
});
router.get('/trg/iccc', (req, res) => {
  res.render('pages/trg/iccc');
});
router.get('/trg/ua', (req, res) => {
  res.render('pages/trg/ua');
});
router.get('/trg/smccc', (req, res) => {
  res.render('pages/trg/smccc');
});
router.get('/trg/sus', (req, res) => {
  res.render('pages/trg/sus');
});
router.get('/trg/duccc', (req, res) => {
  res.render('pages/trg/duccc');
});
router.get('/trg/interoperability', (req, res) => {
  res.render('pages/trg/interoperability');
});
router.get('/trg/lss', (req, res) => {
  res.render('pages/trg/lss');
});
router.get('/trg/development', (req, res) => {
  res.render('pages/trg/development');
});
router.get('/trg/ea', (req, res) => {
  res.render('pages/trg/ea');
});
router.get('/trg/infrastructure', (req, res) => {
  res.render('pages/trg/infrastructure');
});
router.get('/trg/dccc', (req, res) => {
  res.render('pages/trg/dccc');
});
router.get('/trg/saccc', (req, res) => {
  res.render('pages/trg/saccc');
});
router.get('/trg/tccce', (req, res) => {
  res.render('pages/trg/tccce');
});
router.get('/trg/contacts', (req, res) => {
  res.render('pages/trg/contacts');
});
router.get('/cookie-policy', (req, res) => {
  res.render('pages/cookie-policy');
});
router.get('/cookie-confirmation', (req, res) => {
  res.render('pages/cookie-confirmation');
});
router.get('/updating-information', (req, res) => {
  res.render('pages/updating-information');
});
module.exports = router;
