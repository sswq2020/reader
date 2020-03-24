<template>
  <div class="home">
    <SearchBar :disabled="false" @onClick="onSearchBarkClick" />
    <HomeCard />
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
import ImageView from '../../components/base/ImageView'
import HomeCard from '../../components/base/HomeCard'
export default {
  components: {
    SearchBar,
    ImageView,
    HomeCard
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
