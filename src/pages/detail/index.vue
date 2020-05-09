<template>
  <div>
    <detailbook :book="book"></detailbook>
    <detailstat v-if="book"
      :readers="book.readers"
      :readerNum="book.readerNum"
      :rankAvg="book.rankAvg"
      :rankNum="book.rankNum"
    ></detailstat>
    <detailrate :value="rate" @rateChange="ratechange"></detailrate>
    <detailcontents @readBook="readBook" :contents="contents"></detailcontents>
  </div>
</template>

<script>
import detailbook from 'components/detail/DetailBook'
import detailrate from 'components/detail/DetailRate'
import detailstat from 'components/detail/DetailStat'
import detailcontents from 'components/detail/DetailContents'

import { bookDetail, bookContents } from 'api/index'
import {
  setStorageSync,
  getStorageSync,
  showLoading,
  hideLoading
} from 'api/wechat'
export default {
  name: 'detail',
  components: {
    detailbook,
    detailrate,
    detailstat,
    detailcontents
  },
  data() {
    return {
      book: null,
      rate: getStorageSync('rate') || 0,
      contents: []
    }
  },
  methods: {
    async _bookDetail(fileName, openId) {
      showLoading('正在加载')
      const res = await bookDetail(fileName, openId)
      const _res_ = await bookContents(fileName)
      hideLoading()
      this.book = res.data
      this.contents = _res_.data
    },
    ratechange(rate) {
      console.log('轻点评分' + rate)
      this.rate = rate
      setStorageSync('rate', rate)
    },
    readBook(nav) {
      console.log('跳转到阅读器', nav)
    }
  },
  mounted() {
    const openId = getStorageSync('openId')
    const { fileName } = this.$route.query
    this._bookDetail(fileName, openId)
  }
}
</script>

<style lang="scss" scoped>
</style>
