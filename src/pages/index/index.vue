<template>
  <div class="home">
    <SearchBar :disabled="false" @onClick="onSearchBarkClick" />
    <ImageView src="https://www.youbaobao.xyz/mpvue-res/big.jpg" />
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
import ImageView from '../../components/base/ImageView'
export default {
  components: {
    SearchBar,
    ImageView
  },
  methods: {
    onSearchBarkClick() {
      // 跳转到搜索页面
    }
  },
  watch: {
    src(newV, oldV) {}
  }
}
</script>

<style lang="scss" scoped>
</style>
