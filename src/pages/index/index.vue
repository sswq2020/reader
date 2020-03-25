<template>
  <div class="home">
    <SearchBar :disabled="false" @onClick="onSearchBarkClick" />
    <HomeCard />
    <HomeBanner
      @onClick="onBannerClick"
      img="http://www.youbaobao.xyz/book/res/bg.jpg"
      subTitle="立刻体验"
      title="镇江公交查询小程序指南"
    />
    <div class="home-book">
      <HomeBook
        title="为你推荐"
        row="2"
        col="2"
        :data="data"
        :mode="'category'"
        btnText="更多"
        @onMoreClick="onBookMoreClick"
        @onBookClick="onHomeBookClick"
      />
    </div>
  </div>
</template>

<script>
import SearchBar from 'components/home/SearchBar'
import ImageView from 'components/base/ImageView'
import HomeCard from 'components/base/HomeCard'
import HomeBanner from 'components/base/HomeBanner'
import HomeBook from 'components/base/HomeBook'
export default {
  components: {
    SearchBar,
    ImageView,
    HomeCard,
    HomeBanner,
    HomeBook
  },
  methods: {
    onSearchBarkClick() {
      // 跳转到搜索页面
    },
    onBannerClick() {
      console.log('Banner CLick')
    },
    onBookMoreClick() {
      console.log('more click')
    },
    onHomeBookClick() {
      console.log('book click')
    }
  },
  watch: {
    src(newV, oldV) {}
  },
  data() {
    return {
      data: [
        {
          'cover': 'https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-25474-6_CoverFigure.jpg',
          'category': 12,
          'categoryText': 'Biomedicine',
          'num': 14,
          'cover2': 'https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-72790-5_CoverFigure.jpg'
        },
        {
          'cover': 'https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-33515-5_CoverFigure.jpg',
          'category': 13,
          'categoryText': 'BusinessandManagement',
          'num': 16,
          'cover2': 'https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-95261-1_CoverFigure.jpg'
        },
        {
          'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-90415-3_CoverFigure.jpg',
          'category': 1,
          'categoryText': 'ComputerScience',
          'num': 56,
          'cover2': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-96142-2_CoverFigure.jpg'
        }]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-book {
  margin-top: 23px;
}
</style>
