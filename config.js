// 配置文件
module.exports = {
  cookie: '',
  // 请求地址
  baseUrl: 'https://api.juejin.cn',
  uid: '',
  push: {
    PUSH_URL: 'http://www.pushplus.plus/send', // pushplus 推送api
    PUSH_PLUS_TOKEN: '',//微信pushplustoken
    DINGTALK_URL: 'https://oapi.dingtalk.com/robot/send?access_token=',// 钉钉webhook
    DING_TALK_TOKEN: ''
  },
  // api地址
  api: {
    // 签到
    checkIn: '/growth_api/v1/check_in',
    // 查询签到
    getCheckStatus: '/growth_api/v1/get_today_status',
    // 查询签到天数
    getCheckInDays: '/growth_api/v1/get_counts',
    // 查询当前矿石
    getCurrentPoint: '/growth_api/v1/get_cur_point',
    // 查询抽奖
    getlotteryStatus: '/growth_api/v1/lottery_config/get',
    // 抽奖
    draw: '/growth_api/v1/lottery/draw',
    // 获取沾喜气列表用户
    getLuckyUserList: '/growth_api/v1/lottery_history/global_big',
    // 沾喜气
    dipLucky: '/growth_api/v1/lottery_lucky/dip_lucky'
  },
  //邮箱配置
  emailConfig: {
    service: 'qq',
    email: '',
    pass: ''
  }
}
