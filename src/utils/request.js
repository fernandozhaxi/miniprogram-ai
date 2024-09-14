import { getToken, getOpenId } from '@/utils/auth'
import { useUserStore } from '@/store'

let requestArr = [] // 请求队列
let isRefreshing = false //是否正在刷新token
let baseUrl = import.meta.env.VITE_BASE_URL

// 401 刷新token
function refreshToken(option, resolve) {
  //缓存请求到队列中
  requestArr.push(() => {
    resolve(request(option))
  })
  if (!isRefreshing) {
    isRefreshing = true
    useUserStore()
      .login()
      .then(() => {
        // 重新请求队列
        requestArr.map(MT => {
          console.log('重新登录')
          MT()
        })
        requestArr = [] //清空队列
      })
      .finally(() => {
        //解除正在刷新
        isRefreshing = false
      })
  }
}

function request({ url = '', data = {}, method = 'POST', header = {}, hideLoading = false, hideMessage }) {
  const option = {
    url,
    data,
    method,
    header,
    hideLoading,
    hideMessage,
  }
  return new Promise((resolve, reject) => {
    header['wu-token'] = getOpenId()
    header['b2-token'] = getToken()
    uni.request({
      timeout: 60000,
      method,
      url: baseUrl + url,
      data,
      header,
      success(response) {
        let res = response.data
        // 请求成功，状态码不等于200
        const code = res.code
        if (code !== 200) {
          if (hideMessage) {
            reject(res || 'Error')
          } else {
            if ([401].includes(code)) {
              //token过期，刷新token
              refreshToken(option, resolve)
            } else {
              uni.showToast({
                title: `操作异常，请联系管理员(${res.errorMsg})!`,
                icon: 'none',
                duration: 3000,
              })
              reject(res || 'Error')
            }
          }
        } else {
          resolve(res.data)
        }
      },
      fail(err) {
        reject(err)
      },
    })
  })
}
export default request
