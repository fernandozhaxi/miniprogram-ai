<template>
  <view class="content">
    <web-view :src="url" />
  </view>
</template>

<script setup>
import { getToken, getRefreshToken } from '@/utils/auth'
let baseUrl = import.meta.env.VITE_BASE_URL

const state = reactive({
  url: '',
})

onLoad(() => {
  const token = getToken()
  const refresh_token = getRefreshToken()
  console.log('token', token)
  console.log('refresh_token', refresh_token)
  let url = baseUrl + `?token=${token}` + `&refresh_token=${refresh_token}`
  url = encodeURI(url)
  console.log(url)
  state.url = url
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
