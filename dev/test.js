const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
bitcoin.createNewBlock(2345, 'BHSUYSDOI9S', 'uhygtfrd908lok7oid9');
bitcoin.createNewTransaction(100, 'ERICBHSUYSLPJIU6', 'DIVINEuhygtfrd90iojhgfdrttt7');
bitcoin.createNewBlock(2349, 'BHSUYOPLKFDRSCVBH', 'uhygtfrd97788hbb954');
bitcoin.createNewTransaction(877, 'ERICBHSUYSLPJIU6', 'DIVINEuhygtfrd90iojhgfdrttt7');
bitcoin.createNewTransaction(1000, 'ERICBHSUYSLPJIU6', 'DIVINEuhygtfrd90iojhgfdrttt7');
bitcoin.createNewTransaction(3000, 'ERICBHSUYSLPJIU6', 'DIVINEuhygtfrd90iojhgfdrttt7');

console.log('*** Blockchain **** ',bitcoin );
