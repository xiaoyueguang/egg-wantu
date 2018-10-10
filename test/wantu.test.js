'use strict';

const mock = require('egg-mock');

describe('test/wantu.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/wantu-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('init token for upload with defaultNamespace', () => {
    return app.httpRequest()
      .get('/')
      // 保证返回的JSON里的code为BadRequest就行. 错误的TOKEN会返回 InvalidToken
      .expect('BadRequest')
      .expect(200);
  });
  it('init token for upload with defaultNamespace', () => {
    return app.httpRequest()
      .get('/namespace')
      .expect('BadRequest')
      .expect(200);
  });
});
