# slasher

Prefix a path with leading slash

## Install

```
npm install slasher --save
```

## Usage

```js
var slash = require('slasher');
var pathname = 'some/path/to/something';
var pathname = slash(pathname); // OUTPUTS: '/some/path/to/something'
```

## Run Tests

```
npm install
npm test
```