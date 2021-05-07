const sha256 = require('sha256');
class Blockchain {
  constructor() {
    this.chain = [];
    this.pendingTransactions = [];
    this.createNewBlock(100, 'ARNDOM1', 'RANDOM2');
  }
  createNewBlock(nonce, previousBlockHash, hash) {
    const newBlock = {
      index: this.chain.length + 1,
      timeStamp: Date.now(),
      transactions: this.pendingTransactions,
      nonce,
      hash,
      previousBlockHash
    }
    this.pendingTransactions = [];
    this.chain.push(newBlock);
    return newBlock;
  }

  getLastBock() {
    return this.chain[this.chain.length - 1];
  }

  createNewTransaction(amount, sender, recipient) {
    const newTransaction = {
      amount: amount,
      sender: sender,
      recipient: recipient,
    };
    this.pendingTransactions.push(newTransaction);
    return this.getLastBock()['index'] + 1;
  }

  hashBlock(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
  }

  proofOfWork(previousBlockHash, currentBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while(hash.substring(0,4) !== '0000') {
      nonce++;
      hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    }
    return nonce;
  }

}

module.exports = Blockchain;
