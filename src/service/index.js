import Server from './server.js';

export default {
  /**
   * 查询集装箱历史记录
   * @param {*} params
   */
  queryContainer(params) {
    return Server.post(`/cloudwalk/process/container/historyRecode`, params)
  },

}
