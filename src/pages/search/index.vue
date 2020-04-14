<template>
  <div class="">
    <SearchBar
      :hotSearch="hotSearchKeyword"
      :focus="searchFocus"
      @onChange="onChange"
      @onClear="onClear"
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
      :value="[]"
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
import { getStorageSync } from 'api/wechat'
import { search, hotSearch } from 'api/index'

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
      tags: [
        'aaa',
        'bbb',
        'ccc',
        'ddd',
        'ddd',
        'ddd',
        'ddd',
        'ddd',
        'ddd'
      ],
      searchList: Object.create(null),
      openId: null
    }
  },
  computed: {
    showList() {
      return Object.keys(this.searchList).length > 0
    }
  },
  methods: {
    changeHotSearch() {},
    clearHistorySearch() {},
    searchKeyWord() {},
    onChange(keyword) {
      if (!keyword || keyword.trim().length === 0) {
        this.onClear()
        return
      }
      this.onSearch(keyword)
    },
    onClear() {
      this.searchList = Object.create(null)
    },
    async onSearch(keyword) {
      if (!this.openId) { return }
      const res = await search(keyword, this.openId)
      this.searchList = res.data
    },
    showBookDetail(text, index) {
      console.log(text, index)
    }

  },
  mounted() {
    this.openId = getStorageSync('openId')
    this.hotSearchKeyword = this.$route.query.hotSearch
    hotSearch().then((res) => {
      this.hotSearch = res.data.map((book) => book.title)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
