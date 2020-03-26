/** *返回fly实例的工厂方法**/
export function createFly () {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  }
  return null
}

export function handleError (err) {
  console.log(err)
}

export function fetch (url, params = {}, method = 'get') {
  return new Promise((resolve, reject) => {
    const fly = createFly()
    if (fly) {
      fly[method](url, params).then(response => {
        if (response && response.data && response.data.error_code === 0) {
          resolve(response.data)
        } else {
          const msg = (response && response.data && response.data.msg) || '请求失败'
          mpvue.showToast({
            title: msg,
            duration: 2000
          })
          reject(response)
        }
      }).catch((err) => {
        handleError(err)
        console.log(err)
        reject(err)
      })
    }
  })
}
