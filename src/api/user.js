import request from '@/utils/request';

let baseUrl = import.meta.env.VITE_BASE_URL

export const loginApi = function (code) {
  return new Promise((resolve, reject) => {
    uni.request({
      timeout: 10000,
      method: 'get',
      url: baseUrl + `/api/login/mini?code=${code}`,
      success(response) {
        let res = response.data
        // 请求成功，状态码不等于200
        const code = res.code
        if (code === 200) {
          resolve(res.data)
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
