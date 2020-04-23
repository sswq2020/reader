<template>
  <div>
    <div class="home" v-if="isAuth">
      <SearchBar :hotSearch="hotSearch" :disabled="false" @onClick="onSearchBarkClick" />
      <HomeCard :data="homeCard" @onClick="onHomeBookClick" />
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
    <Auth v-else @getUserInfo="init"></Auth>
  </div>
</template>
<script>
import SearchBar from 'components/home/SearchBar'
import ImageView from 'components/base/ImageView'
import HomeCard from 'components/home/HomeCard'
import HomeBanner from 'components/home/HomeBanner'
import HomeBook from 'components/home/HomeBook'
import Auth from 'components/base/Auth'
import { getHomeData, getRecommend, getFreeRead, getHotBook, register } from 'api/index'
import { getSetting, getUserInfo, setStorageSync, getStorageSync, getUserOpenId, showLoading, hideLoading } from 'api/wechat'
export default {
  components: {
    SearchBar,
    ImageView,
    HomeCard,
    HomeBanner,
    HomeBook,
    Auth
  },
  data() {
    return {
      isAuth: true,
      hotSearch: '',
      homeCard: null,
      banner: {},
      recommend: [],
      freeRead: [],
      hotBook: [],
      category: []
    }
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
      // 跳转到搜索页面,这个路由跳转是在app.json里配置的
      this.$router.push({
        path: '/pages/search/main',
        query: {
          hotSearch: this.hotSearch
        }
      })
    },
    onBannerClick() {
      console.log('Banner CLick')
    },
    onCategoryMoreClick() {
      console.log('more click')
    },
    onHomeBookClick() {
      this.$router.push({
        path: '/pages/detail/main'
      })
    },
    async _getHomeData(openId, userInfo) {
      try {
        const res = await getHomeData(openId)
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
          userInfo
        }
        hideLoading()
      } catch (error) {
        hideLoading()
      }
    },
    /** *判断是否已经授权**/
    async _getSetting() {
      let that = this
      try {
        const res = await getSetting('userInfo')
        console.info('授权成功', res)
        that.isAuth = true
        showLoading('正在加载')
        this._getUserInfo()
      } catch (error) {
        console.log('授权失败')
        that.isAuth = false
      }
    },
    /** *获取微信授权得到的userInfo,再根据是否有openId,去请求首页信息**/
    async _getUserInfo() {
      if (!this.isAuth) { return }
      const userInfo = await getUserInfo()
      setStorageSync('userInfo', userInfo)
      let openId = getStorageSync('openId')
      if (!openId || openId.length === 0) {
        openId = await getUserOpenId()
      }
      this._getHomeData(openId, userInfo).then(() => {
        register(openId, userInfo)
      })
    },
    init() {
      this._getSetting()
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.home-book {
  margin-top: 23px;
}
</style>
