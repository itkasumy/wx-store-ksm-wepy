/**
 * 提示与加载工具类
 */
export default class Tips {
  constructor () {
    this.isLoading = false
  }

	/**
	 * 弹出提示框
	 * @param {*提示框的title String} title
	 * @param {*提示框的显示时间 Number} duration
	 */
  static success (title, duration = 500) {
    setTimeout(() => {
      wx.showToast({
        title: title,
        icon: 'success', // loading
        duration: duration,
        mask: true
      })
    }, 300)
    if (duration > 0) {
      return Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, duration)
      })
    }
  }

	/**
	 * 弹出确认框
	 * @param {*确认框的提示内容 String} text
	 * @param {* Object} payload
	 * @param {*确认框的title String} title
	 */
  static confirm (text, payload = {}, title = '提示') {
    return new Promise((resolve, reject) => {
      xw.showModal({
        title: title,
        content: text,
        showCancel: true,
        success: res => {
          if (res.confirm) {
            resolve(payload)
          } else if (res.showCancel) {
            reject(payload)
          }
        },
        fail: res => {
          reject(payload)
        }
      })
    })
  }

	/**
	 * toast
	 * @param {*toast的title String} title
	 * @param {*隐藏结束回调 function} onHide
	 * @param {*图标类型 String} icon
	 */
  static toast (title, onHide, icon = 'success') {
    setTimeout(() => {
      wx.showToast({
        title: title,
        icon: icon,
        duration: 500,
        mask: true
      })
    }, 300)

		// 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide()
      }, 500)
    }
  }

	/**
	 * 警告框
	 * @param {*警告框的title String} title
	 */
  static alert (title) {
    wx.showToast({
      title: title,
      icon: '../images/alert.png',
      duration: 1500,
      mask: true
    })
  }

	/**
	 * 错误框
	 * @param {*错误框的title String} title
	 * @param {*错误框结束后的回调 function} onHide
	 */
  static error (title, onHide) {
    wx.showToast({
      title: title,
      icon: '../images/error.png',
      duration: 500,
      mask: true
    })

		// 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide()
      }, 500)
    }
  }

	/**
	 * 弹出加载提示
	 * @param {*加载框的提示} title
	 */
  static loading (title = '加载中') {
    if (Tips.isLoading) {
      return
    }
    Tips.isLoading = true
    wx.showLoading({
      title: title,
      mask: true
    })
  }

	/**
	 * 加载完毕
	 */
  static loaded () {
    if (Tips.isLoading) {
      Tips.isLoading = false
      wx.hideLoading()
    }
  }

	/**
	 * 分享提示框
	 * @param {*分享的title String} title
	 * @param {*分享的链接 String} url
	 * @param {*分享的描述 String} desc
	 */
  static share (title, url, desc) {
    return {
      title: title,
      path: url,
      desc: desc,
      success: res => {
        Tips.toast('分享成功')
      }
    }
  }
}

/**
 * 静态变量，是否加载中
 */
Tips.isLoading = false
