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
  </div>
</template>

<script>
import detailbook from 'components/detail/DetailBook'
import detailrate from 'components/detail/DetailRate'
import detailstat from 'components/detail/DetailStat'

import { bookDetail } from 'api/index'
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
    detailstat
  },
  data() {
    return {
      book: null,
      rate: getStorageSync('rate') || 0
    }
  },
  methods: {
    async _bookDetail(fileName, openId) {
      showLoading('正在加载')
      const res = await bookDetail(fileName, openId)
      hideLoading()
      this.book = res.data
    },
    ratechange(rate) {
      console.log('轻点评分' + rate)
      this.rate = rate
      setStorageSync('rate', rate)
    }
  },
  mounted() {
    const openId = getStorageSync('openId')
    const { fileName } = JSON.parse(this.$route.query.book)
    this._bookDetail(fileName, openId)
  }
}
</script>

<style lang="scss" scoped>
</style>
