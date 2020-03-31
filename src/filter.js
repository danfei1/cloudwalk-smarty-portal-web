import Vue from 'vue'

var dateFormat = {
  padLeftZero: function(str) {
    return ('00' + str).substr(str.length)
  },
  formatDate: function(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? str : this.padLeftZero(str)
        )
      }
    }
    return fmt
  }
}

Vue.filter('formatDate', function(val) {
  let date = new Date(val)
  return dateFormat.formatDate(date, 'yyyy-MM-dd hh:mm:ss')
})
