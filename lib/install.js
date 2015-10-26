'use strict';
var log = require('logalot');
var bin = require('./');

bin.run(['--version'], function (err) {
	if (err) {
		log.error(err.message);
		log.error('hub binary test failed');
		return;
	}

	log.success('hub binary test passed successfully');
});
