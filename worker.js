
var debug = require('debug')('gmailcrawler');
var receive = require('../app').messaging.receive;

function doWork(message){
	debug(message);
};

receive("google", doWork);
