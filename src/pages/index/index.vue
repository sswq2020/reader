<template>
  <div class="home">
    <SearchBar :hotSearch="hotSearch" :disabled="false" @onClick="onSearchBarkClick" />
    <HomeCard :data="homeCard" />
    <HomeBanner
      @onClick="onBannerClick"
      img="http://www.youbaobao.xyz/book/res/bg.jpg"
      subTitle="立刻体验"
      title="镇江公交查询小程序指南"
    />
    <div class="home-book">
      <HomeBook
        title="为你推荐"
        row="1"
        col="3"
        :data="recommend"
        mode="col"
        btnText="换一批"
        @onMoreClick="() => recommendChange('recommend')"
        @onBookClick="onHomeBookClick"
      />
    </div>
    <div class="home-book">
      <HomeBook
        title="免费阅读"
        row="2"
        col="2"
        :data="freeRead"
        mode="row"
        btnText="换一批"
        @onMoreClick="() => recommendChange('freeRead')"
        @onBookClick="onHomeBookClick"
      />
    </div>
    <div class="home-book">
      <HomeBook
        title="当前最热"
        row="1"
        col="4"
        :data="hotBook"
        mode="col"
        btnText="换一批"
        @onMoreClick="() => recommendChange('hotBook')"
        @onBookClick="onHomeBookClick"
      />
    </div>
    <div class="home-book">
      <HomeBook
        title="分类"
        row="2"
        col="2"
        :data="category"
        mode="category"
        btnText="查看全部"
        @onMoreClick="onCategoryMoreClick"
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
import { getHomeData, getRecommend, getFreeRead, getHotBook } from 'api/index'
export default {
  components: {
    SearchBar,
    ImageView,
    HomeCard,
    HomeBanner,
    HomeBook
  },
  methods: {
    recommendChange(key) {
      switch (key) {
        case 'recommend':
          getRecommend().then(res => {
            this.recommend = res.data
          })
          break
        case 'freeRead':
          getFreeRead().then(res => {
            this.freeRead = res.data
          })
          break
        case 'hotBook':
          getHotBook().then(res => {
            this.hotBook = res.data
          })
          break
        default:
          break
      }

      console.log(key)
    },
    onSearchBarkClick() {
      // 跳转到搜索页面
    },
    onBannerClick() {
      console.log('Banner CLick')
    },
    onCategoryMoreClick() {
      console.log('more click')
    },
    onHomeBookClick() {
      console.log('book click')
    },
    async _getHomeData() {
      const res = await getHomeData('1234')
      const {
        hotSearch: { keyword },
        category,
        recommend,
        freeRead,
        hotBook,
        shelf,
        shelfCount,
        banner
      } = res.data
      this.hotSearch = keyword
      this.category = category
      this.recommend = recommend
      this.freeRead = freeRead
      this.hotBook = hotBook
      this.shelf = shelf
      this.banner = banner
      this.homeCard = {
        bookList: shelf,
        num: shelfCount,
        userInfo: {
          nickName: '米老鼠',
          avatar: 'https://qpic.y.qq.com/music_cover/hKFribMhwH4ClwNWJxicuCxmpic7Ateupz2nto2UYtYZn9VlORc1DP5rg/300?n=1'
        }

      }
    }
  },
  watch: {
    src(newV, oldV) {}
  },
  data() {
    return {
      hotSearch: '',
      homeCard: null,
      banner: {},
      recommend: [],
      freeRead: [],
      hotBook: [],
      category: []
    }
  },
  mounted() {
    this._getHomeData()
  }
}
</script>

<style lang="scss" scoped>
.home-book {
  margin-top: 23px;
}
</style>
