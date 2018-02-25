import {wxRequest} from '../utils/wxRequest'

// let ent = '-test' // -dev 或 -test
const apiMall = 'https://sujiefs.com/'
// const apiMall = 'https://api.tangxinmao.com'

// 获取发现好商品接口
const getDiscoverList = params => wxRequest(params, apiMall + '/api/list?cateidOne=1&cateidTwo=0&price=0&sales=2')

// 微信的 JSCODE 换取 sessionkey
const wxJsCode2Session = params => wxRequest(params, apiMall + '/api/wechat/jscode2session')
const user2session = params => wxRequest(params, apiMall + '/api/wechat/user2session?jsoncalback=?')

// 商品接口---begin
// 首页发现商品接口
const getHomeDiscoverList = params => wxRequest(params, apiMall + '/api/mall/discoverList')

// 查询广告列表
const getAdList = params => wxRequest(params, apiMall + '/api/adverts/list')

module.exports = {
  getDiscoverList,
  wxJsCode2Session,
  user2session,
  getHomeDiscoverList,
  getAdList
}
