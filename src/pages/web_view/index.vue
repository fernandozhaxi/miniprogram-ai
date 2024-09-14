<template>
  <view class="content">
    <web-view :src="url" />
  </view>
</template>

<script setup>
import { getToken, getOpenId } from '@/utils/auth'
let baseUrl = import.meta.env.VITE_BASE_URL

const state = reactive({
  url: '',
})

onLoad(() => {
  const token = getToken()
  const openId = getOpenId()
  console.log('token', token)
  console.log('openId', openId)
  state.url = baseUrl + (token ? `?token=${token}` : '')
  console.log(state.url)
})

const { url } = toRefs(state)
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
