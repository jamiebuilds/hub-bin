'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');

var VERSION = '2.5.1';
var BASE = 'https://github.com/github/hub/releases/download/v' + VERSION + '/';

module.exports = new BinWrapper()
	.src(BASE + 'hub-linux-386-' + VERSION + '.tgz', 'linux', '386')
	.src(BASE + 'hub-linux-amd64-' + VERSION + '.tgz', 'linux', 'amd64')
	.src(BASE + 'hub-darwin-amd64-' + VERSION + '.tgz', 'darwin')
	.src(BASE + 'hub-windows-386-' + VERSION + '.zip', 'windows', '386')
	.src(BASE + 'hub-windows-amd64-' + VERSION + '.zip', 'windows', 'amd64')
	.dest(path.join(__dirname, '../vendor'))
	.use('bin/hub');
