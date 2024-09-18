import request from '@/utils/request';

let baseUrl = import.meta.env.VITE_BASE_URL

export const loginApi = function (code) {
  return new Promise((resolve, reject) => {
    uni.request({
      timeout: 10000,
      method: 'get',
      url: baseUrl + `/api/auth/wxminiLogin?code=${code}`,
      success(response) {
        let data = response.data
        if (response.statusCode === 200) {
          // 请求成功，状态码不等于200
          const cookie = response.header['Set-Cookie'];
          const match = cookie.match(/refreshToken=([^;]+)/);
          resolve({
            token: data.token,
            refresh_token: match[1]
          })
        } else {
          reject()
        }
      },
      fail(err) {
        reject(err)
      },
    })
  })
}
