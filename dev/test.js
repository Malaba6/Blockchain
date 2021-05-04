const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
const previousBlockHash = '876HYSUMNJSUOKSLJHSGBHS98';
const currentBlockData = [
  {
		amount: 2000,
		sender: 'ERIC09JISJKSNNSHJSY765O',
		recipient: 'JAMES2786gyhsbjskisuusbnxkl',
  },
  {
    amount: 1000,
    sender: 'ERIC09JISJKSNNSHJSY765O',
    recipient: 'JAMES2786gyhsbjskisuusbnxkl',
  },
	{
		amount: 3000,
		sender: 'ERIC09JISJKSNNSHJSY765O',
		recipient: 'JAMES2786gyhsbjskisuusbnxkl',
	}
];
const nonce = 100;
// bitcoin.createNewBlock(2345, 'BHSUYSDOI9S', 'uhygtfrd908lok7oid9');
// bitcoin.createNewTransaction(100, 'ERICBHSUYSLPJIU6', 'DIVINEuhygtfrd90iojhgfdrttt7');
// bitcoin.createNewBlock(2349, 'BHSUYOPLKFDRSCVBH', 'uhygtfrd97788hbb954');
// bitcoin.createNewTransaction(877, 'ERICBHSUYSLPJIU6', 'DIVINEuhygtfrd90iojhgfdrttt7');
// bitcoin.createNewTransaction(1000, 'ERICBHSUYSLPJIU6', 'DIVINEuhygtfrd90iojhgfdrttt7');

console.log(bitcoin);
