
import { defineStore } from 'pinia';
import { loginApi } from '@/api/user'
import { setToken, setOpenId } from '@/utils/auth'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      nickName: '',
      avator: '',
    };
  },
  actions: {
    login() {
      return new Promise((resolve, reject) => {
        // 登录
        uni.login({
          success({ code }) {
            loginApi(code).then(({ token, openId }) => {
              setToken(token)
              setOpenId(openId)
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
