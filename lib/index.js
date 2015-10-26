'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');

var VERSION = '2.2.1';
var BASE = 'https://github.com/github/hub/releases/download/v' + VERSION + '/';

module.exports = new BinWrapper()
	.src(BASE + 'hub-linux-386-' + VERSION + '.tar.gz', 'linux', '386')
	.src(BASE + 'hub-linux-amd64-' + VERSION + '.tar.gz', 'linux', 'amd64')
	.src(BASE + 'hub-mac-amd64-' + VERSION + '.tar.gz', 'darwin')
	.src(BASE + 'hub-windows-386-' + VERSION + '.tar.gz', 'windows', '386')
	.src(BASE + 'hub-windows-amd64-' + VERSION + '.tar.gz', 'windows', 'amd64')
	.dest(path.join(__dirname, '../vendor'))
	.use('hub');
