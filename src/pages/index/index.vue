<template>
  <div class="home">
    <SearchBar :disabled="false" @onClick="onSearchBarkClick" />
    <HomeCard />
    <HomeBanner
      @onClick="onBannerClick"
      img="http://www.youbaobao.xyz/book/res/bg.jpg"
      subTitle="立刻体验"
      title="镇江公交查询小程序指南" />
  </div>
</template>

<script>
import SearchBar from 'components/home/SearchBar'
import ImageView from 'components/base/ImageView'
import HomeCard from 'components/base/HomeCard'
import HomeBanner from 'components/base/HomeBanner'
export default {
  components: {
    SearchBar,
    ImageView,
    HomeCard,
    HomeBanner
  },
  methods: {
    onSearchBarkClick() {
      // 跳转到搜索页面
    },
    onBannerClick() {
      console.log('Banner CLick')
    }
  },
  watch: {
    src(newV, oldV) {}
  }
}
</script>

<style lang="scss" scoped>
</style>
