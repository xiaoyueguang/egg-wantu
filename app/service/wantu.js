'use strict';
const Service = require('egg').Service;
const crypto = require('crypto');

class WantuService extends Service {
  init(namespace) {
    const { ak, sk, namespace: defaultNamespace } = this.config.wantu;
    const uploadPolify = {
      detectMime: '1',
      insertOnly: '0',
      namespace: namespace || defaultNamespace,
      expiration: -1,
    };
    const encodedPolicy = this.encodeWithURLSafeBase64(JSON.stringify(uploadPolify));
    const hash = crypto.createHmac('sha1', sk);
    hash.update(encodedPolicy);
    const signed = hash.digest('hex');
    const data = ak + ':' + encodedPolicy + ':' + signed;
    const token = 'UPLOAD_AK_TOP ' + this.encodeWithURLSafeBase64(data);
    return token;
  }
  encodeWithURLSafeBase64(str) {
    return new Buffer(str).toString('base64').replace('=', '');
  }
}

module.exports = WantuService;
