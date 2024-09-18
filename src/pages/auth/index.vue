<template>
  <view class="content">
    <button size="default" type="default" hover-class="is-hover" @click="handleAuth">授权登录</button>
    <button size="default" type="default" hover-class="is-hover" @click="handleAuthTest">模拟授权成功</button>
  </view>
</template>

<script>
import { useUserStore } from '@/store'
import { setToken, setRefreshToken, setOpenId } from '@/utils/auth'

export default {
  data() {
    return {
      code: '',
    }
  },
  onLoad() {},
  methods: {
    handleAuth() {
      uni.login({
        success({ code }) {
          console.log('调用微信小程序的登录成功', code)
          useUserStore()
            .login(code)
            .then(() => {
              console.log('调用Librechat服务器的登录成功')
              // 跳转到webview页面
            })
        },
        fail(err) {
          reject(err)
        },
      })
    },
    handleAuthTest() {
      setToken(
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmMyNzA5Yzg0NjA3N2JkYjA0NTM1NiIsInVzZXJuYW1lIjoiZmVybmFuZG96aGF4aUBnbWFpbC5jb20iLCJwcm92aWRlciI6ImxvY2FsIiwiZW1haWwiOiJmZXJuYW5kb3poYXhpQGdtYWlsLmNvbSIsImlhdCI6MTcyNjY0MDQzNywiZXhwIjoxNzI2NjQxMzM3fQ.crwHxbTWniTbhcNbz2JLs4cMp39fI8XrRgCnOt7xXDw`
      )
      setRefreshToken(
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmMyNzA5Yzg0NjA3N2JkYjA0NTM1NiIsImlhdCI6MTcyNjY0MDQzNywiZXhwIjoxNzI3OTM2NDM3fQ.LN7w7pGRwuRA38NpX8kJvQHKP3G2Dwq1p7sUt2pC-CM`
      )
      uni.redirectTo({
        url: '/pages/web_view/index',
      })
    },
  },
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
