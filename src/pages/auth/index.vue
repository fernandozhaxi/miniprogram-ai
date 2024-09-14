<template>
  <view class="content">
    <button size="default" type="default" hover-class="is-hover" @click="handleAuth">授权登录</button>
  </view>
</template>

<script>
import { useUserStore } from '@/store'

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
