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
const hostGoodsList = params => wxRequest(params, apiMall + '/api/home/hostGoodsList')

// 查询商品详情信息
const goodsDetail = params => wxRequest(params, apiMall + '/api/mall/goods')

// 商品加入购物车
const addCart = params => wxRequest(params, apiMall + '/api/mall/goodsCart/add')

// 商品收藏
const goodsFavorite = params => wxRequest(params, apiMall + '/api/mall/goodsFavorite/add')

// 商品收藏删除
const goodsUnFavorite = params => wxRequest(params, apiMall + '/api/mall/goodsFavorite/delete')

// 商品是否已收藏
const goodsIsFavorite = params => wxRequest(params, apiMall + '/api/mall/goodsFavorite/goodsIsFavorite')

/**
 * 用户信息相关
 */
// 添加用户足迹
const addBrowser = params => wxRequest(params, apiMall + '/api/userBrowse/add')

/**
 * 商品分类 --- start
 */
// 一级分类
const rootCtegoryList = params => wxRequest(params, apiMall + '/api/mall/rootCtegoryList')

// 二级，三级分类
const childGoodsCatetoryList = params => wxRequest(params, apiMall + '/api/mall/childGoodsCatetoryList')
/**
 * 商品分类 --- end
 */

// 查询广告列表
const getAdList = params => wxRequest(params, apiMall + '/api/adverts/list')

module.exports = {
  getDiscoverList,
  wxJsCode2Session,
  user2session,
  getHomeDiscoverList,
  getAdList,
  hostGoodsList,
  goodsDetail,
  addCart,
  goodsFavorite,
  goodsUnFavorite,
  goodsIsFavorite,
  addBrowser,
  rootCtegoryList,
  childGoodsCatetoryList
}
