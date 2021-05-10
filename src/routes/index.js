import { v4 } from 'uuid';
import Blockchain from '../model/blockchain';
import rp from 'request-promise';
import { render } from '../../app';

var express = require('express');
var router = express.Router();
const chain = new Blockchain();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    'message': 'Welcome to Blockchain'
  });
});

router.get('/blockchain', (req, res, next) => {
  res.send({
    status: 'OK',
    chain: chain
  });
});

router.get('/mine', (req, res, next) => {
  const nodeAddress = v4().split('-')?.join(' ');
  chain.createNewTransaction(12.5, '00', nodeAddress);

  const lastBlock = chain.getLastBock();
  const previousBlockHash = chain.getLastBock().hash;

  const currentBlockData = {
    transactions: chain.pendingTransactions,
    index: lastBlock.index + 1
  }
  const nonce = chain.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = chain.hashBlock(previousBlockHash, currentBlockData, nonce);
  const newBlock = chain.createNewBlock(nonce, previousBlockHash, blockHash);
  
  res.status(200).send({
    status: 'New block mined successfully',
    block: newBlock
  })
});

router.post('/transaction', (req, res, next) => {
  const blockIndex = chain.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.status(201).send({
    status: 'Success',
    message: `Transaction will be added in block ${blockIndex}`
  })
});

router.post('/broadcast-and-register-node', (req, res) => {
  const newNodeUrl =req.body.newNodeUrl;
  if (chain.networkNodes.indexOf(newNodeUrl) === -1)
    chain.networkNodes.push(newNodeUrl);
  const regNodePromises = [];
  // const options = {
  //   uri: newNodeUrl + '/register-node',
  //   method: 'POST',
  //   body: { newNodeUrl },
  //   json: true
  // }
  // rp(options)
  chain.networkNodes.forEach(networkNodeUrl => {
    const options = {
      uri: newNodeUrl + '/register-node',
      method: 'POST',
      body: { newNodeUrl },
      json: true
    }
    regNodePromises.push(rp(options));
  });
  Promise.all(regNodePromises)
    .then(data => {
      const bulkRegOptions = {
        uri: newNodeUrl + '/register-nodes-bulk',
        method: 'POST',
        body: {allNetworkNodes: [...chain.networkNodes, chain.currentNodeUrl]},
        json: true
      }
      return rp(bulkRegOptions)
    })
    .then(data => {
      res.status(201).send({
        status: 'Success',
        message: 'New Node registered with network successfully'
      })
    })
});

router.post('/register-node', (req, res) => {
  // const newNodeUrl =req.body.newNodeUrl;
  // res.status(201).send({
  //   status: 'Success',
  //   message: `Transaction will be added in block ${blockIndex}`
  // })
});

router.post('/register-nde-bulk', (req, res) => {
  // const newNodeUrl =req.body.newNodeUrl;
  // res.status(201).send({
  //   status: 'Success',
  //   message: `Transaction will be added in block ${blockIndex}`
  // })
});


module.exports = router;
