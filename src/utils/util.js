export const getCurrentTime = () => {
  let date = new Date()
  let y = date.getFullYear()
  let M = date.getMonth() + 1
  M = M < 10 ? '0' + M : M
  let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  // let rand = Math.round(Math.random() * 899 + 100)
  return y + M + d + h + m + s
}

export const objLength = input => {
  let type = toString(input)
  let length = 0
  if (type !== '[object Object]') {
    // throw '输入必须为对象{}！'
  } else {
    for (let key in input) {
      if (key !== 'number') {
        length++
      }
    }
  }
  return length
}

// 验证手机号码
export const vailPhone = number => {
  let flag = false
  let myreg = /^((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8}$/
  if (number.length !== 11) {
    flag = false
  } else if (!myreg.test(number)) {
    flag = false
  } else {
    flag = true
  }
  return flag
}

// 验证是否西班牙手机(6开头 9位数)
export const ifSpanish = number => {
  let flag = false
  let myreg = /^[6|7|9]{1}(\d+){8}$/
  if (number.length !== 9) {
    flag = false
  } else if (!myreg.test(number)) {
    flag = false
  } else {
    flag = true
  }
  return flag
}

// 浮点型除法
export const div = (a, b) => {
  let c
  let d
  let e = 0
  let f = 0
  try {
    e = a.toString.split('.')[1].length
  } catch (g) {}
  try {
    f = b.toString.split('.')[1].length
  } catch (g) {}
  c = Number(a.toString().replace('.', ''))
  d = Number(b.toString().replace('.', ''))
  return mul(c / d, Math.pow(10, f - e))
}

// 浮点型乘法
export const mul = (a, b) => {
  let c = 0
  let d = a.toString()
  let e = b.toString()
  try {
    c += d.split('.')[1].length
  } catch (f) {}
  try {
    c += e.split('.')[1].length
  } catch (f) { }
  return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
}

export const accAdd = (arg1, arg2) => {
  let r1
  let r2
  let m
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return ((arg1 * m + arg2 * m) / m).toFixed(2)
}

// 遍历对象属性和值
export const displayProp = obj => {
  let names = ''
  for (let name in obj) {
    names += name + obj[name]
  }
  return names
}

// 去除字符串所有空格
export const sTrim = text => {
  return text.replace(/\s/ig, '')
}

// 去除所有:
export const replaceMaohao = txt => {
  return txt.replace(/\:/ig, '')
}

// 转换星星分数
export const convertStarArray = score => {
  // 1 全星, 0 空星, 2 半星
  const arr = []
  for (let i = 1; i <= 5; i++) {
    if (score >= i) {
      arr.push(1)
    } else if (score > i - 1 && score < i + 1) {
      arr.push(2)
    } else {
      arr.push(0)
    }
  }
  return arr
}
