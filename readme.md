# hub-bin [![Build Status](https://travis-ci.org/thejameskyle/hub-bin.svg?branch=master)](https://travis-ci.org/thejameskyle/hub-bin)

> Binary wrapper for Hub - hub helps you win at git. http://hub.github.com/


## CLI

```sh
$ npm install --save hub-bin
```

```sh
$ hub --help
```

## API

```sh
$ npm install --save hub-bin
```

```js
const execFile = require('child_process').execFile;
const hub = require('hub-bin');

execFile(hub, ['check'], (err, stdout) => {
    console.log(stdout);
});
```

## License

MIT © [James Kyle](https://github.com/thejameskyle)
