<template>

  <div class="image-view" @click="onClick">
    <!-- img在微信里叫image,bindload,binderror都因为mpvue做了处理转换 -->
    <img
      :class="round ? 'round image': 'image' "
      :src="src"
      :mode="mode"
      :lazy-load="lazyLoad"
      :style="{height}"
      @load="onLoad"
      @error="onError"
      v-show="!isLoading && !error"
    />

    <img
      :class="round ? 'round image': 'image' "
      src="https://qpic.y.qq.com/music_cover/hKFribMhwH4ClwNWJxicuCxmpic7Ateupz2nto2UYtYZn9VlORc1DP5rg/300?n=1"
      :mode="mode"
      :lazy-load="lazyLoad"
      :style="{height}"
      v-show="error || isLoading"
    />

  </div>
</template>

<script>
export default {
  name: 'ImageView',
  props: {
    src: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'widthFix'
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: 'auto'
    }
  },
  data() {
    return {
      isLoading: true,
      error: false
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    },
    onLoad() {
      console.log(1)
      this.isLoading = false
      this.error = false
    },
    onError() {
      console.log(2)
      this.error = true
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.image-view {
  width:100%;
  .image{
    width:100%;
    &.round{
      border-radius: 50%;
    }
  }
}
</style>
