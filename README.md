# egg-wantu

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-wantu.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-wantu
[travis-image]: https://img.shields.io/travis/eggjs/egg-wantu.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-wantu
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-wantu.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-wantu?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-wantu.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-wantu
[snyk-image]: https://snyk.io/test/npm/egg-wantu/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-wantu
[download-image]: https://img.shields.io/npm/dm/egg-wantu.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-wantu

<!--
Description here.
-->

## Install

```bash
$ npm i egg-wantu --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.wantu = {
  enable: true,
  package: 'egg-wantu',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.wantu = {
  ak: 'your ak',
  sk: 'your sk',
  namespace: 'default namespace'
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->
```es6
const token = ctx.service.wantu.init('default space');
this.ctx.body = token;
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
