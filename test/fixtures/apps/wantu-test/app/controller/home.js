'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const token = ctx.service.wantu.init();
    const URL = `https://upload.media.aliyun.com/api/proxy/upload?Authorization=${token}&UserAgent=ALIMEDIASDK_WORKSTATION`;
    const { data } = await app.curl(URL, {
      dataType: 'json',
    });
    ctx.body = data.code;
  }
  async namespace() {
    const { ctx, app, config } = this;
    const token = ctx.service.wantu.init(config.wantu.namespace);
    const URL = `https://upload.media.aliyun.com/api/proxy/upload?Authorization=${token}&UserAgent=ALIMEDIASDK_WORKSTATION`;
    const { data } = await app.curl(URL, {
      dataType: 'json',
    });
    ctx.body = data.code;
  }
}

module.exports = HomeController;
