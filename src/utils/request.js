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

export function fetchGet (url, params = {}) {
  return new Promise((resolve, reject) => {
    const fly = createFly()
    if (fly) {
      fly.get(url, params).then(response => {
        resolve(response)
      }).catch((err) => {
        handleError(err)
        console.log(err)
        reject(err)
      })
    }
  })
}

export function fetchPost (url, params = {}) {
  return new Promise((resolve, reject) => {
    const fly = createFly()
    if (fly) {
      fly.post(url, params).then(response => {
        resolve(response)
      }).catch((err) => {
        handleError(err)
        console.log(err)
        reject(err)
      })
    }
  })
}
