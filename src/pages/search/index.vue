<template>
  <div class="">
    <SearchBar
      :hotSearch="hotSearchKeyword"
      :focus="searchFocus"
      @onChange="onChange"
      @onClear="onClear"
      @confirmEnter="confirmEnter"
      ref="searchBar"
    />
    <TagGroup
      headerText="热门搜索"
      btnText="换一批"
      :value="hotSearch"
      @onBtnClick="changeHotSearch"
      @onTagClick="showBookDetail"
      v-if="hotSearch.length && !showList"
    ></TagGroup>
    <TagGroup
      headerText="历史搜索"
      btnText="清空"
      :value="historySearch"
      @onBtnClick="clearHistorySearch"
      @onTagClick="searchKeyWord"
      v-if="historySearch.length && !showList"
    ></TagGroup>

    <SearchList :data="searchList" v-if="showList"></SearchList>
  </div>
</template>

<script>
import TagGroup from 'components/base/TagGroup'
import SearchList from 'components/search/SearchList'
import SearchBar from 'components/home/SearchBar'
import { getStorageSync, setStorageSync, showToast } from 'api/wechat'
import { search, hotSearch } from 'api/index'
const KEY_HISTORY_SEARCH = 'historySearch'

export default {
  name: 'search',
  components: {
    TagGroup,
    SearchList,
    SearchBar
  },
  data() {
    return {
      hotSearch: [],
      hotSearchKeyword: '',
      historySearch: [],
      searchFocus: true,
      searchList: Object.create(null),
      openId: null,
      page: 1
    }
  },
  computed: {
    showList() {
      return Object.keys(this.searchList).length > 0
    }
  },
  methods: {
    async changeHotSearch() {
      const res = await hotSearch()
      this.hotSearch = res.data.map((book) => book.title)
    },
    clearHistorySearch() {
      this.historySearch = []
      setStorageSync(KEY_HISTORY_SEARCH, [])
    },
    searchKeyWord(text, index) {
      this.onClear()
      this.$refs.searchBar.setValue(text)
      this.onSearch(text)
    },
    onChange(keyword) {
      if (!keyword || keyword.trim().length === 0) {
        this.onClear()
        return
      }
      this.onClear()
      this.onSearch(keyword)
    },
    onClear() {
      this.page = 1
      this.searchList = Object.create(null)
    },
    async onSearch(keyword) {
      if (!this.openId) { return }
      const res = await search(keyword, this.openId, this.page)
      const { book } = res.data
      const searchBook = this.searchList.book ? this.searchList.book : []
      if (book && book.length) {
        this.searchList = {...res.data, book: searchBook.concat(book)}
      } else {
        showToast('没有多余数据')
      }
    },
    showBookDetail(text, index) {
      console.log(text, index)
    },
    confirmEnter(keyword) {
      // 1.判断是否有关键词
      if (!keyword || keyword.trim().length === 0) {
      // 如果没有,则获取热门关键词,通过热门关键词发起请求
        keyword = this.hotSearchKeyword
        this.$refs.searchBar.setValue(keyword)
      } else {
      // 如果有,则用搜索关键词发起
      }
      this.onClear()
      this.onSearch(keyword)

      // 2.将搜索结果写入历史搜索
      if (!this.historySearch.includes(keyword)) {
        this.historySearch.push(keyword)
      }
      setStorageSync(KEY_HISTORY_SEARCH, this.historySearch)

      // 3.将搜索框失去焦点
      this.searchFocus = false
    }

  },
  mounted() {
    this.openId = getStorageSync('openId')
    this.hotSearchKeyword = this.$route.query.hotSearch
    this.historySearch = getStorageSync(KEY_HISTORY_SEARCH) || []
    hotSearch().then((res) => {
      this.hotSearch = res.data.map((book) => book.title)
    })
  },
  // 小程序生命周期滚动
  onPageScroll() {
    console.log('scroll')
    if (this.searchFocus) {
      this.searchFocus = false
    }
  },
  // 小程序生命周期滚动
  onReachBottom() {
    if (this.showList) {
      this.page++
      const searchWord = this.$refs.searchBar.getValue()
      this.onSearch(searchWord)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
