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

// 查询商品列表
const getGoodsList = params => wxRequest(params, apiMall + '/api/mall/searchGoodsList')

// 用户的购物车商品列表
const cartList = params => wxRequest(params, apiMall + '/api/mall/goodsCart/list')

// 购物车的商品选中状态
const cartCheck = params => wxRequest(params, apiMall + '/api/mall/goodsCart/check')

// 购物车商品的选中状态(全选)
const cartCheckAll = params => wxRequest(params, apiMall + '/api/mall/goodsCart/checkAll')

// 购物车的商品删除
const cartDel = params => wxRequest(params, apiMall + '/api/mall/goodsCart/delete')

// 购物车的商品数量更新
const cartUpdateNum = params => wxRequest(params, apiMall + '/api/mall/goodsCart/updateNum')

// 直接购买商品
// const preOrder = params => wxRequest(params, apiMall + '/api/mall/goodsOrder/commitData')

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

// 根据订单号查询详情
const getOrderInfo = params => wxRequest(params, apiMall + '/api/mall/goodsOrder/getOrderDetail')

// 根据订单号查询物流
const orderExpressInfo = params => wxRequest(params, apiMall + '/api/orderExpress/orderExpressInfo')

/**
 * 用户信息相关
 */
// 添加用户足迹
const addBrowser = params => wxRequest(params, apiMall + '/api/userBrowse/add')

// 用户是否绑定手机号
const getUserInfo = params => wxRequest(params, apiMall + '/api/userCenter/getUserInfo')

// 查询关键字保存
const addSearchKeyword = params => wxRequest(params, apiMall + '/api/searchkeyword/add')

// 查询关键字列表
const searchKeywordList = params => wxRequest(params, apiMall + '/api/searchkeyword/list')

// 查询关键字清除
const clearSearchKeyword = params => wxRequest(params, apiMall + '/api/searchkeyword/clear')

// 用户的当天签到信息
const userSignInfo = params => wxRequest(params, apiMall + '/api/userSign/signInfo')
const doSign = params => wxRequest(params, apiMall + '/api/userSign/doSign')

// 获取最近7天的签到情况
const getSignDate = params => wxRequest(params, apiMall + '/api/userSign/getSignDate')

// 查询用户的已订购产品
const goodsUserOrderList = params => wxRequest(params, apiMall + '/api/mall/goodsOrder/goodsUserOrderList')

const registerUser = params => wxRequest(params, apiMall + '/api/userCenter/register')

// 发送短信
const sendRandCode = params => wxRequest(params, apiMall + '/api/sms/send')

// 查询我的订单
const getMyOrderList = params => wxRequest(params, apiMall + '/api/mall/goodsOrder/getMyOrderList')

// 查询我的订单数量
const getMyOrderSize = params => wxRequest(params, apiMall + '/api/mall/goodsOrder/getMyOrderSize')

// 根据订单号查询详情
const editOrderInfo = params => wxRequest(params, apiMall + '/api/mall/goodsOrder/opt')

// 退货操作
const refundApply = params => wxRequest(params, apiMall + '/api/mall/refund/saveRefundApply')

// 用户积分信息
const pointInfo = params => wxRequest(params, apiMall + '/api/userPoint/pointInfo')

// 用户足迹信息
const browseInfo = params => wxRequest(params, apiMall + '/api/userBrowse/browseInfo')

// 用户收藏的商品
const favoriteInfo = params => wxRequest(params, apiMall + '/api/goodsFavorite/favoriteInfo')

// 删除用户足迹
const delUserBrowse = params => wxRequest(params, apiMall + '/api/userBrowse/delete')

// 用户消息
const messageInfo = params => wxRequest(params, apiMall + '/api/systemMessage/messageInfo')

// 用户收货地址
const getUserAddress = params => wxRequest(params, apiMall + '/api/receiverInfo/list')

// 根据ID查询用户地址
const receiverInfoById = params => wxRequest(params, apiMall + '/api/receiverInfo/receiverInfoById')

// 保存用户收货地址
const saveAddress = params => wxRequest(params, apiMall + '/api/receiverInfo/saveOrUpdate')

// 根据ID删除收货地址
const delUserAddress = params => wxRequest(params, apiMall + '/api/receiverInfo/operation')

// 根据订单号查询详情
const getPayOrderDetail = params => wxRequest(params, apiMall + '/api/mall/goodsOrder/getPayOrderDetail')

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

// 支付统一下单
const toPay = params => wxRequest(params, apiMall + '/wepay/toPay')

// 直接购买商品
const preOrder = params => wxRequest(params, apiMall + '/api/mall/goodsOrder/commitData')

// 支付前生成订单
const saveByCart = params => wxRequest(params, apiMall + '/api/mall/goodsOrder/saveByCart')

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
  childGoodsCatetoryList,
  cartList,
  cartCheck,
  cartCheckAll,
  cartDel,
  cartUpdateNum,
  getUserInfo,
  getGoodsList,
  addSearchKeyword,
  searchKeywordList,
  clearSearchKeyword,
  userSignInfo,
  doSign,
  getSignDate,
  goodsUserOrderList,
  registerUser,
  sendRandCode,
  getMyOrderList,
  getMyOrderSize,
  editOrderInfo,
  toPay,
  refundApply,
  pointInfo,
  browseInfo,
  favoriteInfo,
  delUserBrowse,
  messageInfo,
  getUserAddress,
  receiverInfoById,
  saveAddress,
  delUserAddress,
  getPayOrderDetail,
  preOrder,
  saveByCart,
  getOrderInfo,
  orderExpressInfo
}
