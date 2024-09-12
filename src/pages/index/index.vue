<template>
  <view class="content">
    <web-view :src="url" @onPostMessage="handleMessage" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      url: "http://localhost:3090",
    };
  },
  onLoad() {},
  methods: {
    handleMessage(e) {
      console.log("接收到网页发送过来的消息", e);
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
