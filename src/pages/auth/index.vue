<template>
  <view class="content">
    <button size="default" type="default" hover-class="is-hover" @click="handleAuth">确认授权</button>
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
          useUserStore()
            .login(code)
            .then(() => {
              uni.redirectTo({
                url: '/pages/web_view/index',
              })
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
  height: 100vh;
}
</style>
