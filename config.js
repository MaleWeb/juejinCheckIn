// 配置文件
module.exports = {
  cookie: 'MONITOR_WEB_ID=755edc85-5018-455f-b7fe-633c264f8b03; passport_csrf_token_default=0e4366b79a639a3bddf0d9c5862715bf; passport_csrf_token=0e4366b79a639a3bddf0d9c5862715bf; _ga=GA1.2.1789119896.1642408130; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227054045818542048799%2522%252C%2522ssid%2522%253A%2522cbca02f5-7ad7-416a-a6ec-4d09aa71ddd2%2522%252C%2522user_unique_id%2522%253A%25227054045818542048799%2522%252C%2522timestamp%2522%253A1642398038073%257D; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22}; _tea_utm_cache_2018={%22utm_source%22:%22gold_browser_extension%22}; sid_guard=695eaaf16ea5d73738e846d9c4e119ed%7C1644892303%7C5184000%7CSat%2C+16-Apr-2022+02%3A31%3A43+GMT; uid_tt=74f046b5444b70dda61c5a3af7d5a0fa; uid_tt_ss=74f046b5444b70dda61c5a3af7d5a0fa; sid_tt=695eaaf16ea5d73738e846d9c4e119ed; sessionid=695eaaf16ea5d73738e846d9c4e119ed; sessionid_ss=695eaaf16ea5d73738e846d9c4e119ed; sid_ucp_v1=1.0.0-KGQ0MDE4ZmQwMWVkMTRjZTViNTYxZjE4N2IwMDRlYzAzNThlNDViYzAKFgj-wLC__fWtBRCPoayQBhiwFDgIQAsaAmxmIiA2OTVlYWFmMTZlYTVkNzM3MzhlODQ2ZDljNGUxMTllZA; ssid_ucp_v1=1.0.0-KGQ0MDE4ZmQwMWVkMTRjZTViNTYxZjE4N2IwMDRlYzAzNThlNDViYzAKFgj-wLC__fWtBRCPoayQBhiwFDgIQAsaAmxmIiA2OTVlYWFmMTZlYTVkNzM3MzhlODQ2ZDljNGUxMTllZA; n_mh=-7n3Pcs_VT-cAeA429t8mAOtd8wWQIVbhEnvWidS3C8; _gid=GA1.2.1334282588.1645411823',
  // 请求地址
  baseUrl: 'https://api.juejin.cn',
  uid:'3016715636842622',
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
    email: '896226896@qq.com',
    pass: 'ktcchehqxbrpbega'
  }
}