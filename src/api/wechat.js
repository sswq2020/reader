export function getSetting(auth) {
  return new Promise((resolve, reject) => {
    mpvue.getSetting({
      success(res) {
        if (res.authSetting[`scope.${auth}`]) {
          resolve(res)
        } else {
          reject(res)
        }
      },
      fail(res) {
        console.log(res)
      }
    })
  })
}

export function getUserInfo() {
  return new Promise((resolve, reject) => {
    mpvue.getUserInfo({
      success(res) {
        const {userInfo} = res
        if (userInfo) {
          resolve(userInfo)
        } else {
          reject(res)
        }
      },
      fail(res) {
        console.log(res)
      }
    })
  })
}
