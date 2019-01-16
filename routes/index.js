const express = require('express');
const router = express.Router();
const subjectController= require('../controllers/subjectController')
const {catchErrors}= require('../handlers/errorHandlers')

// Do work here
/*router.get('/', (req, res) => {
  res.send('Hey! It works!');
});*/

router.get('/',subjectController.homepage);

module.exports = router;
