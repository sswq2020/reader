<template>
  <div>
    <detailbook :book="book"></detailbook>
    <detailrate :value="rate" @rateChange="ratechange"></detailrate>
  </div>
</template>

<script>
import detailbook from 'components/detail/DetailBook'
import detailrate from 'components/detail/DetailRate'
import { bookDetail } from 'api/index'
import { setStorageSync, getStorageSync, showLoading, hideLoading } from 'api/wechat'
export default {
  name: 'detail',
  components: {
    detailbook,
    detailrate
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
    const {fileName} = JSON.parse(this.$route.query.book)
    this._bookDetail(fileName, openId)
  }
}
</script>

<style lang="scss" scoped>

</style>
