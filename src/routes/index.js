import Blockchain from '../model/blockchain';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    'message': 'Welcome to Blockchain'
  });
});

router.get('/blockchain', (req, res, next) => {
  const chain = new Blockchain();
  res.send({
    status: 'OK',
    chain: chain
  });
});

router.get('/mine', (req, res, next) => {
  res.send(' Get Proof of Work');
});

router.post('/transaction', (req, res, next) => {
  // res.send('View all the blockchain');
});


module.exports = router;
