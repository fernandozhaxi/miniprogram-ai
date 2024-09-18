
import { defineStore } from 'pinia';
import { loginApi } from '@/api/user'
import { setToken, setRefreshToken } from '@/utils/auth'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
    };
  },
  actions: {
    login() {
      return new Promise((resolve, reject) => {
        // 登录
        uni.login({
          success({ code }) {
            loginApi(code).then(({ token, refresh_token }) => {
              setToken(token)
              setRefreshToken(refresh_token)
              resolve()
            })
          },
          fail(err) {
            reject(err)
          },
        })
      })
    },
  },
});
